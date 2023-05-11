import { useEffect } from "react";
import { useAppDispatch} from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import { Header } from "common/components/Header/Header";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authThunks.authMe())
  }, [dispatch])

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
