import { useAppDispatch, useAppSelector } from "common/hooks";
import { useEffect } from "react";
import { appActions } from 'app/components/app.slice'
import { toast, ToastContainer } from 'react-toastify'
import { errorSelect } from 'app'


export const GlobalError = () => {
  const error = useAppSelector(errorSelect);
  const dispatch = useAppDispatch();

  if (error !== null) {
    toast.error(error);
  }

  useEffect(() => {
    if (error !== null) {
      setTimeout(() => {
        dispatch(appActions.setError({error:null}));
      }, 3000);
    }
  }, [error]);

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
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