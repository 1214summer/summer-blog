import MarkDown from '@/components/common/MarkDown';
import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'

interface IProps {
  content?: string;
  className?: string;
  children?: ReactNode;
}

const AbouteMe: FC<IProps> = ({
  content,
  className
}) => {
  return (
    <div className={className}>
      <MarkDown content={content || ''}/>
    </div>
  )
}

export default AbouteMe;