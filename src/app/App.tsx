import { useEffect } from 'react'
import { authThunks } from 'features/auth/auth.slice'
import { Header } from 'common/components/header/Header'
import { Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import s from './App.module.scss'
import { LinearProgress } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css'
import { GlobalError } from 'common/components/globalError/GlobalError'


function App() {
  const dispatch = useAppDispatch()
  const isAppInitialized = useAppSelector(state => state.app.isAppInitialized)
  const isLoading = useAppSelector(state => state.app.isLoading)

  useEffect(() => {
    dispatch(authThunks.authMe())
  }, [dispatch])

  return (
    <div className={s.App}>
      <Header />
      <div className={s.Content}>
        <GlobalError />
        {isLoading && <LinearProgress sx={{position: "absolute", top: "60px", width: '100%', bgcolor: '#664400'}} color={'warning'} />}
        {isAppInitialized && <Outlet />}
      </div>
    </div>
  )
}

export default App
