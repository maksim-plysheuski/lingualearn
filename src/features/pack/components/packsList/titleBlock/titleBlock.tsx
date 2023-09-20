import s from './style.module.scss'
import { AddPackModal } from 'features/pack/components/modal/addPackModal/addPackModal'


export const TitleBlock = () => {
  return (
    <div className={s.addPackBlock}>
      <h2>Packs List</h2>
      <AddPackModal />
    </div>
  )
}