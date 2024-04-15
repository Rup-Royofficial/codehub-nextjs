'use client'
import AuthenticatedNavbar from "@/app/Components/AuthenticatedNavbar"
// import FileUpload from "@/app/Components/FileUpload"
import { createClient } from "@/app/utils/supabase/client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
// import { CldUploadWidget } from 'next-cloudinary'
import { v4 as uuidv4 } from 'uuid'
import alanBtn from "@alan-ai/alan-sdk-web";

export default function Homepage() {
    const router = useRouter()
    const supabase = createClient()
    const [ userId, setUserId ] = useState('')
    const [ media, setMedia ] = useState([])

    const getUser = async () => {
      try {
        const { data: {user} } = await supabase.auth.getUser()
        if(user !== null){
          // console.log(user)
          setUserId(user.id)
        }else {
          setUserId("404 not found user.id")
        }
      } catch(e){

      }
    }

    async function uploadimage(e) {
      let file = e.target.files[0]

      const { data, error } = await supabase
        .storage
        .from('codehub')
        .upload(userId + "/" + uuidv4(), file)

      if(data) {
        getMedia()
      }else{
        console.log(error)
      }
    }

    async function getMedia() {
      const { data, error } = await supabase.storage.from('codehub').list(userId + "/", {
        limit: 10,
        offset: 0,
        sortBy: {
          column: 'name', 
          order: 'asc'
        }
      })

      if(data) {
        setMedia(data)
      }else {
        console.log(69, error)
      }
    }

    useEffect( () => {
      getUser()
      getMedia()
    }, [userId])
    useEffect(() => {
        // Check if the user is authenticated on the client-side
        const checkAuthentication = async () => {
          const { data, error } = await supabase.auth.getUser()
    

          
          if (error || !data.user) {
            // User is not authenticated, redirect to the appropriate page
            router.push('/')
          }else {
            // User is authenticated, check if they're trying to access the login/signup page
            const currentPath = router.pathname
            if (currentPath.startsWith('/login')) {
              // Redirect to the authenticated homepage
              router.push('/authenticated/homepage')
            }
          }
        }
        checkAuthentication()
    }, [router, supabase])
    
    useEffect(() => {
      alanBtn({
        key: '6be70ec10e0cc8a421bffb043a82d3f62e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if (commandData.command === 'go:back') {
            // Call the client code that will react to the received command
          }
        }
      });
    }, []);

    return (
      <>
        <AuthenticatedNavbar />
        <div className="bg-white">This is authenticated homepage</div>
        {/* <FileUpload /> */}
        {/* <CldUploadWidget uploadPreset="ml_default">
          {({ open }) => {
            return <button onClick={() => open()}>Upload an Image</button>;
          }}
        </CldUploadWidget> */}
        <input type="file" onChange={(e) => {uploadimage(e)}}/>
        <div className="mt-5">My Uploads</div>
        {media.map((media) => {
          return (
            <>
              <div key={media.name}>
                <img src={`https://reysjyjdootrkwsiolaj.supabase.co/storage/v1/object/public/codehub/ca229be8-b36a-4771-b40a-77c6fcd2ae77/${media.name}`}/>
              </div>
            </>
          )
        })}
      </>
    );
}