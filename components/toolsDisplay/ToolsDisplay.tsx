import React from 'react';
import useSWR from 'swr';
import getGithubRepos from '../../lib/github';
import { BaseComponentProps } from '../../types/BaseComponent';
import Carousel from '../util/Carousel';
import Tool, { tool } from './Tool';
import RepoDisplay from '../toolsDisplay/RepoDisplay';

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
  
  const { data: repos } = useSWR("api/githubRepos", getGithubRepos);

  if (repos && repos.length) {
    console.log(Object.entries(repos[0]).map(([key, value]) => `${key}: ${typeof value},`).join('\n'));
  }

  return (
    <section className="m-5 shadow-lg w-5/6 lg:w-2/3 xl:w-1/2 rounded-3xl p-3 bg-background" >
      <h1 className="text-2xl text-header font-bold text-center">Projects</h1>
      <Carousel 
        rotationIntervalMs={3000} 
        additionalClassNames={"flex justify-center items-center"} 
        numItemsToDisplay={3} 
        initialIndex={0}
        showControls={true}
        showProgressBar={true}
      >
        {repos?.map(repo => <RepoDisplay key={repo.id} {...repo} />)}
      </Carousel>
    </section>
  )
};

export default ToolsDisplay;