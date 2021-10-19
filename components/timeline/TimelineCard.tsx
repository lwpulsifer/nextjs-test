import { useState, useEffect } from 'react';
import CommonDivider from '../CommonDivider';
import { timelineEvent } from './Timeline';

type timelineCardProps = timelineEvent & {
  includeTrailingLine?: boolean,
};

const TimelineCard: React.FC<timelineCardProps> = ({ beginning, end, title, description, location, includeTrailingLine = false }) => {

  return (
    <li className={'flex w-full'}>
      <div className={'flex flex-col w-28 items-center mr-4 font-bold'}>
        <div className={`w-full border-link border-2 p-1.5 rounded-xl flex justify-center`}>
          {beginning.toLocaleDateString()}
        </div>
        {includeTrailingLine && <div className={'w-px h-full bg-highlight'}/>}
      </div>
      <div className={'flex flex-col w-full mb-5'}>
        <h3 className={'font-bold'}>{title}</h3>
        <CommonDivider />
        <p>{description}</p>
      </div>
    </li>
  );
}

export default TimelineCard;