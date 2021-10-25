import React from 'react';
import { printLogin } from '../../lib/github';
import { BaseComponentProps } from '../../types/BaseComponent';
import Carousel from '../util/Carousel';
import Tool, { tool } from './Tool';

type ToolsDisplayProps = BaseComponentProps;

const tools: tool[] = [
  {
    name: 'TestTool1',
    description: 'TestDesc1',
    href: 'TestHref1',
  },
  {
    name: 'TestTool2',
    description: 'TestDesc2',
    href: 'TestHref2',
  },
  {
    name: 'TestTool3',
    description: `
      This is a long-ass description. This is a long-ass description. This is a long-ass description. This is a long-ass description. 
      This is a long-ass description. This is a long-ass description. This is a long-ass description.
    `,
    href: 'TestHref3',
    imageSrc: '/grad_cropped.jpg',
  },
]

const ToolsDisplay: React.FC<ToolsDisplayProps> = () => {
  printLogin();
  return (
    <section className="m-5 shadow-lg w-5/6 lg:w-2/3 xl:w-1/2 rounded-3xl p-3 bg-background" >
      <h1 className="text-2xl text-header font-bold text-center">Projects</h1>
      <Carousel 
        rotationIntervalMs={3000} 
        additionalClassNames={"flex flex-col md:flex-row justify-center items-center"} 
        numItemsToDisplay={3} 
        initialIndex={0}
      >
        {tools.map(tool => <Tool key={tool.name} {...tool} />)}
      </Carousel>
    </section>
  )
};

export default ToolsDisplay;