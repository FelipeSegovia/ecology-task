import { JSX } from 'react';
import './button.css';

type PropsButtonComponent<T> = {
  label: string;
  typeBtn: 'add' | 'action' | 'danger';
  onClick?: (param?: T) => void;
};

const Button = <T,>({
  label,
  typeBtn,
  onClick = () => {},
}: PropsButtonComponent<T>): JSX.Element => (
  <button className={typeBtn} onClick={() => onClick()}>
    {label}
  </button>
);

export default Button;
