import React, { useContext } from 'react';
import { DropdownOptionProps, DropdownOptionId } from './DropdownOption';

export const DropdownContext = React.createContext({ 
  selectedOptionId: -1 as DropdownOptionId, 
  setSelectedOptionId: (() => null) as (optionId: DropdownOptionId) => void,
  options: [] as DropdownOptionProps[],
});

export default function useDropdownSelectorContext() {
  return useContext(DropdownContext);
}