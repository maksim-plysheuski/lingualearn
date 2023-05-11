import { Button } from "@mui/material";
import React, { ReactNode } from "react";

type PropsType = {
  title: string
  onClickCallback?: () => void
  textColor?: "white" | "black"
  width?: string
  height?: string
  fontSize?: string
  rounded?: boolean
  margin?: string
  type?: "button"
  icon?: ReactNode
}

export const UniversalButton: React.FC<PropsType> = (
  {
    title,
    rounded,
    textColor,
    onClickCallback,
    width,
    height,
    margin,
    type,
    fontSize,
    icon
  }
) => {

  const btnStyle = {
    width: `${width}px`,
    height: `${height}px`,
    color: textColor === "white" ? "#FFFFFF" : "#000000",
    margin: margin ? margin : "0px",
    borderRadius: rounded ? "30px" : "2px",
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
        onClick={onClickCallback}
        variant={textColor === "white" ? "contained" : "text"}
        type={type ? "button" : "submit"}
        startIcon={icon}
      >
        {title}
      </Button>
    </>
  );
}