import { useEffect } from 'react'
import { authThunks } from 'features/auth/auth.slice'
import { Header } from 'common/components/Header/Header'
import { Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import s from './App.module.scss'

function App() {
  const dispatch = useAppDispatch()
  const isAppInitialized = useAppSelector(state => state.app.isAppInitialized)

  useEffect(() => {
    dispatch(authThunks.authMe())
  }, [dispatch])

  return (
    <div className={s.App}>
      <Header />
      <div className={s.Content}>
        {isAppInitialized ? <Outlet /> : <h1>LOADING... - PRELOADER</h1>  }
      </div>
    </div>
  )
}

export default App
