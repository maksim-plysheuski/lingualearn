import { useEffect } from 'react'
import { useAppDispatch } from 'app/hooks'
import { authThunks } from 'features/auth/auth.slice'
import { Header } from 'common/components/Header/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authThunks.authMe())
  }, [dispatch])

  return (
    <div className='App'>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
