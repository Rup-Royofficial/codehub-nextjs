
import React, { useState, useEffect } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, AvatarIcon} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import CustomAvatar from "./CustomAvatar.jsx";
import { logout } from "../logout/actions";
import { createClient } from "../utils/supabase/client";
// import { useNavigate } from "react-router-dom";
// import { revalidatePath } from 'next/cache'
// import { redirect } from 'next/navigation'


export default function AuthenticatedNavbar() {
  const supabase = createClient()
  const [strEmail, setStrEmail] = useState()
  const getUser = async () => {
    try {
      const { data:{user} }  = await supabase.auth.getUser()
      setStrEmail(user.email)
        // console.log(user.email)
      
    } catch(e){

    }
  }

  useEffect(() => {
      getUser()
  },[])
    // const AcmeLogo = () => (
    //     <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    //       <path
    //         clipRule="evenodd"
    //         d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
    //         fill="currentColor"
    //         fillRule="evenodd"
    //       />
    //     </svg>
    //   );
      // console.log(onLogout)
      

      // const handleCodespaceClick = () => {
      //   // revalidatePath('/','layout')
      //   redirect('/authenticated/codespace')
      // }
      return (
        // <nav>
         <Navbar>
          <NavbarBrand>
            {/*Here the ACME loge was present*/}
            <p className="font-bold text-inherit">{"</>HUB"}</p>
          </NavbarBrand>
    
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem isActive>
              <Link color="foreground" href="/authenticated/homepage">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem >
              <Link href="/authenticated/codespace" aria-current="page" color="secondary">
                Playground
              </Link>
            </NavbarItem>
            <NavbarItem >
              <Link color="secondary" href="/authenticated/code">
                Code Generation
              </Link>
            </NavbarItem>
          </NavbarContent>
    
          <NavbarContent as="div" justify="end">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                 <Avatar
                  isBordered
                  as="button"
                  className="transition-transform bg-gradient-to-br from-[#FFB457] to-[#FF705B] text-black/80"
                  color="secondary"
                  size="sm"
                  icon={<AvatarIcon />}
                /> 
                {/* // <CustomAvatar/> */}
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{strEmail}</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="codespace" ><Link href="/authenticated/codespace">Playground</Link></DropdownItem>
                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={() => logout()}>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>

        </Navbar>
        // </nav>
      );
}

