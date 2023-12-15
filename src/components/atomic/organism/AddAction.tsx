import Button from '../atoms/Button/Button.tsx';
import Modal from '../molecules/modal/Modal.tsx';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Toggle from '../atoms/toggle/Toggle.tsx';

const AddAction = () => {
  const [openModal, setOpenModal] = useState(false);
  const { typeAction } = useParams();
  const [switchObject, setSwitchObject] = useState(true);

  return (
    <>
      <div>
        <Button
          label={'Agregar'}
          typeBtn={'add'}
          onClick={() => setOpenModal((prev) => !prev)}
        />
      </div>
      <Modal isOpen={openModal} setIsOpen={setOpenModal}>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1rem',
          }}
        >
          <h3>Agregar Acción ambiental</h3>
          <input type="text" placeholder={typeAction} readOnly={true} />
          <input type="text" placeholder={typeAction} />
          <Toggle value={switchObject} setValue={setSwitchObject} />
          <div>
            <Button label={'Agregar'} typeBtn={'add'} onClick={() => {}} />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddAction;
