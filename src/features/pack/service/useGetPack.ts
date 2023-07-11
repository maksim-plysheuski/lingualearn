import {useAppSelector} from "common/hooks";
import {useGetPacksQuery} from "features/pack/service/pack.slice";

export const useGetPack = () => {
    const sortPackParams = useAppSelector(state => state.sortPackSlice.packParams)
    const {data, isLoading} = useGetPacksQuery(sortPackParams)
    return {
        data,
        isLoading
    }
}