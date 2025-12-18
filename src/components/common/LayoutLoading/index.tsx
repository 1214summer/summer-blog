import { Skeleton } from 'antd';
import React, { ReactNode } from 'react';

interface IProps {
  rows?: number;
  children?: ReactNode
}

const LayoutLoading: React.FC<IProps> = ({ rows = 10 }) => (
  <Skeleton paragraph={{ rows }} />
);

export default LayoutLoading;