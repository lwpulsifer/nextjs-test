import React, { useState } from 'react';
import TopTracks from '../../components/spotify/TopTracks';
import BasePage from '../../components/BasePage';
import DropdownSelector from '../../components/library/dropdownSelector/DropdownSelector';
import DropdownOption from '../../components/library/dropdownSelector/DropdownOption';
import NowPlaying from '../../components/spotify/NowPlaying';

const Fun = () => {
  const [selectedOptionId, setSelectedOptionId] = useState(1);
  return (
    <BasePage isHomePage={false} title={'Fun Stuff'}>
      <main className={'flex flex-col items-center'}>
        <h1 className={'text-3xl text-header font-bold m-5'}>Fun Stuff</h1>
        <TopTracks />
        <DropdownSelector 
          selectedOptionId={selectedOptionId} 
          setSelectedOptionId={setSelectedOptionId}
          options={[
            {
              id: 1,
              component: <NowPlaying />,
            },
            {
              id: 2,
              component: <div>Ho</div>,
            } 
          ]}
        />
      </main>
    </BasePage>
  )
};

export default Fun;