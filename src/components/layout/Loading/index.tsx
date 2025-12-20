// src/components/layout/Loading/index.tsx
import React, { useEffect } from 'react';
import type { FC } from 'react';
import style from './index.module.scss';

interface LoadingProps {
  /** 加载完成后的回调 */
  onComplete?: () => void;
  /** 加载动画持续时间（毫秒） */
  duration?: number;
}

const Loading: FC<LoadingProps> = ({ 
  onComplete, 
  duration = 1000 
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add('loaded');
      document.body.style.overflow = 'auto';
      onComplete?.();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onComplete]);

  return (
    <div className={style.loaderWrapper}>
      <div className={style.sectionLeft} />
      <div className={style.sectionRight} />
      <div className={style.loaderContent}>
        <div className={style.loaderIcon}>
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 1024 1024" 
            className={style.icon}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M512 65A447 447 0 0 1 512 959A447 447 0 0 1 512 65z" fill="#ffffff"/>
            <path d="M303.5 432A80 80 0 0 1 291.5 592A80 80 0 0 1 303.5 432z" fill="#ff6e6b"/>
            <path d="M512 65A447 447 0 0 1 512 959L512 929A417 417 0 0 0 512 95A417 417 0 0 0 512 929L512 959A447 447 0 0 1 512 65z" fill="#fd0d00"/>
            <path d="M512 95A417 417 0 0 1 929 512A208.5 208.5 0 0 1 720.5 720.5L720.5 592A80 80 0 0 0 720.5 432A80 80 0 0 0 720.5 592L720.5 720.5A208.5 208.5 0 0 1 512 512A208.5 208.5 0 0 0 303.5 303.5A208.5 208.5 0 0 0 95 512A417 417 0 0 1 512 95" fill="#fd0d00"/>
          </svg>
        </div>
        <div className={style.loadingWord}>少女祈祷中...</div>
      </div>
    </div>
  );
};

export default Loading;
