import classNames from 'classnames';
import FileUpload from '../../components/FileUpload.tsx';
import loader from '../../assets/loader.svg';
import { IFormInput } from '../../global/types.ts';
import TextInput from '../../components/TextInput.tsx';
import TextArea from '../../components/TextArea.tsx';
import Hint from '../../components/Hint.tsx';

function FormInput(props: IFormInput) {
  // Decides if load icon should be shown
  const ButtonTitle = () => {
    if (props.loading) {
      return (
        <div className='flex justify-center text-white'>
          <img className='h-5 w-5 mr-3' src={loader} />
        </div>
      );
    } else {
      return '🚀 Generate';
    }
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <div
        className={classNames('flex flex-wrap mb-4', {
          hidden: props.generationFormat === 'text' || props.generationFormat === 'denizen',
        })}
      >
        <div className='w-full sm:w-1/2 px-2'>
          <TextInput
            label='Author'
            id='author'
            placeholder='Lewis Carroll'
            value={props.author}
            setter={props.setAuthor}
            maxLength={50}
            required={props.generationFormat === 'commands'}
          />
        </div>
        <div className='w-full sm:w-1/2 px-2'>
          <TextInput
            label='Title'
            id='title'
            placeholder='Alice in Wonderland'
            value={props.title}
            setter={props.setTitle}
            maxLength={15}
            required={props.generationFormat === 'commands'}
          />
        </div>
      </div>
      <div className='mb-4'>
        <Hint
          text='You can use <newpage> tag to indicate page break'
          padding={-7}
          hidden={props.generationFormat !== "denizen"}
        >
          <div className={classNames({ hidden: props.inputFormat === 'text' })}>
            <FileUpload
              label='Text'
              callback={(text) => props.setText(text)}
              useFileUpload={props.inputFormat === 'file'}
            />
          </div>
          <div className={classNames({ hidden: props.inputFormat === 'file' })}>
            <TextArea
              label='Text'
              id='text'
              placeholder='Once upon a time, there was a girl...'
              value={props.text}
              setter={props.setText}
              required={props.inputFormat === 'text'}
            />
          </div>
        </Hint>
      </div>
      <button
        type='submit'
        className='w-full h-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        disabled={props.loading}
      >
        <ButtonTitle />
      </button>
    </form>
  );
}

export default FormInput;
