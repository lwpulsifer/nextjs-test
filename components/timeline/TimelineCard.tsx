import { useState, useEffect } from 'react';
import CommonDivider from '../CommonDivider';
import { timelineEvent } from './Timeline';

const colors = ['blue', 'red', 'green'];
const randomChoice = (arr) => arr[Math.floor(arr.length * Math.random())];

type timelineCardProps = timelineEvent & {
  includeTrailingLine?: boolean,
};

const TimelineCard: React.FC<timelineCardProps> = ({ beginning, end, title, description, includeTrailingLine = false }) => {
  const [cardColor, setCardColor] = useState('blue');
  
  useEffect(() => {
    setCardColor(randomChoice(colors));
  }, []);

  return (
    <li className={'flex w-full'}>
      <div className={'flex flex-col w-28 items-center mr-4 font-bold'}>
        <div className={`w-full border-${cardColor}-300 border-2 p-1.5 rounded-xl flex justify-center`}>
          {beginning.toLocaleDateString()}
        </div>
        {includeTrailingLine && <div className={'w-px h-full bg-gray-300'}/>}
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