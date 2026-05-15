import React from "react";

const JobCard = ({ job }) => {
  const { title, company_logo, location, jobType, company } = job;
  return (
    <div>
      <div className="card bg-slate-100 shadow-md h-full p-3 border-gray-300 border-2 hover:scale-102 hover:transition-all hover:duration-400 hover:bg-base-100">
        <div className="flex items-center gap-10">
          <figure className="h-20 w-20">
            <img src={company_logo} alt="Shoes" />
          </figure>
          <div className="flex flex-col">
            <span>{company}</span>
            <span>{location}</span>
          </div>
        </div>
        <div className="card-body px-0">
          <h2 className="card-title font-bold">{title}</h2>
          <p>
            <span>{jobType}</span>
          </p>
          <div className="card-actions justify-center mt-10">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
