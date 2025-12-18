import {DB} from '@/utils/dbConfig';
import { getWhereSum } from '@/utils/apis/getWhereSum';
import { command } from '@/utils/cloudBase';

export const fetchData = async()=> {
  const [articles, classes, tags] = await Promise.all([
    getWhereSum(DB.Article,{post: command.eq(true)}),
    getWhereSum(DB.Class),
    getWhereSum(DB.Tag)
  ]);

  return {
    articles,
    classes,
    tags
  };
}