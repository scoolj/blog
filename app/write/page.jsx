"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, {useState, useEffect} from 'react'

import "react-quill/dist/quill.bubble.css"
import {useSession} from 'next-auth/react'

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '../utils/firebase'
import dynamic from 'next/dynamic'

const storage = getStorage(app);

const WritePage = () => {
    const {status} = useSession()
    const ReactQuill = dynamic(()=> import('react-quill'),{ssr: false}); 
  
    const router = useRouter();
    
    const [open, setOpen] = useState(false)
    const [file, setFile] = useState(null)
    const [media, setMedia] = useState("")
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [catSlug, setCatSlug] = useState("");

    useEffect(() => {
      const upload = () => {
            const name = new Date().getTime + file.name;

            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on('state_changed', 
              (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                  case 'paused':
                    console.log('Upload is paused');
                    break;
                  case 'running':
                    console.log('Upload is running');
                    break;
                }
              }, 
              (error) => {
                // Handle unsuccessful uploads
              }, 
              () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  // console.log('File available at', downloadURL);
                  setMedia(downloadURL);
                });
              }
            );
      }
    
      file && upload()
    }, [file])

    if(status === "loading"){
      return <div className=''>Loading...</div>
    }

    if(status === "unauthenticated" ){
      router.push("/")
    }


  
  const slugify = (str) => 
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") 
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({

        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "travel"
      })
    })
    if (res.status === 200) {
      const data =  await res.json();
      router.push(`/posts/${data.slug}`);
    }
  }
    

  return (
    <div className=''>
      {/* TODO: Categories */}
      <select className='mb-[50px] px[20px] py-[10px] w-max bg-transparent text-textColor' onChange={(e) => setCatSlug(e.target.value)}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
         <input type='text' placeholder="Title"  className='p-[50px] text-[64px] border-hidden outline-none bg-transparent placeholder:text-[#b3b3b1] text-textColor' onChange={e=>setTitle(e.target.value)}/>
         <div className='flex gap-5 h-[700px] relative'>
            <button className='w-[36px] h-[36px] rounded-full bg-transparent border-[1px] border-solid border-textColor' onClick={() =>setOpen(!open)}>
                <Image src="/plus.png" alt=""  width={28}  height={28} className='object-contain' />
            </button>
            {
                open && (
                    <div className=' flex gap-5 bg-bg absolute z-[999] w-full left-[50px] '>
                         <input type='file' id='image' onChange={(e) => setFile(e.target.files[0])}  style={{display: "none"}}/>
                         <button className='w-[36px] h-[36px] rounded-[50%] bg-transparent border-[1px] border-solid  border-[#1a8917]'>
                          <label htmlFor='image'>
                         <Image src="/image.png" alt=""  width={28}  height={28} className='object-contain' />
                          </label>
                        </button >
                        <button className='w-[36px] h-[36px] rounded-[50%] bg-transparent border-[1px] border-solid  border-[#1a8917]'>
                         <Image src="/external.png" alt=""  width={28}  height={28}  className='object-contain'/>
                        </button>
                        <button className='w-[36px] h-[36px] rounded-[50%] bg-transparent border-[1px] border-solid border-[#1a8917] object-contain'>
                         <Image src="/video.png" alt=""  width={28}  height={28} className='object-contain' />
                        </button>
                    </div>
                )
            }
            <ReactQuill className='w-full placeholder:text-[#b3b3b1]' theme='bubble' value={value} onChange={setValue} placeholder='Tell your sorry' />
         </div>
         <button className='absolute top-8 right-5 py-3 px-5  border-none bg-[#1a8917] cursor-pointer text-white rounded-[20px]' onClick={handleSubmit}>Publish</button>
    </div>
  )
}

export default WritePage