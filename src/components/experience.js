import React from "react";

const Experience = ({ jobs }) => {
  return (
    <main className="CV-page">
      <div className="CV-grid">
        <div className="CV-grid-column">
          <div className="CV-jobs">
            <h2 className="CV-secondaryHeading CV-jobs-heading">
              Relevant Experience
            </h2>
            {jobs.map((job, index) => (
              <section className="CV-timeline CV-job" key={index}>
                <h3 className="CV-timeline-heading">
                  <span className="CV-timeline-heading-title">{job.title}</span>
                  &#8211;
                  <span className="CV-timeline-heading-location">
                    {job.location}
                  </span>
                  <small className="CV-timeline-heading-duration">
                    {job.duration}
                  </small>
                </h3>
                <ul className="CV-timeline-details">
                  {job.details.map((detail, detailIndex) => (
                    <li className="CV-job-timeline-item" key={detailIndex}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Experience;
