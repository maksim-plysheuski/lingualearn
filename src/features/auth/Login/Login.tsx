import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  TextField
} from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import s from "features/auth/Login/styles.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";


type InputsType = {
  email: string,
  password: string,
  rememberMe: boolean
};

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const showPasswordHandler = () => setShowPassword(!showPassword);
  const { register, handleSubmit, formState: { errors } } = useForm<InputsType>();

  const onSubmit: SubmitHandler<InputsType> = (data: InputsType) => {
    dispatch(authThunks.login(data));
  };

  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  if (isLoggedIn) {
    navigate("/profile");
  }

  return (
    <div className={s.loginPage}>
      <div className={s.formContainer}>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl className={s.form}>
            <TextField className={s.inputField}
                       type={"text"}
                       label={"Email"}
                       variant="standard"
                       error={!!errors.email}
                       helperText={errors.email?.message}
                       {...register("email", {
                         required: "Field is required",
                         pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Invalid Email" },
                         maxLength: { value: 30, message: "Length must be less then 30 symbols" }
                       })} />
            <TextField className={s.inputField}
                       type={showPassword ? "text" : "password"}
                       label={"Password"}
                       variant="standard"
                       error={!!errors.password}
                       helperText={errors.password?.message}
                       InputProps={{
                         endAdornment: (
                           <InputAdornment position="end">
                             <IconButton
                               aria-label="toggle password visibility"
                               onClick={showPasswordHandler}
                             >
                               {showPassword ? <Visibility /> : <VisibilityOff />}
                             </IconButton>
                           </InputAdornment>
                         )
                       }}
                       {...register("password", { required: "Field is required" })}
            />
            <div className={s.checkbox}>
              <Checkbox id="rememberMe" {...register("rememberMe")} />
              <span>Remember me</span>
            </div>
            <NavLink className={s.forgotPasswordLink} to={"/"}>Forgot Password?</NavLink>
            <Button
              className={s.submitButton}
              style={{ borderRadius: "30px" }}
              type={"submit"}
              variant={"contained"}
              color={"primary"}>
              Sign In
            </Button>
          </FormControl>
        </form>
        <p>Don't have an account?</p>
        <NavLink className={s.registrationLink} to={"/registration"}>Sign Up</NavLink>
      </div>
    </div>
  );
};
