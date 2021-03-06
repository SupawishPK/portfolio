import React from "react";
import Bar from "../components/Bar";
import { languages, tools } from "../data";

const resume = () => {
  return (
    <div className="px-6 py-2">
      {/** education & exp */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Bachelor’s Degree in Computer science
            </h5>
            <p className="font-semibold">
              King Mongkut’s Institute of Technology Ladkrabang(2017-2021)
            </p>
            <p className="my-3">waqdmfpaogpowasdgmpsdkfop'sm,poko</p>
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Web Developer</h5>
            <p className="font-semibold">Tohome.com(2021-on)</p>
            <p className="my-3">
              Develop a new website at tohome. type of website is e-commerce but
              I don't know anything about this job.
            </p>
          </div>
        </div>
      </div>

      {/** languages & tool */}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
