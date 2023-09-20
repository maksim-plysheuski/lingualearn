import { useParams } from 'react-router-dom'
import { useFetchCards } from 'features/cards/hooks/useFetchCards'
import { useEffect, useState } from 'react'
import { CardType } from 'features/cards/service/cards.api.types'
import { useChangeGradeCardMutation } from 'features/cards/service/cards.api'
import { getRandomCard } from 'features/learn/utils/getRandomCard'


export const useLearnCards = () => {
  const { cardsCount } = useParams<{ cardsCount: string }>()
  const { data, packId, isLoading, refetch, isFetching } = useFetchCards(+cardsCount!)
  const [randomCard, setRandomCard] = useState<CardType>()
  const [showAnswer, setShowAnswer] = useState<boolean>(false)
  const [grade, setGrade] = useState<number | null>(null)
  const [changeCardGrade] = useChangeGradeCardMutation()

  useEffect(() => {
    if (data) setRandomCard(getRandomCard(data.cards))
  }, [data])

  const showRightAnswer = (isShow: boolean) => setShowAnswer(isShow)
  const changeGrade = (newGrade: number) => setGrade(newGrade)

  const generateNextCard = () => {
    setShowAnswer(false)
    changeCardGrade({ card_id: randomCard?._id!, grade: grade!, packId: packId! })
      .unwrap().then(() => refetch())
  }

  return {
    data,
    grade,
    packId,
    isLoading,
    randomCard,
    showAnswer,
    isFetching,
    changeGrade,
    showRightAnswer,
    generateNextCard
  }
}