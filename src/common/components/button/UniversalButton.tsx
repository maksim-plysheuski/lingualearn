import { Button } from "@mui/material";
import React, { ReactNode } from "react";

type PropsType = {
  title: string
  onClickCallback?: () => void
  textColor?: string
  width?: string
  height?: string
  fontSize?: string
  squared?: boolean
  marginTop?: string
  type?: "button"
  icon?: ReactNode
}

export const UniversalButton: React.FC<PropsType> = (
  {
    title,
    squared,
    textColor,
    onClickCallback,
    width,
    height,
    marginTop,
    type,
    fontSize,
    icon
  }
) => {

  const btnStyle = {
    width: width ? `${width}px` : '347px',
    height: height ? `${height}px` : '36px',
    backgroundColor: textColor === 'black' ? '#FCFCFC' : "#366EFF",
    color: textColor ? textColor : "#FFFFFF",
    marginTop: marginTop ? marginTop : "0px",
    borderRadius: squared ? "2px" : "30px",
    textTransform: "none",
    fontWeight: "500",
    fontSize: fontSize ? fontSize : "16px",
    lineHeight: "20px",
    boxShadow:
      "0px 2px 10px rgba(109, 109, 109, 0.25), inset 0px 1px 0px rgba(255, 255, 255, 0.5)"
  };

  return (
    <>
      <Button
        sx={btnStyle}
        disabled={false}
        onClick={onClickCallback}
        variant={textColor ? 'text' : 'contained'}
        type={type ? type : "submit"}
        startIcon={icon}
      >
        {title}
      </Button>
    </>
  );
}