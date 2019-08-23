import React, { memo, useState } from "react";
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
  content,
  notes,
}: {
  content: string;
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
          {content}
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
        <Achievement content="In charge of frontend development in a team of 4 global engineers, and developed 4 co-related web application with varied technologies including React, Redux, RxJs, Redux loop, Elm." />
        <Achievement content="Create a website builder targeting restaurant, developed using Go, and React" />
        <Achievement content="Online Media, developed using Elixir/Phoenix, and Javascript/React" />
        <Achievement content="Contributed to marketing, but automating repetitive task on Salesforce, and by developing desktop app editor for writing SEO efficient articles." />
        <Achievement
          content="Interviewed over 80 students from Vietnam, invited 6 students as a
          intern, and hired 2 of them as a full-time employee after their graduation."
        />
        <div>
          <Achievement content="Trained over 20 interns, especially for frontend developers, including HTML, CSS, Javascript, and React." />
        </div>
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
        <Achievement
          content="Proposed and developed a Landing Page generator, and
          dramatically reduce development time from 1-2 weeks to 30 minutes."
        />
        <Achievement content="Complex data aggregating using Redash and SQL." />
        <Achievement
          content="Implemented a timeline of new user's post, doubled the number of likes, and reduce exit rate of new users."
          notes="API Development using Java / Stream API. iOS Development using Objective-C and cocoascript"
        />
        <Achievement
          content="Build a dynamic OG image depending on user information using
          ImageMajick and PHP."
        />
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
        <Achievement
          content="Renewed an iOS Application from scratch with Swift, with RxSwift
          and MVVM Architecture."
        />
        <Achievement content="Refactored and Redesigned old API using RESTful API." />
        <Achievement
          content="Improved development environment, by introducing git flow, and by
          developing a slack bot to deploy a specific branch to staging servers."
        />
        <Achievement content="Created a provider system but scraping RSS feeds from other media." />
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
      {/* <div className="text-xs">
        Researched about statistics and text mining / First prize university
        Hackathon
      </div> */}
    </div>
    <div>
      <div className="flex justify-between">
        <div className={accent}>University of North Carolina</div>
        <div className={accent}>2014 - 2015</div>
      </div>
      {/* <div className="">Charlotte, USA</div> */}
      <div className="text-xs italic">Concentration in Computer Science</div>
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
      An iOS/Android App for Curry lovers, developed using Flutter.
    </div>
    <div className={`${accent}`}>Figma Walker</div>
    <div className="text-xs">
      A Launcher Plugin for Figma. Walkthrough you project without lifting your
      keyboard.
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
          {/* Full-stack web developer, technology agnostic, and functional
          programming evangelist. I love being committed to a project, and am
          used to interfacing with the other teams, and easing the communication
          with the other developers. I'm also an Agile enthusiast, currently
          working as a part time scrum master. */}
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
