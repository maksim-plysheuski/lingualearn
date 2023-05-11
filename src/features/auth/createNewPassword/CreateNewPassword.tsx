import React, { FC } from 'react'
import s from './style.module.scss'

type Props = {
  value: string
}

export const CreateNewPassword: FC<Props> = () => {

  return (
    <div className={s.page}>
      <div className={s.container}>
        <form className={s.form}>


        </form>
      </div>
    </div>
  )
}

