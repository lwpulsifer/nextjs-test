import Image from "next/image";
import React, { useState } from "react";
import { BaseComponentProps } from "../../types/BaseComponent";
import { joinClasses } from "../../util/ClassNames";

type ExpandableListProps = BaseComponentProps & {
  items: React.ReactElement[];
  initialItemsToShow: number;
  itemsIncrement: number;
  showLessButton?: boolean;
  showCollapseButton?: boolean;
  arrowSize?: number | { arrowWidth: number; arrowHeight: number };
};

const ExpandableList: React.FC<ExpandableListProps> = ({
  items,
  initialItemsToShow,
  itemsIncrement,
  className,
  showLessButton = true,
  showCollapseButton = true,
  arrowSize = 15,
}) => {
  const [numItemsToShow, setNumItemsToShow] = useState<number>(initialItemsToShow);

  const sharedButtonStyles =
    "rounded-full text-link py-1 px-2 disabled:opacity-30 disabled:cursor-auto";
  const { arrowWidth, arrowHeight } =
    typeof arrowSize === "number" ? { arrowWidth: arrowSize, arrowHeight: arrowSize } : arrowSize;

  const moreButton = (
    <button
      onClick={() => setNumItemsToShow((numYears) => numYears + itemsIncrement)}
      className={`${sharedButtonStyles}`}
      disabled={numItemsToShow >= items.length}
    >
      <Image
        src={"/down-arrow.svg"}
        height={arrowHeight}
        width={arrowWidth}
        alt="Down arrow"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </button>
  );

  const fewerButton = (
    <button
      onClick={() => setNumItemsToShow((numYears) => numYears - itemsIncrement)}
      className={`${sharedButtonStyles}`}
      disabled={!showLessButton || numItemsToShow < initialItemsToShow + itemsIncrement}
    >
      <Image
        src={"/up-arrow.svg"}
        height={arrowHeight}
        width={arrowWidth}
        alt="Up arrow"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </button>
  );

  const collapseButton = (
    <button
      onClick={() => {
        setNumItemsToShow(initialItemsToShow);
        window.scrollTo(0, 0);
      }}
      className={`${sharedButtonStyles}`}
    >
      To top
    </button>
  );

  return (
    <>
      <ol className={`${joinClasses(className)} flex flex-col m-1 items-center justify-center`}>
        {items.slice(0, numItemsToShow)}
      </ol>
      <div className="w-full flex">
        {!(
          numItemsToShow < initialItemsToShow + itemsIncrement && numItemsToShow >= items.length
        ) && (
          <div className="flex w-full justify-center">
            {fewerButton}
            {moreButton}
          </div>
        )}
        <div className="absolute">
          {numItemsToShow > initialItemsToShow && showCollapseButton ? collapseButton : null}
        </div>
      </div>
    </>
  );
};

export default ExpandableList;
