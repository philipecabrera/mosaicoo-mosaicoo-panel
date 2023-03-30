import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';


interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {  
  const { text } = options;
  return (
    //<script defer src="..\WebComponents\mosaicooTech.js"></script>
    <div>
      <div>       
        <div>Text option value: {text}</div>
      </div>
    </div>


  );
};
