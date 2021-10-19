import TimelineCard from "./TimelineCard";
import YearCard from './YearCard';
import MyLink from "../MyLink";

export interface TimelineEvent {
  beginning: Date,
  end?: Date,
  title: string,
  description: React.ReactNode,
  location?: string,
}

const events: TimelineEvent[] = [
  {
    beginning: new Date('August 18, 2020'),
    title: 'Moved to San Francisco',
    description: '',
    location: 'San Francisco, CA',
  },
  {
    beginning: new Date('July 7, 2020'),
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
      Computer Science and minors in German and Philosophy. I also spent a lot of time playing the trombone
      during football and basketball games with the Duke University Marching Band (yes, we're D.U.M.B), running and
      playing pickup basketball, and exploring the beautiful city of Durham, N.C.`
  },
  {
    beginning: new Date('September 1, 2019'),
    end: new Date('December 1, 2020'),
    title: 'Real Python video tutorial creator',
    description: (
      <div>I create video tutorials on the Python programming language for <MyLink address={'https://www.realpython.com'} title={'realpython.com'} />. My videos have been watched by thousands of Python learners 
      and receive consistently glowing reviews 
      (watch <MyLink address={'https://www.realpython.com/team/lwpulsifer'} title={'here'} />).
      </div>
    ),
  },
  {
    beginning: new Date('May 17, 2019'),
    title: 'Spent the summer in Berlin',
    description: `I had an amazing time exploring Berlin, and also got a chance to 
      visit London, Rotterdam, Madrid, Salamanca, and Stockholm`,
    location: 'Europe writ large',
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
    beginning: new Date('August 18, 2016'),
    title: 'Started at Duke University',
    description: ``,
    location: 'Durham, NC',
  },
  {
    beginning: new Date('September 4, 1997'),
    title: 'Born',
    description: 'That was exciting!',
    location: 'Lexington, VA',
  },
];

export default function Timeline() {

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
    <ol className={'flex flex-col p-3 items-center justify-center w-1/2 bg-background rounded-2xl'}>
      {timelineEvents}
    </ol>
  );
}