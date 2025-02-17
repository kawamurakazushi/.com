import React, { memo, ReactNode, useState } from "react";
import { Helmet } from "react-helmet";

import { CloseIcon } from "../icons/close";
import { GithubIcon } from "../icons/github";
import { LinkIcon } from "../icons/link";
import { LinkedInIcon } from "../icons/linkedin";
import { MailIcon } from "../icons/mail";
import { MapIcon } from "../icons/map";
import { PhoneIcon } from "../icons/phone";
import { ProductHuntIcon } from "../icons/productHunt";

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
        <div className="mr-1 text-xs font-bold">・</div>
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
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full text-xs">
          <div
            onClick={() => {
              setModal(false);
            }}
            className="absolute w-full h-full bg-black opacity-25"
          ></div>
          <div className="z-30 w-2/3 px-4 py-4 text-black bg-white rounded shadow-md min-w-64">
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
          Proficient in Typescript, Node.js
        </div>
      </div>
      <div className="flex">
        <div className="text-xs font-light">
          Experienced in Python, Kotlin, Elm, Rust, Go, Ruby, ReasonML, Swift
        </div>
      </div>
      <div className={accent}>Frameworks, Libraries and Technologies</div>
      <div className="text-xs font-light">
        React, Next.js, TEA, tailwindcss/radix-ui, Electron, TRPC, Ruby on
        Rails, GraphQL, REST, SQL
      </div>
      <div className="text-xs font-light"></div>
      <div className={accent}>Tools</div>
      <div className="text-xs font-light">
        Github, Vercel, AWS (EC2, S3, ELB), Firebase (Firestore, Functions,
        Authentication), CircleCI, Netlify, Docker, Vim, Figma, Notion
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
          <a target="_blank" rel="noopener" href="https://zevero.earth">
            Zevero
          </a>
        </div>
        <div className={accent}>Mar 2024 - Present</div>
      </div>
      <div className="flex justify-between">
        <div className="text-xs italic">Senior Software Engineer</div>
        <div className="text-xs italic">Tokyo, Japan</div>
      </div>
      <div className="my-1">
        <Achievement>
          Lead the frontend team, and developed a new design system using shadcn/ui and Storybook.
        </Achievement>
        <Achievement>
          Rearchitectured the web application with modern technologies using Tanstack Query / Tanstack Router / Orval to improve the performance and maintainability.
        </Achievement>
        <Achievement>
          Implemented internationalization using Lingui.
        </Achievement>
      </div>
    </div>
    <div>
      <div className="flex justify-between">
        <div className={accent}>
          <a target="_blank" rel="noopener" href="https://corp.henry-app.jp/">
            Henry Inc
          </a>
          .
        </div>
        <div className={accent}>Nov 2021 - Feb 2024</div>
      </div>
      <div className="flex justify-between">
        <div className="text-xs italic">Senior Frontend Engineer</div>
        <div className="text-xs italic">Tokyo, Japan</div>
      </div>
      <div className="my-1">
        <Achievement>
          Developed cloud-based electronic medical record using
          Typescript/React for web frontend, Typescript/Node.js for BFF,
          Kotlin/GRPC for backend.
        </Achievement>
        <Achievement>
          Implemented spreadsheet like complex UI, with many keyboard shortcuts.
        </Achievement>
      </div>
    </div>
    {/* <div> */}
    {/*   <div className="flex justify-between"> */}
    {/*     <div className={accent}> */}
    {/*       <a target="_blank" rel="noopener" href="http://r.goope.jp/newport/"> */}
    {/*         Restaurant New Port */}
    {/*       </a> */}
    {/*     </div> */}
    {/*     <div className={accent}>Jun 2022 - Jun 2023</div> */}
    {/*   </div> */}
    {/*   <div className="flex justify-between"> */}
    {/*     <div className="text-xs italic">Part Time Kitchen Assistant</div> */}
    {/*     <div className="text-xs italic">Yamanashi, Japan</div> */}
    {/*   </div> */}
    {/*   <div className="my-1"> */}
    {/*     <Achievement> */}
    {/*       Prepared salads using local vegetables, and desserts including tarts */}
    {/*       and cakes. */}
    {/*     </Achievement> */}
    {/*     <Achievement> */}
    {/*       Increased about 500 instagram followers, tntroduced AirRegi and */}
    {/*       trained employees/staffs. */}
    {/*     </Achievement> */}
    {/*   </div> */}
    {/* </div> */}
    <div>
      <div className="flex justify-between">
        <div className={accent}>
          <a target="_blank" rel="noopener" href="https://www.axelspace.com/">
            Axelspace Corporation
          </a>
          .
        </div>
        <div className={accent}>Jun 2020 - Oct 2021</div>
      </div>
      <div className="flex justify-between">
        <div className="text-xs italic">Satellite Ground Systems Engineer</div>
        <div className="text-xs italic">Tokyo, Japan</div>
      </div>
      <div className="my-1">
        <Achievement>
          Maintained initial operation on multiple micro satellites (GRUS-1BCDE)
          as an Operation Lead.
        </Achievement>
        <Achievement>
          Developed commaned line interface for internal use, to operate betwwen
          satellites easier.
        </Achievement>
        <Achievement>
          Developed Monitoring System to detect abnormal behaviour of satellites
        </Achievement>
      </div>
    </div>
    {/* <div> */}
    {/*   <div className="flex justify-between"> */}
    {/*     <div className={accent}>Navyy Bar</div> */}
    {/*     <div className={accent}>Nov 2019 - Nov 2020</div> */}
    {/*   </div> */}
    {/*   <div className="flex justify-between"> */}
    {/*     <div className="text-xs italic">Part Time Curry Chef</div> */}
    {/*     <div className="text-xs italic">Tokyo, Japan</div> */}
    {/*   </div> */}
    {/*   <div className="my-1"> */}
    {/*     <Achievement> */}
    {/*       Cooks spice curries for the membership only bar. */}
    {/*     </Achievement> */}
    {/*   </div> */}
    {/* </div> */}
    <div>
      <div className="flex justify-between">
        <div className={accent}>
          <a target="_blank" rel="noopener" href="http://axelspace.com">
            Scoville Inc
          </a>
          .
        </div>
        <div className={accent}>Apr 2017 - May 2020</div>
      </div>
      <div className="flex justify-between">
        <div className="text-xs italic">Full Stack Web Developer</div>
        <div className="text-xs italic">Tokyo, Japan</div>
      </div>
      <div className="my-1">
        <Achievement
        // notes={
        //   <div>
        //     <div className="mb-1">
        //       <div className="font-bold">1. en-courage.com </div>
        //       <div>
        //         A platform for job-hunting students.
        //         <br /> Register to events hosted by companies, and get an
        //         offer
        //       </div>
        //     </div>
        //     <div className="mb-1">
        //       <div className="font-bold">2. en-courage for Admins</div>
        //       <div>
        //         Managing the whole system. <br />
        //         Hosting an Event, Interviewing System, User Management,
        //         Clients Management
        //       </div>
        //     </div>
        //     <div className="mb-1">
        //       <div className="font-bold">3. en-courage for Clients</div>
        //       <div>
        //         Client's Application. <br />
        //         Hosting an Event, Analyzing the participant of the events.
        //       </div>
        //     </div>
        //     <div className="mb-1">
        //       <div className="font-bold">4. CMS</div>
        //       <div>
        //         Create Article for en-courage.com
        //         <br />
        //         Complex data types (Image, Video, Quotation, Twitter embeds),
        //         Medium like UI, Reviewing and Publishing System.
        //       </div>
        //     </div>
        //   </div>
        // }
        >
          In charge of frontend development in a team of 4 global engineers, and
          developed 4 co-related web application with varied technologies
          including <i>React</i>, <i>Redux</i>, <i>RxJs</i>, <i>Redux loop</i>,
          <i> Elm</i>.
        </Achievement>
        <Achievement>
          Create a website CMS targeting restaurant, developed using
          <i> Go</i>, and <i>React</i>
        </Achievement>
        <Achievement>
          Built the whole online media system, using <i>Elixir</i>/
          <i>Phoenix</i> for the API, and
          <i> Javascript</i>/<i>React</i> for the frontend.
        </Achievement>
        <Achievement>
          Contributed to marketing, but automating repetitive task on
          Salesforce, and by developing desktop app editor for writing SEO
          efficient articles.
        </Achievement>
        <Achievement>
          Interviewed over 80 students from Vietnam, invited 6 students as an
          intern and hired 2 of them as a full-time employee after their
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
          <a target="_blank" rel="noopener" href="https://retty.me">
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
          Implemented a timeline of new user's posts, doubled the number of
          likes, and reduce the exit rate of new users.
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
          <a target="_blank" rel="noopener" href="https://www.donuts.ne.jp/">
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
          Improved development environment, by introducing git-flow, and by
          developing a slack bot to deploy a specific branch to staging servers.
        </Achievement>
        <Achievement>
          Created a provider system by scraping RSS feeds from other media.
        </Achievement>
        <Achievement>
          Push notification functionality for iOS using <i>Amazon SNS</i>.
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
      <div className="text-xs italic font-light">
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
      <div className="text-xs">IELTS 7.5, TOEIC 945, TOEFL iBT 92</div>
    </div>
    <div className={accent}>Awards</div>
    <div className="font-light">
      <div className="text-xs">1st place at Sophia University Hackathon.</div>
      <div className="text-xs">Awarded at ZenHack Hackathon</div>
    </div>
    <div className={accent}>Certifications</div>
    <div className="font-light">
      <div className="text-xs">
        2023/7 食品衛生責任者 (Food Safety Supervisor)
      </div>
      <div className="text-xs">2023/8 医療事務認定実務者</div>
    </div>
  </>
);

const Link = ({
  href,
  label,
  icon: Icon,
}: {
  href?: string;
  label: string;
  icon: React.FunctionComponent;
}) => (
  <a
    target="_blank"
    rel="noopener"
    href={href}
    className="flex items-center mt-1 text-xs"
  >
    <Icon />
    <div className="flex-1 leading-none break-all">{label}</div>
  </a>
);

const Links = () => (
  <div className="font-light">
    <div className={header}>Contacts</div>
    <Link
      label="kawamurakazushi@gmail.com"
      icon={() => <MailIcon className="mr-1" size="12" />}
    />
    <Link
      label="Gifu, Japan"
      icon={() => (
        <div style={{ height: 18 }} className="flex items-center">
          <MapIcon className="mr-1 text-xs" size="12" />
        </div>
      )}
    />
    {/* <Link */}
    {/*   label="(+81)8010550667" */}
    {/*   icon={() => <PhoneIcon className="mr-1" size="12" />} */}
    {/* /> */}
    <div className={accent}>Links</div>
    <Link
      href="https://kawamurakazushi.com"
      label="kawamurakazushi.com"
      icon={() => <LinkIcon className="mr-1" size="12" />}
    />
    <Link
      href="https://github.com/kawamurakazushi"
      label="github.com/kawamurakazushi"
      icon={() => <GithubIcon className="mr-1" size="12" />}
    />
    <Link
      href="https://www.producthunt.com/@kawamurakazushi"
      label="producthunt.com/@kawamurakazushi"
      icon={() => <ProductHuntIcon className="mr-1" size="12" />}
    />
    <Link
      href="https://www.linkedin.com/in/kawamurakazushi"
      label="linkedin.com/in/kawamurakazushi"
      icon={() => <LinkedInIcon className="mr-1" size="12" />}
    />
  </div>
);

const Projects = () => (
  <>
    <div className={`${header}`}>Side Projects</div>
    <div className={`${accent}`}>
      <a target="_blank" rel="noopener" href="https://blendmarket.jp">
        BlendMarket
      </a>
    </div>
    <div className="text-xs font-light">
      A Marketplace for original spices, developed with Next.js/TRPC.
    </div>
    <div className={`${accent}`}>
      <a
        target="_blank"
        rel="noopener"
        href="https://www.producthunt.com/products/grepmark"
      >
        grepmark
      </a>
    </div>
    <div className="text-xs font-light">
      Collaborative bookmark management app, developed with React/Relay and
      Elixer/Phoenix.
    </div>
    <div className={`${accent}`}>
      <a
        target="_blank"
        rel="noopener"
        href="https://www.figma.com/c/plugin/731312569747199418/Map-Maker"
      >
        Figma Map Maker
      </a>
    </div>
    <div className="text-xs font-light">
      A map making plugin for Figma, that was featured as #5 product of the day
      on{" "}
      <a
        className="underline"
        target="_blank"
        rel="noopener"
        href="https://www.producthunt.com/posts/figma-map-maker"
      >
        {"Product Hunt"}
      </a>{" "}
      and on{" "}
      <a
        className="underline"
        target="_blank"
        rel="noopener"
        href="https://techcrunch.com/2019/08/01/figma-the-design-tool-in-the-cloud-launches-plug-ins/"
      >
        {"TechCrunch"}
      </a>
      . 42.9k+ installs.
    </div>
    <div className={`${accent}`}>
      <a target="_blank" rel="noopener" href="https://kawamurakazushi.com">
        kawamurakazushi.com
      </a>
    </div>
    <div className="text-xs font-light">
      Portfolio / Blog developed using GatsbyJS.
    </div>
    <div className={`${accent}`}>
      <a
        target="_blank"
        rel="noopener"
        href="https://github.com/kawamurakazushi/tle-parser"
      >
        TLE (Two-line elements) Parser
      </a>
    </div>
    <div className="text-xs font-light">
      TLE Parser written in Rust and nom.
    </div>
    <div className={`${accent}`}>
      <a
        target="_blank"
        rel="noopener"
        href="https://apps.apple.com/jp/app/currylife-%E3%82%AB%E3%83%AA%E3%83%BC%E3%83%A9%E3%82%A4%E3%83%95/id1493953558"
      >
        CURRYLIFE (NLA)
      </a>
    </div>
    <div className="text-xs font-light">
      An iOS/Android App for Curry lovers, developed with React Native.
    </div>
  </>
);

export default memo(() => (
  <>
    <Helmet>
      <title>Resume | Kazushi Kawamura</title>
      <meta property="og:title" content="Resume" />
      <meta name="viewport" content="width=1080" />
      <meta name="robots" content="noindex" />
    </Helmet>
    <div className="px-3 py-2 m-auto text-sm max-w-main">
      <div>
        <div style={{ lineHeight: "60px" }} className="text-4xl font-semibold">
          Kazushi Kawamura
        </div>
        <div className="text-xs italic font-semibold">Software Developer</div>
        <div className="text-xs font-light">
          Versatile Full-Stack Developer with 7+ years of experience developing,
          and managing small to large web services, to mobile application in a
          startup environment. Currently specializing in Frontend development.
        </div>
      </div>
      <main className="flex flex-row">
        <section className="w-2/3 mr-3">
          <Skills />
          <WorkHistory />
        </section>
        <section className="w-1/3 ml-1">
          <Links />
          <Education />
          <Projects />
          <AdditionalInformation />
        </section>
      </main>
    </div>
  </>
));
