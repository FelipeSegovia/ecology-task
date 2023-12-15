import { JSX, ReactElement } from 'react';
import Button from '../Button/Button.tsx';
import './card.css';

type PropsCard<T> = {
  header: string;
  children: ReactElement;
  labelBtn: string;
  handleClick: (param?: T) => void;
};

const Card = <T,>({
  header,
  children,
  labelBtn,
  handleClick = () => {},
}: PropsCard<T>): JSX.Element => (
  <div className={'container'}>
    <h2>{header}</h2>
    {children}
    <div>
      <Button
        label={labelBtn}
        typeBtn={'action'}
        onClick={() => handleClick()}
      />
    </div>
  </div>
);

export default Card;
