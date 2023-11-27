import React from 'react'

const Button = ({ innertext, bgColor, txtColor, brRadius, padding, margin, border, fontSize, onClick }) => {
  return (
    <>
        <div className={ `
                            ${bgColor} 
                            ${txtColor} 
                            ${brRadius} 
                            ${padding} 
                            ${margin} 
                            ${border} 
                            ${fontSize}
                            text-center font-[-apple-system,BlinkMacSystemFont,"Segoe_UI","Noto_Sans",Helvetica,Arial,sans-serif,"Apple_Color_Emoji","Segoe_UI_Emoji"] cursor-pointer`}
            onClick={onClick}>
            { innertext }
        </div>
    </>
  )
}

export default Button