import { FC } from 'react'
import s from 'common/components/title/titleForm/style.module.scss'

type Props = {
  title: string
}

export const TitleForm: FC<Props> = ({ title }) => {
  return (
    <span className={s.title}>
                {title}
        </span>
  )
}
