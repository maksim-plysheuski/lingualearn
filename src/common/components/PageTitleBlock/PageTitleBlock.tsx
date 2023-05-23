import s from './style.module.scss'
import { UniversalButton } from 'common/components/Button/UniversalButton'
import { FC } from 'react'


type Props = {
  pageTitle: string
  showButton: boolean
  buttonTitle?: string
  buttonCallback?: () => void
}

export const PageTitleBlock: FC<Props> = (
  {
    pageTitle,
    showButton,
    buttonTitle,
    buttonCallback
  }) => {

  return (
    <div className={s.addPackBlock}>
      <h2>{pageTitle}</h2>
      {showButton &&
        <UniversalButton title={buttonTitle ? buttonTitle : ''}
                         onClickCallback={buttonCallback}
                         rounded={true}
                         width={'175'}
                         height={'36'}
                         textColor={'white'}
        />}
    </div>
  )
}