import { IFormSettings } from '../../global/types.ts';
import MultiChoice from '../../components/MultiChoice.tsx';
import Hint from '../../components/Hint.tsx';

function FormSettings(props: IFormSettings) {
  return (
    <>
      <MultiChoice
        name='input-method'
        items={[
          {
            id: 'use-text-input',
            label: '📝 Text Input',
            checked: props.inputFormat === 'text',
            callback: () => props.setInputFormat('text'),
          },
          {
            id: 'use-file-input',
            label: '📁 File Input',
            checked: props.inputFormat === 'file',
            callback: () => props.setInputFormat('file'),
          },
        ]}
      />
      <div className='mb-2' />
      <MultiChoice
        name='output-method'
        items={[
          {
            id: 'use-text-output',
            label: '📖 Text Output',
            checked: props.outputFormat === 'text',
            callback: () => props.setOutputFormat('text'),
          },
          {
            id: 'use-file-output',
            label: '🗄️ File Output',
            checked: props.outputFormat === 'file',
            callback: () => props.setOutputFormat('file'),
          },
        ]}
      />
      <div className='mb-2' />
      <MultiChoice
        name='generation_method'
        items={[
          {
            id: 'use-text-generation',
            label: '💬 Generate Text',
            checked: props.generationFormat === 'text',
            callback: () => props.setGenerationFormat('text'),
          },
          {
            id: 'use-command-generation',
            label: '📟 Generate Commands',
            checked: props.generationFormat === 'commands',
            callback: () => props.setGenerationFormat('commands'),
          },
          {
            id: 'use-denizen-generation',
            label: '📟 Generate Denizen Lines',
            checked: props.generationFormat === 'denizen',
            span: 2,
            callback: () => props.setGenerationFormat('denizen'),
          },
        ]}
      />
      {props.generationFormat === 'commands' && (
        <>
          <div className='mb-2' />
          <MultiChoice
            name='minecraft-version'
            items={[
              {
                id: 'bedrock',
                label: '🪨 Bedrock Version',
                checked: props.minecraftVersion === 'bedrock',
                callback: () => props.setMinecraftVersion('bedrock'),
              },
              {
                id: 'java',
                label: '☕ Java Version',
                checked: props.minecraftVersion === 'java',
                callback: () => props.setMinecraftVersion('java'),
              },
            ]}
          />
          {props.minecraftVersion === 'java' && (
            <Hint
              text='Minecraft changed its syntax for several commands in 1.20.5. If you are using a older version, pick the old syntax.'
              padding={-7}
            >
              <div className='mb-2' />
              <MultiChoice
                name='java-version'
                items={[
                  {
                    id: '1205',
                    label: '✨ New Syntax (1.20.5)',
                    checked: props.javaVersion === '1.20.5',
                    callback: () => props.setJavaVersion('1.20.5'),
                  },
                  {
                    id: '1204',
                    label: '👴 Old Syntax (1.20.4)',
                    checked: props.javaVersion === '1.20.4',
                    callback: () => props.setJavaVersion('1.20.4'),
                  },
                ]}
              />
            </Hint>
          )}
        </>
      )}
    </>
  );
}

export default FormSettings;
