import Image from "next/image";
import CommonDivider from "../CommonDivider";
import RotatingComponents from "../util/RotatingComponents";
import { TimelineEvent } from "./Timeline";

type timelineCardProps = TimelineEvent & {
  includeTrailingLine?: boolean;
};

const TimelineCard: React.FC<timelineCardProps> = ({
  beginning,
  end,
  title,
  description,
  location,
  includeTrailingLine = false,
}) => {
  const yearBlockClassName = "w-full border-link border-2 p-1.5 rounded-xl flex justify-center";

  return (
    <li className={"flex flex-col md:flex-row items-center md:items-start w-full"}>
      <div className={"flex mb-2 md:mb-0 flex-col w-32 items-center mr-4 font-bold"}>
        <RotatingComponents className={yearBlockClassName} autoMove={false}>
          <div className="flex items-center">
            {`${beginning.toLocaleDateString()}`}
            {end ? (
              <Image
                src={"/right-arrow.png"}
                width={20}
                height={20}
                alt={"Right arrow"}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            ) : null}
          </div>
          {end ? (
            <div className="flex items-center">
              <Image
                src={"/left-arrow.png"}
                width={20}
                height={20}
                alt={"Left arrow"}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              {`${end?.toLocaleDateString()}`}
            </div>
          ) : null}
        </RotatingComponents>
        {includeTrailingLine && <div className={"w-px h-full bg-highlight"} />}
      </div>
      <div className={"flex flex-col w-full mb-5"}>
        <section className={"flex flex-col md:flex-row items-center justify-between"}>
          <span>
            <h3 className={"font-bold"}>{title}</h3>
          </span>
          <span>
            <h3 className={"italic"}>{location}</h3>
          </span>
        </section>
        <CommonDivider />
        <p>{description}</p>
      </div>
    </li>
  );
};

export default TimelineCard;
