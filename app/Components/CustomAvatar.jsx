import React from "react";
import {Avatar, AvatarIcon} from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex items-center">
      <Avatar
        isBordered={true}
        as="button"
        
        color="secondary"
        icon={<AvatarIcon />}
         
        classNames={
            
            {
            base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
            icon: "text-black/80",
            }
        }
      />
    </div>
  );
}
