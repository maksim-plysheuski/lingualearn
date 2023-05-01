import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField
} from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";


type InputsType = {
  email: string,
  password: string,
};

export const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const showPasswordHandler = () => setShowPassword(!showPassword);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<InputsType>();
  const onSubmit: SubmitHandler<InputsType> = (data: InputsType) => {
    console.log(data);
  };


  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <TextField type={"text"}
                     label={"Email"}
                     variant="standard"
                     error={!!errors.email}
                     helperText={errors.email?.message}
                     {...register("email", {
                       required: "Field is required",
                       pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Invalid Email" },
                       maxLength: { value: 30, message: "Length must be less then 20 symbols" }
                     })} />
          <TextField type={showPassword ? "text" : "password"}
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
          <FormControlLabel control={<Checkbox />} label="Remember Me" />
          <Button
            type={"submit"}
            variant={"contained"}
            color={"primary"}>
            Sign In
          </Button>
        </FormControl>
      </form>
    </div>
  );
};
