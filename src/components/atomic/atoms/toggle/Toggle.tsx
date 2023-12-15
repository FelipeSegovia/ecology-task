import { JSX, useEffect } from 'react';
import './toggle.css';

type PropsToggle = {
  value: boolean;
  setValue: (value: boolean) => void;
};

const Toggle = ({ setValue, value }: PropsToggle): JSX.Element => {
  useEffect(() => {
    console.log('value', value);
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label className="switch">
        <input type="checkbox" onClick={() => setValue(!value)} />
        <span className="slider round"></span>
      </label>
      <label style={{ marginLeft: '0.5rem' }}>{value ? 'Si' : 'No'}</label>
    </div>
  );
};

export default Toggle;
