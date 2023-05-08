import { NavLink } from "react-router-dom";
import { UniversalButton } from "common/components/Button/UniversalButton";
import { TextField } from "@mui/material";
import { CgProfile } from "react-icons/cg";
import { useAppDispatch, useAppSelector } from "app/hooks";
import s from "features/auth/Profile/ProfilePage.module.scss"
import { ChangeEvent, useEffect, useState } from "react";
import { authThunks } from "features/auth/auth.slice";


export const ProfilePage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authThunks.authMe())
  }, [])


  const userName = useAppSelector(state => state.auth.profile?.name)
  const userEmail = useAppSelector(state => state.auth.profile?.email)

  const [inputValue, setInputValue] = useState<string | undefined>(userName)

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const changeUserName = () => {
    const payload = {
      name: inputValue,
      avatar: ""
    }

    dispatch(authThunks.changeUserData(payload))
  }

  return (
    <div className={s.profilePage}>
      <div className={s.personalInfoBlockContainer}>
        <div className={s.backLinkContainer}>
          <NavLink className={s.backLink} to={"/packs"}>Back to Packs List</NavLink>
        </div>
        <div className={s.personalInfoBlock}>
          <h1>Personal Information</h1>
          <div className={s.userPhotoContainer}>
            <CgProfile className={s.userPhoto}/>
            <button className={s.saveButton}>Edit</button>
          </div>
          <TextField className={s.inputField}
                     onChange={onChangeInputHandler}
                     defaultValue={inputValue}
                     type={"text"}
                     label={"Nickname"}
                     variant="standard"
          />
          <UniversalButton title="save" onClickCallback={changeUserName} />
          <span className={s.emailSpan}>myemail@gmail.com</span>
          <UniversalButton title="Log out" onClickCallback={() => {}} />
        </div>
      </div>
    </div>
  );
};