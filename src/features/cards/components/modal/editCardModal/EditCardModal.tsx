import React, {useState} from 'react'
import {BaseModal} from 'common/components/modals/baseModal/BaseModal'
import {SelectTextImg, SelectType} from 'features/cards/components/modal/addCard/select/SelectTextImg'
import s from './style.module.scss'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import {useChangeCardMutation} from 'features/cards/service/card.slice'
import { InputCustom } from 'common/components/modals/baseModal/inputCastom/InputCastom'

type Props = {
    cardId: string
    questionValue: string
    answerValue: string
}

export const EditCardsModal = (props: Props) => {
    const {questionValue, answerValue, cardId} = props
    const [changeCard, {isLoading}] = useChangeCardMutation()

    const [open, setOpen] = useState(false)
    const [select, setSelect] = useState<SelectType>('Text')
    const [question, setQuestion] = useState<string>(questionValue)
    const [answer, setAnswer] = useState<string>(answerValue)


    const editCards = async () => {
        await changeCard({_id: cardId, question, answer})
        setOpen(false)
    }

    return (
        <>
            <BaseModal
                buttonOpen={<DriveFileRenameOutlineIcon />}
                title={'Edit Pack'}
                open={open}
                setOpen={setOpen}
                actionCallback={editCards}
                titleButtonAction={'Save Changes'}
                isButtonDisabled={isLoading}
            >
                <div className={s.newCardContainer}>
                    <SelectTextImg select={select} setSelect={setSelect}/>
                    <div className={s.input}>
                        <InputCustom label={'Question'} value={question} setValue={setQuestion}/>
                        <InputCustom label={'Answer'} value={answer} setValue={setAnswer}/>
                    </div>
                </div>
            </BaseModal>
        </>
    )
}
