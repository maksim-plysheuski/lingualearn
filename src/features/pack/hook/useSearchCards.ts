import { useAppDispatch, useAppSelector } from 'common/hooks'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { PackArgs } from 'features/pack/packApi'
import { packAction, packsThunks } from 'features/pack/packs.slice'

export const useSearchCards = () => {
  const dispatch = useAppDispatch()
  const [interval, setInterval] = useState<number | undefined>(undefined)
  const packParams = useAppSelector(state => state.packs.packParams)
  const packName = useAppSelector(state => state.packs.packParams.packName)
  const [searchParams, setSearchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)


  useEffect(() => {
    const lastParams: PackArgs = {}
    if (packParams.user_id) lastParams.user_id = packParams.user_id
    if (packParams.packName) lastParams.packName = packParams.packName
    if (packParams.min) lastParams.min = packParams?.min.toString()
    if (packParams.max) lastParams.max = packParams?.max.toString()
    setSearchParams({ ...lastParams })
  }, [packParams])


  const setPackName = (packName: string) => {
    dispatch(packAction.setPackParams({ packName }))
    clearInterval(interval)
    const idInterval = setTimeout(() => {
      dispatch(packsThunks.getPacks({ packName }))
    }, 700)
    setInterval(+idInterval)
  }


  return {
    params,
    setPackName,
    packName,
    dispatch
  }
}

