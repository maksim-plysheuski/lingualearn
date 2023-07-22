import { useEffect } from 'react'
import { AppHeader } from 'common/components/appHeader/AppHeader'
import { Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import s from './App.module.scss'
import { LinearProgress } from '@mui/material'
import { GlobalError } from 'common/components/globalError/GlobalError'
import 'react-toastify/dist/ReactToastify.css'
import { selectIsAppInitialized, selectIsAppLoading } from 'app/selectors'
import { authThunks } from 'features/auth'


function App() {
  const dispatch = useAppDispatch()
  const isAppInitialized = useAppSelector(selectIsAppInitialized)
  const isLoading = useAppSelector(selectIsAppLoading)

  const lineProgressSx = { position: 'absolute', top: '60px', width: '100%', bgcolor: '#664400' }

  useEffect(() => {
    dispatch(authThunks.authMe())
  }, [dispatch])

  return (
    <div className={s.App}>
      <AppHeader />
      <div className={s.Content}>
        <GlobalError />
        {isAppInitialized && <Outlet />}
        {isLoading && <LinearProgress sx={lineProgressSx} color={'warning'} />}
      </div>
    </div>
  )
}

export default App
