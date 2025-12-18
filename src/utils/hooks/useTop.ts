import { useMount } from 'ahooks';
import { useAppDispatch } from '@/store';
import { changeNavShowAction } from '@/store/modules/navShow';

const useTop = () => {
    const dispatch = useAppDispatch()
      useMount(() => {
          window.scrollTo(0, 0);
          dispatch(changeNavShowAction(true));
      });
    };

export default useTop;