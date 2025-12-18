import {getWhereOrderPageData} from '@/utils/apis/getWhereOrderPageData';
import {getWhereSum} from '@/utils/apis/getWhereSum';

export const fetchData = async(config:{
    dbName: string;
    where: object;
    page: number;
    size: number;
    sortKey: string;
})=>{
    const { dbName, where, page, size, sortKey} = config;
    const [msg,msgSum] = await Promise.all([
        getWhereOrderPageData({
            dbName,
            where,
            page,
            size,
            sortKey
        }),
        getWhereSum(dbName,where)
    ])

    return{
        msg,msgSum
    }   
}