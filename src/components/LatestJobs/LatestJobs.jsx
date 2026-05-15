import React from "react";
import { useLoaderData } from "react-router";
import JobCard from "../JobCard/JobCard";

const LatestJobs = () => {
  const jobs = useLoaderData();

  console.log(jobs);
  return (
    <div className="my-20 w-9/12 mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Latest Jobs Post</h1>
        <p className="text-lg">
          Explore the different types of available jobs to apply discover which
          is right for you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {jobs.slice(0, 6).map((job) => (
          <JobCard job={job} key={job._id}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
