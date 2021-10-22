import MyLink from "./util/MyLink";

const AboutLinks= () => {
  
  const links = [
    {
      title: 'Github',
      address: 'https://github.com/lwpulsifer',
    },
    {
      title: 'Twitter',
      address: 'https://twitter.com/LiamPulsifer',
    },
    {
      title: 'Real Python video tutorials',
      address: 'https://realpython.com/team/lwpulsifer/',
    },
    {
      title: 'Resume',
      address: 'https://www.notion.so/Liam-Pulsifer-fb7f675c5e5e4403aa705a42f931a82b',
    }
  ];
  
  return (
    <aside className={'w-1/2 grid grid-cols-1 sm:grid-cols-2 max-w-md gap-y-5 p-3'}>
      {links.map(link => <MyLink key={link.title} header={true} additionalClassNames={'flex justify-center items-center text-center'} {...link} />)}
    </aside>
  )
};

export default AboutLinks;