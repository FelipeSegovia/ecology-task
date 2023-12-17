import { JSX, useEffect, useState } from 'react';
import './toggle.css';

type PropsToggle = {
  value: boolean;
  setValue: (value: boolean) => void;
  isRequired?: boolean;
};

const Toggle = ({
  setValue,
  value,
  isRequired = false,
}: PropsToggle): JSX.Element => {
  const [nameTag, setNameTag] = useState('');
  useEffect(() => {
    setNameTag(String(Math.random()));
  }, []);

  // TODO: Falta arreglar el toggle

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label className="switch">
        <input
          type="checkbox"
          onClick={() => setValue(!value)}
          required={isRequired}
          id={nameTag}
        />
        <span className="slider round"></span>
      </label>
      <label htmlFor={nameTag} style={{ marginLeft: '0.5rem' }}>
        {value ? 'Si' : 'No'}
      </label>
    </div>
  );
};

export default Toggle;
