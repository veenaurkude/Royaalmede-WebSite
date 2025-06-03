// File: components/JobCards/JobCards.tsx

import React from "react";

type JobCardProps = {
  jobTitle: string;
  companyName: string;
  location: string;
  jobDescription: string;
  totalExperience: string;
};

const JobCards: React.FC<JobCardProps> = ({
  jobTitle,
  companyName,
  location,
  jobDescription,
  totalExperience,
}) => {
  return (
    <div className="border p-6 rounded-xl shadow-md hover:shadow-lg transition bg-white">
      <h3 className="text-xl font-semibold text-blue-900 mb-2">
        {jobTitle}
      </h3>

      <p className="text-sm text-gray-700 mb-1">
        <strong>Company:</strong> {companyName}
      </p>

      <p className="text-sm text-gray-700 mb-1">
        <strong>Location:</strong> {location}
      </p>

      <p className="text-sm text-gray-700 mb-1">
        <strong>Experience:</strong> {totalExperience}
      </p>

      <p className="text-sm text-gray-600 mt-3">
        {jobDescription}
      </p>
    </div>
  );
};

export default JobCards;
