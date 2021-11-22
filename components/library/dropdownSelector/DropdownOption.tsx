import React from 'react';
import useDropdownSelectorContext from './useDropdownSelectorContext';

export type DropdownOptionId = number | string;

export type DropdownOptionProps = {
  id: DropdownOptionId,
  component: React.Component,
}

export default function DropdownOption({
  id,
  component,
}: DropdownOptionProps) {

  const { selectedOptionId, setSelectedOptionId, options } = useDropdownSelectorContext();
  const isSelectedOption = selectedOptionId === id;

  return (
    <li 
      className={`w-full flex justify-center items-center ${isSelectedOption ? 'bg-rose-600' : ''}`}
      onClick={() => setSelectedOptionId(id)}
    >
      {component}
    </li>
  )
}