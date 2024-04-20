import { useState } from "react";

export default function FileBox( {name} ) {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState(null);

    const response = async () => {
        await fetch(
            `https://reysjyjdootrkwsiolaj.supabase.co/storage/v1/object/public/codehub/${name}`
          );
          console.log("Fetch response:", response);
    } 

    const handleClick = async () => {
        setIsOpen(!isOpen);
        if (!isOpen && !content) {
          try {
            const response = await fetch(
              `https://reysjyjdootrkwsiolaj.supabase.co/storage/v1/object/public/codehub/${name}`
            );
            const data = await response.text();
            setContent(data);
          } catch (error) {
            console.error("Error fetching file content:", error);
            // Optionally, display an error message to the user
          }
        }
      };
      
    
    return (
      <div className="inline-block p-[10px] border-[1px] border-[solid] border-[#ddd] cursor-pointer" onClick={handleClick}>
        {name}
        {isOpen && (
          <div className="absolute w-full border-[1px] border-[solid] border-[#ddd] p-[10px] [box-shadow:0_2px_5px_rgba(0,_0,_0,_0.1)] hidden">
            {/* Handle content display based on file type (code, image, etc.) */}
            {typeof content === "string" ? (
              <pre>{content}</pre>
            ) : (
              <p>Non-text file. Download to view.</p>
            )}
          </div>
        )}
      </div>
    );
}