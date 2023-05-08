import { useEffect } from "react";
import { useAppDispatch} from "app/hooks";
import { authThunks } from "features/auth/auth.slice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authThunks.authMe())
  }, [dispatch])

  return (
    <div className="App">
      <h1>app</h1>
    </div>
  );
}

export default App;
