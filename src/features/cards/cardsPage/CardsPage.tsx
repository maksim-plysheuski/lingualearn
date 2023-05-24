import { Paginator } from 'common/components/paginator/Paginator'
import s from 'features/cards/cardsPage/style.module.scss'
import { PageTitleBlock } from 'common/components/PageTitleBlock/PageTitleBlock'
import { CardTable } from 'features/cards/cardsPage/cardsTable/CardTable'
import { InputSearch } from 'common/components/Inputs/inputSearch/InputSearch'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packAction } from 'features/pack/packs.slice'


export const CardsPage = () => {
  const nameSearch = useAppSelector(state => state.packs.packParams.packName)
  const dispatch = useAppDispatch()
  const setPackParamName = (packName: string) => {
    dispatch(packAction.setPackParams({ packName }))
  }

  const learnPack = () => {
    //need to fix
  }

  return (
    <div className={s.packsList}>
      <PageTitleBlock pageTitle={'Friend\'s Card'}
                      showButton={true}
                      buttonTitle={'Learn card'}
                      buttonCallback={learnPack}/>
      <InputSearch nameSearch={nameSearch!} searchCallback={setPackParamName} width={'1008px'}/>
      <CardTable />
      <Paginator />
    </div>
  )
}
