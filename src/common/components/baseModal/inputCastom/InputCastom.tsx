import React, {ChangeEvent} from 'react'
import s from './style.module.scss'

type Props = {
    label: string
    value: string
    setValue: (value: string) => void
}

export const InputCastom = (props: Props) => {
    const {label, value, setValue} = props
    const setValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div className={s.inputContainer}>
            <label htmlFor="ImputId">{label}</label>
            <input id='ImputId'
                   value={value}
                   onChange={setValueHandler}
                   className={s.input}
            />
        </div>
    )
}

