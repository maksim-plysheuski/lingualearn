import { Header } from 'common/components/header/Header'
import { Outlet } from 'react-router-dom'
import s from './App.module.scss'
import 'react-toastify/dist/ReactToastify.css'
import { GlobalError } from 'common/components/globalError/GlobalError'
import { Linear } from 'common/components/linearProgress/LinearProgress'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { authThunks } from 'features/profile/profile.slice'

function App() {
  const dispatch = useAppDispatch()

  const initialized = useAppSelector(state => state.app.isAppInitialized)

  useEffect(() => {
    dispatch(authThunks.authMe())
  }, [])

  return (
    <div className={s.App}>
      <Header />
      <div className={s.Content}>
        <GlobalError />
        <Linear />
        {initialized && <Outlet />}
      </div>
    </div>
  )
}

export default App
