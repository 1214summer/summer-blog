import React from 'react';

import style from './index.module.scss';

const PostCardLoading: React.FC = () => {
  return (
    <div className={style.postCardLoading}>
      <div className={style.bar} />
      <div className={style.bar} />
      <div className={style.bar} />
      <div className={style.bar} />
    </div>
  );
};

export default PostCardLoading;
