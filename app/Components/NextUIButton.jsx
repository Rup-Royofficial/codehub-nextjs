import React from "react";
import {Button} from "@nextui-org/react";

export default function App({size, className, btnText}) {
  return (
    <Button className={className} size={size}>
      {btnText}
    </Button>
  );
}
