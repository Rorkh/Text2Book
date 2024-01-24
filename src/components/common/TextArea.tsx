function TextArea(props: {
  label: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: any;
  required?: boolean;
}) {
  return (
    <>
      <label htmlFor={props.id} className='block text-gray-700 text-sm font-bold mb-2'>
        Text
      </label>
      <textarea
        id={props.id}
        placeholder={props.placeholder}
        className='w-full h-72 border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300 resize-none'
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      />
    </>
  );
}

export default TextArea;
