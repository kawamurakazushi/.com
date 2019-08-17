import React, { memo } from "react";
import Helmet from "react-helmet";

import { GithubIcon } from "../icons/github";
import { LinkIcon } from "../icons/link";
import { LinkedInIcon } from "../icons/linkedin";
import { MailIcon } from "../icons/mail";

const header = "font-semibold text-lg border-b border-black mt-2 mb-2";
const accent = "font-semibold mt-1";
const italic = "italic";

const Skills = () => (
  <>
    <div className={`${header}`}>Key Skills</div>
    <div>
      <div className={accent}>Programming Languages</div>
      <div>
        Typescript / Javascript / Elm / Go / Ruby / OCaml / Dart / Swift
      </div>
      <div className={accent}>Frameworks and Libraries</div>
      <div>
        <span style={{ width: 74 }} className="inline-block italic">
          Frontend -
        </span>
        React / Redux / Jest / Gatsbyjs / webpack / tailwindcss / TEA / Flutter
      </div>
      <div>
        <span style={{ width: 74 }} className=" inline-block italic">
          Backend -
        </span>
        Ruby on Rails / Firebase (Firestore, Functions, Authentication) /
        GraphQL / REST / SQL
      </div>
      <div className={accent}>Tools</div>
      <div>Github / JIRA / CircleCI / Netlify / Vim / Figma</div>
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
      <div className="my-2">
        <div>
          - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div>
          - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div>
          - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
      <div className="my-2">
        <div>- Data aggregating using Redash and SQL.</div>
        <div>- Landing Page Generator</div>
        <div>- API Development using Java, and PHP.</div>
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
      <div className="my-2">
        <div>- Developed an iOS Application from scratch using Swift.</div>
        <div>- Redesign the old API using RESTful API.</div>
        <div>
          - Created a provider system but scraping RSS feeds from other media.
        </div>
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
          Kazushi <span className="font-medium">Kawamura</span>
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
