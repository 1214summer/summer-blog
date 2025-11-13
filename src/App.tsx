import {Link} from 'react-router-dom';
import {useAppRoutes} from '@/router/index'
import { Suspense } from 'react';
import { useAppSelector, useAppDispatch, shallowEqualApp} from '@/store/index'
import { changeMessageAction } from './store/modules/counter';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import styles from './App.module.scss'

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  const {count, message} = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqualApp
  )

  function handleClick(){
    dispatch(changeMessageAction("哈哈哈"))
  }

  return(
    <div id="App">
      <div className={styles.App}>
        <Link to="/discover">发现</Link>
      </div>
      <div>
        {message}
        {count}
      </div>
      <button onClick={handleClick}>change</button>
      <ErrorBoundary>
      <Suspense fallback="">
        <div className="main">
          {useAppRoutes()}
        </div>
      </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App
