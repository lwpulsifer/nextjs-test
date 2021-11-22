import DropdownOption, { DropdownOptionId, DropdownOptionProps } from './DropdownOption';
import { DropdownContext } from './useDropdownSelectorContext';

export type DropdownSelectorProps = {
  selectedOptionId: DropdownOptionId,
  setSelectedOptionId: (id: DropdownOptionId) => void,
  options: DropdownOptionProps[],
};

export default function DropdownSelector({
  selectedOptionId,
  setSelectedOptionId,
  options,
}: DropdownSelectorProps) {
  return (
    <DropdownContext.Provider value={{ setSelectedOptionId, selectedOptionId, options }}>
      <ol className={'w-full bg-rose-200 rounded-xl'}>
        {options.map(option => <DropdownOption key={option.id} {...option} />)}
      </ol>
    </DropdownContext.Provider>
  )
}