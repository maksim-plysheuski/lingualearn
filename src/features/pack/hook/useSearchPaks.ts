import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { PackArgs } from 'features/pack/packApi'
import { useSelector } from 'react-redux'
import { maxPackSelect, minPackSelect, packNameSelect, user_idSelect } from 'features/pack/service'
import { useAppDispatch } from 'common/hooks'
import { setPackParams } from 'features/pack/service/sortPackSlice'

export const useParamsPacks = () => {
  const dispatch = useAppDispatch()
  const packName = useSelector(packNameSelect)
  const user_id = useSelector(user_idSelect)
  const min = useSelector(minPackSelect)
  const max = useSelector(maxPackSelect)

  const [searchParams, setSearchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)
  useEffect(() => {
    dispatch(setPackParams(params))
  }, [])

  useEffect(() => {
    const lastParams: PackArgs = {}
    if (user_id || user_id === '') lastParams.user_id = user_id
    if (packName || packName === '') lastParams.packName = packName
    if (min || min === 0) lastParams.min = min.toString()
    if (max || max === 0) lastParams.max = max.toString()
    setSearchParams(lastParams)
  }, [user_id, packName, min, max])

  return {
    params
  }
}

