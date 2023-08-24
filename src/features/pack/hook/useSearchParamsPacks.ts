import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { PackArgs } from 'features/pack/service/packsTypes'
import { useSelector } from 'react-redux'
import {
  SelectMaxPacksParam, SelectMinPacksParam,
  selectPackNameParam,
  selectUserIdParam
} from 'features/pack/selectors'


export const useSearchParamsPacks = () => {
  const packName = useSelector(selectPackNameParam)
  const userIdParams = useSelector(selectUserIdParam)
  const min = useSelector(SelectMinPacksParam)
  const max = useSelector(SelectMaxPacksParam)


  const [searchParams, setSearchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)

  useEffect(() => {
    const lastParams: PackArgs = {}
    if (userIdParams || userIdParams === '') lastParams.user_id = userIdParams
    if (packName || packName === '') lastParams.packName = packName
    if (min || min === 0) lastParams.min = min.toString()
    if (max || max === 0) lastParams.max = max.toString()
    setSearchParams({ ...lastParams })
  }, [userIdParams, packName, min, max])

  return params
}