
import { useAppDispatch, useAppSelector } from "common/hooks";
import { useEffect } from "react";
import { appActions } from 'app/app.slice'
import { toast, ToastContainer } from 'react-toastify'


export const GlobalError = () => {
  const error = useAppSelector((state) => state.app.error);
  const dispatch = useAppDispatch();

  if (error !== null) {
    toast.error(error);
  }
  console.log(error)

  useEffect(() => {
    if (error !== null) {
      setTimeout(() => {
        dispatch(appActions.setError({error:null}));
      }, 3000);
    }
  }, [error]);

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};