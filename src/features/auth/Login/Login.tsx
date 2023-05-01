import { useForm, SubmitHandler } from "react-hook-form";
import { FormControl, TextField } from "@mui/material";

type InputsType = {
  email: string,
  password: string,
};

export const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<InputsType>();
  const onSubmit: SubmitHandler<InputsType> = (data: InputsType) => {
    console.log(data);
  };
  console.log(errors);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <TextField {...register("email", {
          required: "Field is required",
          pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Invalid Email"},
          maxLength: {value: 20, message: "Length must be less then 20 symbols"}
        })} />
        {errors.email && <span>{errors.email.message}</span>}
        <TextField {...register("password", {required: "Field is required"}
        )} />
        {errors.password && <span>{errors.password.message}</span>}
        <input type="submit" />
      </FormControl>
    </form>
  );
};
