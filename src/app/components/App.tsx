import { useEffect } from 'react'
import { GlobalError, Header } from 'common/components'
import { Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import s from './App.module.scss'
import 'react-toastify/dist/ReactToastify.css'
import { initializedSelect } from 'app/selectors'
import { authThunks } from 'features/auth'
import { LinearProgressColors } from 'common/components/lineProgress/LineProgress'


function App() {
  const dispatch = useAppDispatch()
  const isAppInitialized = useAppSelector(initializedSelect)

  useEffect(() => {
    dispatch(authThunks.authMe())
  }, [dispatch])

  return (
    <div className={s.App}>
      <Header />
      <div className={s.Content}>
        <GlobalError />
        {isAppInitialized && <Outlet />}
        <LinearProgressColors />
      </div>
    </div>
  )
}

export default App
