import { JSX, useEffect, useRef } from 'react';
import './input.css';

type PropsInput = {
  isRequired?: boolean;
  isReadOnly?: boolean;
  placeholder?: string;
  type: 'text' | 'number'; // At the moment it will only have those types
};

const Input = ({
  type,
  placeholder = '',
  isRequired = false,
  isReadOnly = false,
}: PropsInput): JSX.Element => {
  const inputElement = useRef<HTMLInputElement>(null);
  const containerElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputElement && inputElement.current && !isReadOnly) {
      inputElement.current.addEventListener('focusin', () => {
        containerElement.current?.classList.add('focus-in');
        containerElement.current?.classList.remove('focus-out');
      });

      inputElement.current.addEventListener('focusout', () => {
        containerElement.current?.classList.add('focus-out');
        containerElement.current?.classList.remove('focus-in');
      });
    }

    return () => {
      if (inputElement && inputElement.current) {
        inputElement.current.removeEventListener('focusin', () => {});
        inputElement.current.removeEventListener('focusout', () => {});
      }
    };
  }, [inputElement]);

  return (
    <div
      className={`container-input-field ${isReadOnly && 'is-readonly'}`}
      ref={containerElement}
    >
      <input
        ref={inputElement}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        readOnly={isReadOnly}
        className={`input-field ${isReadOnly && 'no-action is-readonly'}`}
      />
    </div>
  );
};

export default Input;
