import request from './request';
import config from './config';
import { setStore, getStore } from './store'


const hasRequest = (localKey) => {
    const cacheObj = getStore(localKey);
    return cacheObj
}


// export function returnContent (list=[]) {
//   const hasLen = list.length > 0;
//   const curItem = hasLen ? list[0] : {};
//   const { content = '' } = curItem || {};
//   return content
// }


const handleInit = async (key) => {
  const value = hasRequest(key);
  if (value) return value;
  const {poetryParams} = config;
  const data = await request.get(poetryParams);
  const { newslist = [] } = data;
  const hasValue = newslist.length > 0;
  if (hasValue) {
    const firstValue = newslist[0];
  }
}

export {
  handleInit,
}