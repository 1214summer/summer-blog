import React from 'react';

import style from './index.module.scss';

const DisplayBarLoading: React.FC = () => {
  return (
    <div className={style.displayBarLoading}>
      <div className={style.bar} />
    </div>
  );
};

export default DisplayBarLoading;
