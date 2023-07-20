import { useEffect } from 'react'
import { Header } from 'common/components/header/Header'
import { Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import s from './App.module.scss'
import { LinearProgress } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css'
import { initializedSelect, loadingSelect } from 'app/selectors'
import { authThunks } from 'features/auth'
import { GlobalError } from 'common/components'


function App() {
  const dispatch = useAppDispatch()
  const isAppInitialized = useAppSelector(initializedSelect)
  const isLoading = useAppSelector(loadingSelect)

  const lineProgressSx = { position: 'absolute', top: '60px', width: '100%', bgcolor: '#664400' }

  useEffect(() => {
    dispatch(authThunks.authMe())
  }, [dispatch])

  return (
    <div className={s.App}>
      <Header />
      <div className={s.Content}>
        <GlobalError />
        {isAppInitialized && <Outlet />}
        {isLoading && <LinearProgress sx={lineProgressSx} color={'warning'} />}
      </div>
    </div>
  )
}

export default App
