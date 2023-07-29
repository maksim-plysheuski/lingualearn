import { useEffect } from 'react'
import { AppHeader } from 'common/components/appHeader/AppHeader'
import { Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import s from './App.module.scss'
import { GlobalError } from 'common/components/globalError/GlobalError'
import 'react-toastify/dist/ReactToastify.css'
import { selectIsAppInitialized } from 'app/selectors'
import { authThunks } from 'features/auth'
import { LinearProgressColors } from 'common/components'


function App() {
  const dispatch = useAppDispatch()
  const isAppInitialized = useAppSelector(selectIsAppInitialized)

  useEffect(() => {
    dispatch(authThunks.authMe())
  }, [dispatch])

  return (
    <div className={s.App}>
      <AppHeader />
      <div className={s.Content}>
        <GlobalError />
        {isAppInitialized && <Outlet />}
        <LinearProgressColors />
      </div>
    </div>
  )
}

export default App
