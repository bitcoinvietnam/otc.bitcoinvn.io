import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

const Background = (props: IBackgroundProps) => (
  <div className={`max-w-1 ${props.color}`}>{props.children}</div>
);

export { Background };
