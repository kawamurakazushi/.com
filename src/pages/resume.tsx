import React, { memo, ReactNode, useState } from "react";
import Helmet from "react-helmet";

import { GithubIcon } from "../icons/github";
import { LinkIcon } from "../icons/link";
import { LinkedInIcon } from "../icons/linkedin";
import { MailIcon } from "../icons/mail";
import { MapIcon } from "../icons/map";
import { PhoneIcon } from "../icons/phone";
import { CloseIcon } from "../icons/close";

const header = "font-semibold text-sm border-b border-black mt-2 mb-1";
const accent = "font-semibold text-xs mt-1 mb-";

const Achievement = ({
  children,
  notes,
}: {
  children: ReactNode;
  notes?: ReactNode;
}) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="">
      <div className="flex font-light">
        <div className="font-bold mr-1 text-xs">・</div>
        <div
          className={`${
            notes ? "cursor-help hover:text-gray-700" : ""
          } text-xs`}
          onClick={() => {
            setModal(true);
          }}
        >
          {children}
        </div>
      </div>
      {modal && notes && (
        <div className="fixed flex justify-center items-center left-0 top-0 text-xs w-full h-full">
          <div
            onClick={() => {
              setModal(false);
            }}
            className="absolute w-full h-full bg-black opacity-25"
          ></div>
          <div className="z-30 w-2/3 min-w-64 py-4 px-4 bg-white text-black shadow-md rounded">
            <div className="flex flex-row-reverse mb-1">
              <div
                className="cursor-pointer"
                onClick={() => {
                  setModal(false);
                }}
              >
                <CloseIcon size="20" />
              </div>
            </div>
            {notes}
          </div>
        </div>
      )}
    </div>
  );
};

const Skills = () => (
  <>
    <div className={header}>Technical Skills</div>
    <div>
      <div className={accent}>Programming Languages</div>
      <div className="flex">
        <div className="text-xs font-light">
          Proficient in Typescript, Node.js, Elm, Go
        </div>
      </div>
      <div className="flex">
        <div className="text-xs font-light">
          Experienced in Ruby, Dart, OCaml, Elixir, Swift, PHP
        </div>
      </div>
      <div className={accent}>Frameworks and Libraries</div>
      <div className="text-xs font-light">
        React, Redux, TEA, Gatsbyjs, webpack, tailwindcss, Flutter, Electron,
        Lerna
      </div>
      <div className="text-xs font-light">
        Ruby on Rails, GraphQL, REST, SQL
      </div>
      <div className={accent}>Tools</div>
      <div className="text-xs font-light">
        Github, JIRA, AWS (EC2, S3, ELB), Firebase (Firestore, Functions,
        Authentication), CircleCI, Netlify, Docker, Vim, Figma
      </div>
      <div className={accent}>Methodology</div>
      <div className="text-xs font-light">Agile, Scrum, Pair Programming</div>
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
      <div className="flex justify-between">
        <div className="text-xs italic">Full Stack Web Developer</div>
        <div className="text-xs italic">Tokyo, Japan</div>
      </div>
      <div className="my-1">
        <Achievement
          notes={
            <div>
              <div className="mb-1">
                <div className="font-bold">1. en-courage.com </div>
                <div>
                  A platform for job-hunting students.
                  <br /> Register to events hosted by companies, and get an
                  offer
                </div>
              </div>
              <div className="mb-1">
                <div className="font-bold">2. en-courage for Admins</div>
                <div>
                  Managing the whole system. <br />
                  Hosting an Event, Interviewing System, User Management,
                  Clients Management
                </div>
              </div>
              <div className="mb-1">
                <div className="font-bold">3. en-courage for Clients</div>
                <div>
                  Client's Application. <br />
                  Hosting an Event, Analyzing the participant of the events.
                </div>
              </div>
              <div className="mb-1">
                <div className="font-bold">4. CMS</div>
                <div>
                  Create Article for en-courage.com
                  <br />
                  Complex data types (Image, Video, Quotation, Twitter embeds),
                  Medium like UI, Reviewing and Publishing System.
                </div>
              </div>
            </div>
          }
        >
          In charge of frontend development in a team of 4 global engineers, and
          developed 4 co-related web application with varied technologies
          including <i>React</i>, <i>Redux</i>, <i>RxJs</i>, <i>Redux loop</i>,
          <i> Elm</i>.
        </Achievement>
        <Achievement>
          Create a website builder targeting restaurant, developed using
          <i> Go</i>, and <i>React</i>
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
      <div className="flex justify-between">
        <div className="text-xs italic">iOS / Web Developer Intern</div>
        <div className="text-xs italic">Tokyo, Japan</div>
      </div>
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
      <div className="flex justify-between">
        <div className="text-xs italic">iOS / Web Developer Intern</div>
        <div className="text-xs italic">Tokyo, Japan</div>
      </div>
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
      <div className="italic text-xs font-light">
        Bachelor of Information and Communication Science
      </div>
    </div>
    <div>
      <div className="flex justify-between">
        <div className={accent}>University of North Carolina</div>
        <div className={accent}>2014 - 2015</div>
      </div>
      {/* <div className="">Charlotte, USA</div> */}
      <div className="text-xs italic font-light">
        Exchange Student, focusing on Computer Science
      </div>
    </div>
  </>
);

const AdditionalInformation = () => (
  <>
    <div className={`${header}`}>Additional Information</div>
    <div className={accent}>Language</div>
    <div className="font-light">
      <div className="text-xs">Japanese - Native</div>
      <div className="text-xs">English - Proficient</div>
      <div className="text-xs">TOEIC 945, TOEFL iBT 92</div>
    </div>
    <div className={accent}>Awards</div>
    <div className="font-light">
      <div className="text-xs">1st place at Sophia University Hackathon.</div>
      <div className="text-xs">Awarded at ZenHack Hackathon</div>
    </div>
  </>
);

const Links = () => (
  <div className="font-light">
    <div className={header}>Contacts</div>
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
    <div className={accent}>Links</div>
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
  </div>
);

const Projects = () => (
  <>
    <div className={`${header}`}>Personal Projects</div>
    <div className={`${accent}`}>Currylife</div>
    <div className="text-xs font-light">
      An iOS/Android App for Curry lovers, developed using Dart/Flutter.
    </div>
    <div className={`${accent}`}>Figma Map Maker</div>
    <div className="text-xs font-light">
      A map making plugin for Figma, that was featured as #5 product of the day
      on Product Hunt and TechCrunch.
    </div>
    <div className={`${accent}`}>monkeyml</div>
    <div className="text-xs font-light">
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
          Kazushi Kawamura
        </div>
        <div className="italic text-xs font-semibold">Software Developer</div>
        <div className="text-xs font-light">
          Versatile Full-Stack Developer with 3+ years of experience developing,
          and managing small to large web services, to mobile application in a
          startup environment. Currently specializing in Frontend development.
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
