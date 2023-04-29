import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import s from "features/auth/Register/styles.module.css";

export const Login = () => {

  const dispatch = useAppDispatch();

  const loginHandler = () => {
    const payload = {
      email: "safrondev2@gmail.com",
      password: "12345678",
      rememberMe: false
    };
    dispatch(authThunks.login(payload));
  };

  return (
    <div className={s.container}>
      <h1>Login</h1>
      <button onClick={loginHandler}>login</button>
    </div>
  );
};
