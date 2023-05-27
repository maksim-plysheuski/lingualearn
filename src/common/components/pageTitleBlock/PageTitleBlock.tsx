import s from './style.module.scss'
import { UniversalButton } from 'common/components/button/UniversalButton'
import { FC } from 'react'
import { useAppSelector } from 'common/hooks'


type Props = {
  pageTitle?: string
  showButton: boolean
  buttonTitle: string
  buttonCallback?: () => void
}

export const PageTitleBlock: FC<Props> = (
  {
    pageTitle,
    showButton,
    buttonTitle,
    buttonCallback
  }) => {
  const packOwnerId = useAppSelector(state => state.cards.cards.packUserId)
  const userId = useAppSelector(state => state.profile.profile?._id)

  return (
    <div className={s.addPackBlock}>
      <h2>{pageTitle ? pageTitle
        : packOwnerId === userId ? 'My Pack'
          : 'Friends Pack'}
      </h2>
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