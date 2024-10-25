interface Props {
  label: string;
  id: string;
  placeholder?: string;
  inputDescription?: string;
}

const TextInput = ({ label, id, placeholder, inputDescription }: Props) => {
  return (
    <>
      <label className="form-label">{label}</label>
      <input
        type="email"
        className="form-control"
        id={id}
        placeholder={placeholder}
      />
    </>
  );
};

export default TextInput;
