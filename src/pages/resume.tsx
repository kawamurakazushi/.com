import React, { memo } from "react";

const header = "font-semibold text-lg border-b border-black mt-2 mb-2";

const accent = "font-semibold";

const italic = "italic";

export default memo(() => (
  <div className="max-w-main text-sm m-auto px-3 py-2">
    <div>
      <div className="font-bold text-4xl">Kazushi Kawamura</div>
      <div className={`${italic}`}>Web Developer</div>
      <div>
        Full-stack web developer, technology agnostic, and functional
        programming evangelist. I love being committed to a project, and am used
        to interfacing with the other teams, and easing the communication with
        the other developers. I'm also an Agile enthusiast, currently working as
        a part time scrum master.
      </div>
    </div>
    <div className={`${header}`}>Skills</div>
    <div className="flex">
      <div className="flex-1">
        <div>- React</div>
        <div>- React</div>
        <div>- React</div>
        <div>- React</div>
        <div>- React</div>
        <div>- React</div>
      </div>
      <div className="flex-1">
        <div>- React</div>
        <div>- React</div>
        <div>- React</div>
        <div>- React</div>
        <div>- React</div>
        <div>- React</div>
      </div>
    </div>
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
      <div>Relevant Coursework / Honors etc...</div>
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
  </div>
));
