import s from "features/auth/Login/styles.module.css";
import { Button } from "@mui/material";

type PropsType = {
  title: string
  onClickCallback: () => void
}

export const UniversalButton = (props: PropsType) => {
  return(
    <>
      <Button
        onClick={props.onClickCallback}
        className={s.submitButton}
        style={{ borderRadius: "30px" }}
        type={"submit"}
        variant={"contained"}
        color={"primary"}>
        {props.title}
      </Button>
    </>
  )
}