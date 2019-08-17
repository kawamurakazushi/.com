import React, { memo, useState } from "react";
import Helmet from "react-helmet";

import { GithubIcon } from "../icons/github";
import { LinkIcon } from "../icons/link";
import { LinkedInIcon } from "../icons/linkedin";
import { MailIcon } from "../icons/mail";

const header = "font-semibold text-lg border-b border-black mt-2 mb-2";
const accent = "font-semibold mt-1";
const italic = "italic";

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
        <div className="font-bold mr-1 text-xs">・</div>
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
    <div className={`${header}`}>Key Skills</div>
    <div>
      <div className={accent}>Programming Languages</div>
      <div>Typescript / Node.js / Elm / Go / Ruby / OCaml / Dart / Swift</div>
      <div className={accent}>Frameworks and Libraries</div>
      <div>
        React / Redux / TEA / Gatsbyjs / webpack / tailwindcss / Flutter /
        Electron / Lerna
      </div>
      <div>Ruby on Rails / GraphQL / REST / SQL</div>
      <div className={accent}>Tools</div>
      <div>
        Github / JIRA / Firebase Firestore, Functions, Authentication / CircleCI
        / Netlify / Vim / Figma
      </div>
    </div>
  </>
);

const WorkHistory = () => (
  <>
    <div className={`${header}`}>Work History</div>
    <div>
      <div className="flex justify-between">
        <div className={`${accent}`}>Scoville Inc.</div>
        <div className={`${accent}`}>Tokyo, Japan</div>
      </div>
      <div className="flex justify-between">
        <div className={`${italic}`}>Full-Stack Web Developer</div>
        <div className={`${italic}`}>Apr 2017 - Present</div>
      </div>
      <div className="my-1">
        <Achievement content="In charge of frontend development in a team of 4 global engineers, and developed 4 co-related web application with varied technologies including React, Redux, RxJs, Redux loop, Elm." />
        <Achievement content="Contributed to marketing, but automating repetitive task on Salesforce, and by developing keyword count editor desktop app for writing SEO efficient articles." />
        <Achievement
          content="Interviewed over 80 students from Vietnam, invited 6 students as a
          intern, and hired 2 of them as a full-time employee after their graduation."
        />
        <div>
          <Achievement
            content="Trained over 20 interns, especially for frontend developers, including HTML, CSS, Javascript, and React."
            notes="This includes creating "
          />
        </div>
      </div>
    </div>
    <div>
      <div className="flex justify-between">
        <div className={`${accent}`}>Retty Inc.</div>
        <div className={`${accent}`}>Tokyo, Japan</div>
      </div>
      <div className="flex justify-between">
        <div className={`${italic}`}>iOS Developer / Web Developer Intern</div>
        <div className={`${italic}`}>Sep 2016 - Mar 2017</div>
      </div>
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
        <div className={`${accent}`}>Donuts Co. Ltd.</div>
        <div className={`${accent}`}>Tokyo, Japan</div>
      </div>
      <div className="flex justify-between">
        <div className={`${italic}`}>iOS Developer / Web Developer Intern</div>
        <div className={`${italic}`}>Sep 2015 - Oct 2016</div>
      </div>
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
    <div className="mb-3">
      <div className={`${accent}`}>Sophia University</div>
      <div className={``}>Tokyo, Japan</div>
      <div className={`${italic}`}>
        Bachelor of Information and Communication Science
      </div>
      <div className={`${italic}`}>2012-2017</div>
      {/* <div className="text-xs">
        Researched about statistics and text mining / First prize university
        Hackathon
      </div> */}
    </div>
    <div>
      <div className="flex justify-between">
        <div className={`${accent}`}>University of North Carolina</div>
      </div>
      <div className="">Charlotte, USA</div>
      <div className={`${italic}`}>Concentration in Computer Science</div>
      <div className={`${italic}`}>2014-2015</div>
    </div>
  </>
);

const AdditionalInformation = () => (
  <>
    <div className={`${header}`}>Additional Information</div>
    <div className={accent}>Language</div>
    <div>Japanese - Native</div>
    <div>English - Proficient</div>
    <div className="text-xs">TOEIC 945, TOEFL iBT 92</div>
  </>
);

const Links = () => (
  <>
    <div className={`${header}`}>Contacts</div>
    <a
      href="mailto:me@kawamurakazushi.com"
      className="flex items-center text-xs"
    >
      <MailIcon className="mr-1" size="12" />
      me@kawamurakazushi.com
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
    </Helmet>
    <div style={{}} className="max-w-main text-sm m-auto px-3 py-2">
      <div>
        <div className="text-5xl">
          Kazushi <span className="font-semibold">Kawamura</span>
        </div>
        <div className={`${italic}`}>Software Developer</div>
        <div>
          Full-stack web developer, technology agnostic, and functional
          programming evangelist. I love being committed to a project, and am
          used to interfacing with the other teams, and easing the communication
          with the other developers. I'm also an Agile enthusiast, currently
          working as a part time scrum master.
        </div>
      </div>
      <main className="flex mt-2 flex-row">
        <section className="mr-3 w-2/3">
          <Skills />
          <WorkHistory />
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
