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
        <TextField {...register("email")} />

        <TextField {...register("password")} />
        <input type="submit" />
      </FormControl>
    </form>
  );
};
