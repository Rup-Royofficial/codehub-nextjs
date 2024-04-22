import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export default function App( {srcUrl, fileName, style} ) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none m-2"
      style={{ style }}
    >
      <Image
        alt={fileName}
        className="object-cover"
        height={100}
        src={srcUrl}
        width={200}
      />
      <CardFooter className=" justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-200  text-ellipsis shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Button className="text-tiny text-white bg-black/20 ms-2" variant="flat" color="default" radius="lg" size="sm">
          Download
        </Button>
      </CardFooter>
    </Card>
  );
}
