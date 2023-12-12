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
      address:
        "https://www.linkedin.com/in/liam-pulsifer",
    },
  ];

  return (
    <aside
      className={
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-md gap-y-5 p-3"
      }
    >
      {links.map((link) => (
        <MyLink
          key={link.title}
          header={true}
          additionalClassNames={
            "flex text-left justify-center items-center mr-3 font-thin text-md"
          }
          {...link}
        />
      ))}
    </aside>
  );
};

export default AboutLinks;
