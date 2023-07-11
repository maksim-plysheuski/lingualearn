import {SearchBar} from 'features/pack/components/packsList/searchBar/SearchBar'
import s from './style.module.scss'
import {TitleBlock} from 'features/pack/components/packsList/titleBlock/TitleBlock'
import {PaginatorPacks} from './paginatorPaks/paginatorPacks'
import {useGetPack} from "features/pack/service/useGetPack";
import {Paper, Table, TableContainer} from "@mui/material";
import {PacksTableBody} from "./packsTableBody/PacksTableBody";
import {PacksTableHeader} from "./packsTableHeader/PacksTableHeader";

export const tableStyle = {
    marginTop: '24px',
    maxWidth: 1008,
    backgroundColor: 'black',
    borderColor: '#333333',
    borderStyle: 'solid',
    border: '0px 1px 0px 1px'
}

export const PacksList = () => {
    const {isLoading} = useGetPack()

    if (isLoading) return <></>

    return (
        <div className={s.packsList}>
            <TitleBlock/>
            <SearchBar/>
            <TableContainer style={tableStyle} component={Paper}>
                <Table>
                    <PacksTableHeader/>
                    <PacksTableBody/>
                </Table>
            </TableContainer>
            <PaginatorPacks/>
        </div>
    )
}
