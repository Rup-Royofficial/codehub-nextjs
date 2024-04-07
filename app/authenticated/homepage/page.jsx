'use client'
import AuthenticatedNavbar from "@/app/Components/AuthenticatedNavbar"
import FileUpload from "@/app/Components/FileUpload"
import { createClient } from "@/app/utils/supabase/client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { CldUploadWidget } from 'next-cloudinary';


export default function Homepage() {
    const router = useRouter()
    const supabase = createClient()
    

    useEffect(() => {
        // Check if the user is authenticated on the client-side
        const checkAuthentication = async () => {
          const { data, error } = await supabase.auth.getUser()
    
          if (error || !data.user) {
            // User is not authenticated, redirect to the appropriate page
            router.push('/')
          }else {
            // User is authenticated, check if they're trying to access the login/signup page
            const currentPath = window.location.pathname
            if (currentPath.startsWith('/login')) {
              // Redirect to the authenticated homepage
              router.push('/authenticated/homepage')
            }
          }
        }
        checkAuthentication()
    }, [router, supabase])
    
    return (
      <>
        <AuthenticatedNavbar />
        <div className="bg-white">This is authenticated homepage</div>
        {/* <FileUpload /> */}
        <CldUploadWidget uploadPreset="ml_default">
          {({ open }) => {
            return <button onClick={() => open()}>Upload an Image</button>;
          }}
        </CldUploadWidget>
      </>
    );
}