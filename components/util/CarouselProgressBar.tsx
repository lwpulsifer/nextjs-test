import { BaseComponentProps } from "../../types/BaseComponent";

type CarouselProgressBarProps = BaseComponentProps & {
  index: number,
  totalItems: number,
  numToDisplay: number,
};

export default function CarouselProgressBar({ index, totalItems, numToDisplay }: CarouselProgressBarProps) {
  const displayRange = [...new Array(numToDisplay)].map((_, i) => (index + i) % totalItems);
  return (
    <div className="flex">
      {[...new Array(totalItems)].map((_, i) => 
        <div className={`${displayRange.includes(i) ? "border-header" : "border-highlight"} w-2 h-2 border-b-2`} key={i}>
          <span className="bg-highlight w-1 h-1 rounded-full m-1" />
        </div>
      )}
    </div>
  )
}