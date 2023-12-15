import { JSX } from 'react';
import Card from '../../atoms/Card/Card.tsx';
import './cardEcology.css';

type PropsCardEcology<T> = {
  headerCard: string;
  labelBtn: string;
  clickBtn?: (param?: T) => void;
};

const CardEcology = <T,>({
  headerCard,
  labelBtn,
  clickBtn = () => {},
}: PropsCardEcology<T>): JSX.Element => {
  return (
    <div className={'container-card-ecology'}>
      <Card
        header={headerCard}
        labelBtn={labelBtn}
        handleClick={() => clickBtn()}
      >
        <p className="text-2xl">**listado de acciones más recientes (3)**</p>
      </Card>
    </div>
  );
};

export default CardEcology;
