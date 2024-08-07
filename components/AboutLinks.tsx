import { joinClasses } from "../util/ClassNames";
import MyLink from "./util/MyLink";

const AboutLinks = () => {
  const links = [
    {
      title: "Github",
      address: "https://github.com/lwpulsifer",
    },
    {
      title: "Twitter",
      address: "https://twitter.com/LiamPulsifer",
    },
    {
      title: "Real Python",
      address: "https://realpython.com/team/lwpulsifer/",
    },
    {
      title: "LinkedIn",
      address: "https://www.linkedin.com/in/liam-pulsifer",
    },
  ];

  return (
    <aside className={"flex flex-row flex-wrap"}>
      {links.map((link, i) => (
        <MyLink
          key={link.title}
          header={true}
          className={joinClasses("flex justify-center items-center font-thin text-md px-2", {
            "border-r-2 border-accentBackground": i !== links.length - 1,
          })}
          {...link}
        />
      ))}
    </aside>
  );
};

export default AboutLinks;
