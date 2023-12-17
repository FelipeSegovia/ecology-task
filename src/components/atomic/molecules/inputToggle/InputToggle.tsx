import Toggle from '../../atoms/toggle/Toggle.tsx';

type PropsInputToggle = {
  label: string;
  value: boolean;
  setValue: (data: boolean) => void;
  isRequired?: boolean;
};

const InputToggle = ({
  label,
  value,
  setValue,
  isRequired = false,
}: PropsInputToggle) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'start',
        width: '50%',
      }}
    >
      <p>{label}</p>
      <Toggle value={value} setValue={() => setValue} isRequired={isRequired} />
    </div>
  );
};

export default InputToggle;
