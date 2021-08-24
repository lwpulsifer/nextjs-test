import TimelineCard from "./TimelineCard";
import YearCard from './YearCard';

export default function Timeline() {
  const events = [
    {
      beginning: new Date('August 18, 2020'),
      end: null,
      title: 'Moved to San Francisco',
      description: '',
    },
    {
      beginning: new Date('July 7, 2020'),
      end: null,
      title: 'Joined IXL Learning',
      description: `I work as a Software Engineer as part of IXL Learning's Student Experience team. I'm active across our stack, whether
        that's creating attractive, effortless interfaces for student practice and awards, writing and designing performant Java interfaces
        with our Postgres databases, or writing clear and concise documentation with just a hint of personal flair.`,
    },
    {
      beginning: new Date('May 10, 2020'),
      end: null,
      title: 'Graduated from Duke University',
      description: `I graduated Magna Cum Laude with a Bachelor's of Science in 
        Computer Science and minors in German and Philosophy. I also spent a lot of `
    },
    {
      beginning: new Date('September 1, 2019'),
      end: null,
      title: 'Real Python video tutorial creator',
      description: (
        <div>I create video tutorials on the Python programming language for <a href={'realpython.com'}>realpython.com</a>. My videos have been watched by thousands of Python learners 
        and receive consistently glowing reviews 
        (watch <a className={'text-blue-500 hover:text-blue-300'} href={'realpython.com/team/lwpulsifer'}>here</a>).
        </div>
      ),
    },
    {
      beginning: new Date('May 17, 2019'),
      end: null,
      title: 'Spent the summer in Berlin',
      description: `I had an amazing time exploring Berlin, and also got a chance to 
        visit London, Rotterdam, Madrid, Salamanca, and Stockholm`,
    },
    {
      beginning: new Date('January 7, 2018'),
      end: null,
      title: 'Undergraduate teacher assistant',
      description: `Teaching assistant for introductory programming and computer architecture
        courses at Duke. Taught a weekly recitation section, held office hours, and answered
        student questions.`
    },
    {
      beginning: new Date('September 4, 1997'),
      end: null,
      title: 'Born',
      description: 'That was exciting!',
    },
  ];

  events.sort((e1, e2) => e2.beginning.getTime() - e1.beginning.getTime());

  const timelineEvents = [];
  let currentYear = new Date().getFullYear();
  events.forEach((event, i) => {
    if (event.beginning.getFullYear() !== currentYear) {
      timelineEvents.push(
        <YearCard year={event.beginning.getFullYear()} key={event.beginning.getTime()}/>
      );
      currentYear = event.beginning.getFullYear();
    }

    const lastOfYear = events[i + 1]?.beginning.getFullYear() !== currentYear;
    timelineEvents.push(
      <TimelineCard 
        {...event} 
        includeTrailingLine={!lastOfYear} 
        key={event.title} 
      />
    );
  });

  return (
    <ol className={'flex flex-col p-3 items-center justify-center w-1/2'}>
      {timelineEvents}
    </ol>
  );
}