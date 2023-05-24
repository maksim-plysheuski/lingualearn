import { useEffect } from 'react'
import { authThunks } from 'features/auth/auth.slice'
import { Header } from 'common/components/Header/Header'
import { Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import s from './App.module.scss'
import { LinearProgress } from '@mui/material'


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
        {isLoading && <LinearProgress />}
        {isAppInitialized ? <Outlet /> : <h1>LOADING... - PRELOADER</h1>}
      </div>
    </div>
  )
}

export default App
