'use client'
import AuthenticatedNavbar from "app/Components/AuthenticatedNavbar";
import ChatComponent from "app/Components/ChatComponent";
import { createClient } from "app/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function CodeGeneration() {

  const router = useRouter();
  const supabase = createClient();
  const [userId, setUserId] = useState("");

  const getUser = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user !== null) {
        // console.log(user)
        setUserId(user.id);
      } else {
        setUserId("404 not found user.id");
      }
    } catch (e) {}
  };

  useEffect(() => {
    // Check if the user is authenticated on the client-side
    const checkAuthentication = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data.user) {
        // User is not authenticated, redirect to the appropriate page
        router.push("/");
      } else {
        // User is authenticated, check if they're trying to access the login/signup page
        const currentPath = window.location.pathname;
        if (currentPath.startsWith("/login")) {
          // Redirect to the authenticated homepage
          router.push("/authenticated/code");
        }
      }
    };
    checkAuthentication();
  }, [router, supabase]);


    return (
      <>
        <AuthenticatedNavbar />
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="bg-gradient-to-t from-slate-900 to-purple-800 p-8 w-[800px] rounded-xl text-snow">
            <h2 className="text-2xl font-semibold mb-[2vw]">Solve your Coding Doubts</h2>
            <ChatComponent />
          </div>
        </div>
      </>
    );
}