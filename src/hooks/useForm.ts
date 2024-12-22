import { IFormData, IResults } from '../global/types.ts';
import useLocalStorage from 'use-local-storage';

export default function useForm(showResults: IResults): IFormData {
  // Normal states
  const [text, setText] = useLocalStorage('text', '');
  const [author, setAuthor] = useLocalStorage('author', '');
  const [title, setTitle] = useLocalStorage('title', '');
  const [nameSuffix, setNameSuffix] = useLocalStorage('nameSuffix', '');
  const [inputFormat, setInputFormat] = useLocalStorage<'text' | 'file'>(
    'inputFormat',
    'text'
  );
  const [outputFormat, setOutputFormat] = useLocalStorage<'text' | 'file'>(
    'outputFormat',
    'text'
  );
  const [generationFormat, setGenerationFormat] = useLocalStorage<'commands' | 'text' | 'denizen'>(
    'generationFormat',
    'commands'
  );
  const [linesPerPage, setLinesPerPage] = useLocalStorage('linesPerPage', 14);
  const [minecraftVersion, setMinecraftVersion] = useLocalStorage<'bedrock' | 'java'>(
    'minecraftVersion',
    'java'
  );
  const [javaVersion, setJavaVersion] = useLocalStorage<'1.20.4' | '1.20.5'>(
    'javaVersion',
    '1.20.5'
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    showResults(
      text,
      title,
      author,
      minecraftVersion,
      generationFormat,
      javaVersion,
      linesPerPage,
      nameSuffix
    );
  };

  return {
    inputFormat,
    setInputFormat,
    outputFormat,
    setOutputFormat,
    generationFormat,
    setGenerationFormat,
    minecraftVersion,
    setMinecraftVersion,
    text,
    setText,
    linesPerPage,
    setLinesPerPage,
    nameSuffix,
    setNameSuffix,
    author,
    setAuthor,
    title,
    setTitle,
    javaVersion,
    setJavaVersion,
    handleSubmit,
  };
}
