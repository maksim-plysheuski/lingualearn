import { useEffect } from "react";
import { useAppDispatch} from "app/hooks";
import { appActions } from "app/app.slice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }));
    }, 3000);
  }, []);

  return (
    <div className="App">
      <h1>app</h1>
    </div>
  );
}

export default App;
