import React, { memo } from "react";

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
      <div className={accent}>Framework and Libraries</div>
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
      <div>Github / JIRA / CircleCI / Vim / Figma</div>
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
        <div className={`${italic}`}>iOS Developer / Web Developer</div>
        <div className={`${italic}`}>Sep 2016 - Mar 2017</div>
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
        <div className={`${accent}`}>Donuts Co. Ltd.</div>
        <div className={`${accent}`}>Tokyo, Japan</div>
      </div>
      <div className="flex justify-between">
        <div className={`${italic}`}>iOS Developer / Web Developer</div>
        <div className={`${italic}`}>Sep 2015 - Oct 2016</div>
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
  </>
);

const Education = () => (
  <>
    <div className={`${header}`}>Education</div>
    <div className="mb-3">
      <div className="flex justify-between">
        <div className={`${accent}`}>Sophia University</div>
        <div className={`${accent}`}>Tokyo, Japan</div>
      </div>
      <div className="flex justify-between">
        <div className={`${italic}`}>
          Bachelor of Information and Communication Science
        </div>
        <div className={`${italic}`}>2012-2017</div>
      </div>
      <div>
        Researched about statistics and text mining / First prize university
        Hackathon
      </div>
    </div>
    <div>
      <div className="flex justify-between">
        <div className={`${accent}`}>University of North Carolina</div>
        <div className={`${accent}`}>Charlotte, USA</div>
      </div>
      <div className="flex justify-between">
        <div className={`${italic}`}>Concentration in Computer Science</div>
        <div className={`${italic}`}>2015-2015</div>
      </div>
      <div>Relevant Coursework / Honors etc...</div>
    </div>
  </>
);

const AdditionalInformation = () => (
  <>
    <div className={`${header}`}>Additional Information</div>
    <div className={accent}>Language</div>
    <div>Japanese - Native</div>
    <div>English - Proficient (TOEIC 945, TOEFL iBT 92)</div>
  </>
);

export default memo(() => (
  <div style={{ maxWidth: 800 }} className="text-sm m-auto px-3 py-2">
    <div>
      <div className="font-bold text-3xl">Kazushi Kawamura</div>
      <div className="mb-2">
        <a
          href="mailto:me@kawamurakazushi.com"
          className="flex items-center text-xs"
        >
          <MailIcon className="mr-1" size="12" />
          me@kawamurakazushi.com
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
          <LinkedInIcon className="mr-1" size="12" />{" "}
          www.linkedin.com/in/kawamurakazushi
        </a>
        <a
          target="_blank"
          href="https://kawamurakazushi.com"
          className="flex items-center text-xs"
        >
          <LinkIcon className="mr-1" size="12" />
          kawamurakazushi.com
        </a>
      </div>
      <div className={`${italic}`}>Software Developer</div>
      <div>
        Full-stack web developer, technology agnostic, and functional
        programming evangelist. I love being committed to a project, and am used
        to interfacing with the other teams, and easing the communication with
        the other developers. I'm also an Agile enthusiast, currently working as
        a part time scrum master.
      </div>
    </div>
    <Skills />
    <WorkHistory />
    <Education />
    <AdditionalInformation />
  </div>
));
