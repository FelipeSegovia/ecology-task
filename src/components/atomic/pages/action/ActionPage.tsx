import { JSX, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PAGE_TITLE from '../../../../constants/pageTitle.ts';
import AddAction from '../../organism/AddAction.tsx';
import Button from '../../atoms/Button/Button.tsx';
import { PATHS } from '../../../../constants/paths.ts';

const ActionPage = (): JSX.Element => {
  const { typeAction } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${PAGE_TITLE.ACTIONS} ${typeAction}`;
  }, []);

  const handleNavigateReturn = () => {
    navigate(PATHS.HOME);
  };

  return (
    <div>
      <AddAction />
      <div>
        <p>Tabla de listado de acciones</p>
      </div>
      <Button
        label={'Volver'}
        typeBtn={'action'}
        onClick={handleNavigateReturn}
      />
    </div>
  );
};

export default ActionPage;
