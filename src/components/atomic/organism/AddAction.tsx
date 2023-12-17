import Button from '../atoms/Button/Button.tsx';
import Modal from '../molecules/modal/Modal.tsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InputToggle from '../molecules/inputToggle/InputToggle.tsx';
import Input from '../atoms/input/Input.tsx';

const AddAction = () => {
  const [openModal, setOpenModal] = useState(false);
  const { typeAction } = useParams();
  const [switchFingerprint, setSwitchFingerprint] = useState(false);
  const [switchLegalObligation, setSwitchLegalObligation] = useState(false);
  const [switchObject, setSwitchObject] = useState(false);
  const [switchResponsible, setSwitchResponsible] = useState(false);

  useEffect(() => {
    console.log('fingerprint', switchFingerprint);
  }, [switchFingerprint]);

  useEffect(() => {
    console.log('legalObligation', switchLegalObligation);
  }, [switchLegalObligation]);

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
          <Input type={'text'} placeholder={typeAction} isReadOnly={true} />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              marginBottom: '1rem',
            }}
          >
            <InputToggle
              label={'¿Requiere cálculo de huella?'}
              value={switchFingerprint}
              setValue={() => setSwitchFingerprint}
              isRequired={true}
            />
            <InputToggle
              label={'¿Es una obligacion legal?'}
              value={switchLegalObligation}
              setValue={setSwitchLegalObligation}
              isRequired={true}
            />
            <InputToggle
              label={'¿Tiene objetivo?'}
              value={switchObject}
              setValue={setSwitchObject}
              isRequired={true}
            />
            <InputToggle
              label={'¿Posee responsable?'}
              value={switchResponsible}
              setValue={setSwitchResponsible}
              isRequired={true}
            />
          </div>
          <Input type={'text'} placeholder={'Nombre del responsable'} />
          <div style={{ marginTop: '1rem' }}>
            <Button label={'Agregar'} typeBtn={'add'} onClick={() => {}} />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddAction;
