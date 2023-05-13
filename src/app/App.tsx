import { useEffect } from 'react'
import { authThunks } from 'features/auth/auth.slice'
import { Header } from 'common/components/Header/Header'
import { Outlet } from 'react-router-dom'
import { useAppDispatch } from 'common/hooks'
import s from './App.module.scss'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authThunks.authMe())
  }, [dispatch])

  return (
    <div className={s.App}>
      <Header />
      <div className={s.Content}>
        <Outlet />
      </div>
    </div>
  )
}

export default App
