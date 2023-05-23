import { SearchBar } from '../searchBar/SearchBar'
import { Paginator } from 'features/pack/packsList/paginator/Paginator'
import { PacksTable } from 'features/pack/packsList/packsTable/PacksTable'
import { UniversalButton } from 'common/components/Button/UniversalButton'
import s from './style.module.scss'


export const PacksList = () => {
  return (
    <div className={s.packsList}>
      <div className={s.addPackBlock}>
        <h2>Packs List</h2>
        <UniversalButton title={"Add new pack"} rounded={true} width={'175'} height={'36'} textColor={'white'}/>
      </div>
      <SearchBar />
      <PacksTable />
      <Paginator />
    </div>
  )
}
