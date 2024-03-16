import { useState } from 'react';
import { IShowResults } from '../global/types.ts';
import start from '../utils/main.ts';

export default function useApp() {
  const [results, setResults] = useState<string[]>([]);
  const [fadeIn, setFadeIn] = useState(0);

  const allowedProps = { fadein: fadeIn };

  const showResults: IShowResults = (
    text: string,
    author: string,
    title: string,
    outputFormat: 'commands' | 'text',
    minecraftVersion: 'bedrock' | 'java',
    appendIndexFormat: string
  ) => {
    setResults(
      start(text, author, title, outputFormat, minecraftVersion, appendIndexFormat)
    );
    setFadeIn(1);
  };

  return { results, allowedProps, showResults, setFadeIn };
}
