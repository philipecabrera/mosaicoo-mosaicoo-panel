import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import '../WebComponents/mosaicootech';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'mosaicoo-tech': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {  
  const { text } = options;
  return (
    //<script defer src="..\WebComponents\mosaicooTech.js"></script>
    <div>
      <div>       
        <div>Text option value: {text}</div>
        <mosaicoo-tech></mosaicoo-tech>
      </div>
    </div>


  );
};
