import { useInViewport, useSafeState } from 'ahooks';
import { useEffect, useRef } from 'react';

export const useLazyImg = (avatar: string, loading: string) => {
  const imgRef = useRef(null); //来追踪图片元素
  const [inViewport] = useInViewport(imgRef);  //监听图片元素是否进入视口
  const [imgUrl, setImgUrl] = useSafeState(loading); //安全地管理图片URL状态
  useEffect(() => {
    if(!inViewport) return;
    setImgUrl(avatar);
  },[inViewport]);

  //初始状态显示加载中图片（loading）
  //当图片进入视口时，自动切换到真实图片（avatar）
  return {imgRef, imgUrl};
}