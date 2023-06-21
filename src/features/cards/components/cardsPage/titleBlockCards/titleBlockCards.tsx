import React from 'react'
import { useAppDispatch } from 'common/hooks'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import s from 'features/cards/components/cardsPage/titleBlockCards/style.module.scss'
import { selectWhoseCards } from 'features/cards/selectors'
import { AddCardsModal } from 'features/cards/components/modal/addEditCard/addCardModal/AddCardsModal'
import { cardsThunks } from 'features/cards/cards.slice'
import { MenuCards } from '../menuCards/menuCards'
import { useSelector } from 'react-redux'

export const TitleBlockCards = () => {
    const dispatch = useAppDispatch()
    const whoseCards = useSelector(selectWhoseCards)
    const title = whoseCards ? 'My Pack' : 'Friend’s Pack'
    const createCartHandler = (question: string, answer: string) => {
        dispatch(cardsThunks.createCard({question, answer}))
    }

    return (
        <div className={s.container}>
            <div className={s.titleContainer}>
                <h2 className={s.title}>{title}</h2>
                {whoseCards&&<MenuCards />}
            </div>
            {
                whoseCards ? <AddCardsModal callback={createCartHandler}
                                            fieldOpen={<UniversalButton width={'184'} title={'Add New Card'}/>}
                                            title={'Add new card'}
                    /> :
                    <UniversalButton width={'184'} title={'learn pack'}/>
            }
        </div>
    )
}

