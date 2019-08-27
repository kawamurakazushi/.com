import React, { memo, ReactNode, useState } from "react";
import Helmet from "react-helmet";

import { GithubIcon } from "../icons/github";
import { LinkIcon } from "../icons/link";
import { LinkedInIcon } from "../icons/linkedin";
import { MailIcon } from "../icons/mail";
import { MapIcon } from "../icons/map";
import { PhoneIcon } from "../icons/phone";

const header = "font-semibold text-sm border-b border-black mt-2 mb-1";
const accent = "font-semibold text-xs mt-1 mb-";

const Achievement = ({
  children,
  notes,
}: {
  children: ReactNode;
  notes?: string;
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseOut={() => setHover(false)}
      onMouseOver={() => setHover(true)}
      className="relative"
    >
      <div className="flex">
        <div className="font-bold mr-1 text-xs ">・</div>
        <div
          className={`${
            notes ? "cursor-help hover:text-gray-700" : ""
          } text-xs`}
        >
          {children}
        </div>
      </div>
      {hover && notes && (
        <div
          style={{ width: 250, right: -255 }}
          className="absolute bg-black top-0 text-white text-xs py-2 px-4 rounded shadow-md"
        >
          {notes}
        </div>
      )}
    </div>
  );
};

const Skills = () => (
  <>
    <div className={`${header}`}>Technical Skills</div>
    <div>
      <div className={accent}>Programming Languages</div>
      <div className="flex">
        <div className="text-xs">
          Proficient in Typescript, Node.js, Elm, Go
        </div>
      </div>
      <div className="flex">
        <div className="text-xs">
          Experienced in Ruby, Dart, OCaml, Elixir, Swift, PHP
        </div>
      </div>
      <div className={accent}>Frameworks and Libraries</div>
      <div className="text-xs">
        React, Redux, TEA, Gatsbyjs, webpack, tailwindcss, Flutter, Electron,
        Lerna
      </div>
      <div className="text-xs">Ruby on Rails, GraphQL, REST, SQL</div>
      <div className={accent}>Tools</div>
      <div className="text-xs">
        Github, JIRA, AWS (EC2, S3, ELB), Firebase (Firestore, Functions,
        Authentication), CircleCI, Netlify, Docker, Vim, Figma
      </div>
      <div className={accent}>Methodology</div>
      <div className="text-xs">Agile, Scrum, Pair Programming</div>
    </div>
  </>
);

const WorkHistory = () => (
  <>
    <div className={header}>Experience</div>
    <div>
      <div className="flex justify-between">
        <div className={accent}>
          <a target="_blank" href="https://sc0ville.com/index.html?lang=en">
            Scoville Inc
          </a>
          .
        </div>
        <div className={accent}>Apr 2017 - Present</div>
      </div>
      <div className="text-xs italic">Full Stack Web Developer</div>
      <div className="my-1">
        <Achievement>
          In charge of frontend development in a team of 4 global engineers, and
          developed 4 co-related web application with varied technologies
          including <i>React</i>, <i>Redux</i>, <i>RxJs</i>, <i>Redux loop</i>,
          <i> Elm</i>.
        </Achievement>
        <Achievement>
          Create a website builder targeting restaurant, developed using
          <i>Go</i>, and <i>React</i>
        </Achievement>
        <Achievement>
          Online Media, developed using <i>Elixir</i>/<i>Phoenix</i>, and
          <i> Javascript</i>/<i>React</i>
        </Achievement>
        <Achievement>
          Contributed to marketing, but automating repetitive task on
          Salesforce, and by developing desktop app editor for writing SEO
          efficient articles.
        </Achievement>
        <Achievement>
          Interviewed over 80 students from Vietnam, invited 6 students as a
          intern, and hired 2 of them as a full-time employee after their
          graduation
        </Achievement>
        <Achievement>
          Trained over 20 interns, especially for frontend developers, including
          HTML, CSS, Javascript, and React.
        </Achievement>
      </div>
    </div>
    <div>
      <div className="flex justify-between">
        <div className={accent}>
          <a target="_blank" href="https://retty.me">
            Retty Inc.
          </a>
        </div>
        <div className={accent}>Sep 2016 - Mar 2017</div>
      </div>
      <div className="text-xs italic">iOS / Web Developer Intern</div>
      <div className="my-1">
        <Achievement>
          Proposed and developed a Landing Page generator, and dramatically
          reduce development time from 1-2 weeks to 30 minutes.
        </Achievement>
        <Achievement>
          Complex data aggregating using <i>Redash</i> and <i>SQL</i>.
        </Achievement>
        <Achievement>
          Implemented a timeline of new user's post, doubled the number of
          likes, and reduce exit rate of new users.
        </Achievement>
        <Achievement>
          Build a dynamic OG image depending on user information using
          <i> ImageMajick</i> and <i>PHP</i>.
        </Achievement>
      </div>
    </div>
    <div>
      <div className="flex justify-between">
        <div className={`${accent}`}>
          <a target="_blank" href="https://www.donuts.ne.jp/">
            Donuts Co. Ltd.
          </a>
        </div>
        <div className={`${accent}`}>Sep 2015 - Oct 2016</div>
      </div>
      <div className="text-xs italic">iOS / Web Developer Intern</div>
      <div className="my-1">
        <Achievement>
          Renewed an iOS Application from scratch with <i>Swift</i>, with
          <i> RxSwift</i> and
          <i> MVVM Architecture</i>.
        </Achievement>
        <Achievement>
          Refactored and Redesigned old API using <i>RESTful API</i>.
        </Achievement>
        <Achievement>
          Improved development environment, by introducing git flow, and by
          developing a slack bot to deploy a specific branch to staging servers.
        </Achievement>
        <Achievement>
          Created a provider system but scraping RSS feeds from other media.
        </Achievement>
      </div>
    </div>
  </>
);

const Education = () => (
  <>
    <div className={`${header}`}>Education</div>
    <div className="">
      <div className="flex justify-between">
        <div className={accent}>Sophia University</div>
        <div className={accent}>2012 - 2017</div>
      </div>
      {/* <div className={`text-xs`}>Tokyo, Japan</div> */}
      <div className="italic text-xs">
        Bachelor of Information and Communication Science
      </div>
    </div>
    <div>
      <div className="flex justify-between">
        <div className={accent}>University of North Carolina</div>
        <div className={accent}>2014 - 2015</div>
      </div>
      {/* <div className="">Charlotte, USA</div> */}
      <div className="text-xs italic">
        Study Abroad focusing on Computer Science
      </div>
    </div>
  </>
);

const AdditionalInformation = () => (
  <>
    <div className={`${header}`}>Additional Information</div>
    <div className={accent}>Language</div>
    <div className="text-xs">Japanese - Native</div>
    <div className="text-xs">English - Proficient</div>
    <div className="text-xs">TOEIC 945, TOEFL iBT 92</div>
    <div className={accent}>Awards</div>
    <div className="text-xs">1st place at Sophia University Hackathon.</div>
    <div className="text-xs">Awarded at ZenHack Hackathon</div>
  </>
);

const Links = () => (
  <>
    <div className={`${header}`}>Contacts</div>
    <a
      href="mailto:kawamurakazushi@gmail.com"
      className="flex items-center text-xs"
    >
      <MailIcon className="mr-1" size="12" />
      kawamurakazushi@gmail.com
    </a>
    <a className="flex items-start text-xs">
      <div style={{ height: 18 }} className="flex items-center">
        <MapIcon className="mr-1 text-xs" size="12" />
      </div>
      <div className="flex-1">
        Urban Hills, Room 201, Nakameguro Meguro-ku Tokyo 153-0061, Japan
      </div>
    </a>
    <a className="flex items-center text-xs">
      <PhoneIcon className="mr-1" size="12" />
      <div className="flex-1">(+81)8010550667</div>
    </a>
    <div className={`${accent}`}>Links</div>
    <a
      target="_blank"
      href="https://kawamurakazushi.com"
      className="flex items-center text-xs"
    >
      <LinkIcon className="mr-1" size="12" />
      kawamurakazushi.com
    </a>
    <a
      target="_blank"
      href="https://github.com/kawamurakazushi"
      className="flex items-center text-xs"
    >
      <GithubIcon className="mr-1" size="12" />
      github.com/kawamurakazushi
    </a>
    <a
      target="_blank"
      href="https://www.linkedin.com/in/kawamurakazushi"
      className="flex items-center text-xs"
    >
      <LinkedInIcon className="mr-1" size="12" />
      www.linkedin.com/in/kawamurakazushi
    </a>
  </>
);

const Projects = () => (
  <>
    <div className={`${header}`}>Personal Projects</div>
    <div className={`${accent}`}>Currylife</div>
    <div className="text-xs">
      An iOS/Android App for Curry lovers, developed using Dart/Flutter.
    </div>
    <div className={`${accent}`}>Figma Map Maker</div>
    <div className="text-xs">
      A map making plugin for Figma, that was featured as #5 product of the day
      on Product Hunt and TechCrunch.
    </div>
    <div className={`${accent}`}>monkeyml</div>
    <div className="text-xs">
      Interpreter for Monkey Language written in OCaml.
    </div>
  </>
);

export default memo(() => (
  <>
    <Helmet>
      <title>Resume | Kazushi Kawamura</title>
      <meta property="og:title" content="Resume" />
      <meta name="robots" content="noindex" />
    </Helmet>
    <div className="max-w-main text-sm m-auto px-3 py-2">
      <div>
        <div style={{ lineHeight: "60px" }} className="text-5xl">
          Kazushi <span className="font-semibold">Kawamura</span>
        </div>
        <div className="italic text-xs">Software Developer</div>
        <div className="text-xs">
          Versatile Full-Stack Developer with 3+ years of experience developing,
          and managing small to large web services, to mobile application.
          Currently specializing in Frontend development.
        </div>
      </div>
      <main className="flex flex-row">
        <section className="mr-3 w-2/3">
          <WorkHistory />
          <Skills />
        </section>
        <section className="ml-1 w-1/3">
          <Links />
          <Education />
          <Projects />
          <AdditionalInformation />
        </section>
      </main>
    </div>
  </>
));
