import React from "react";

type JobCardProps = {
  title: string;
  company: string;
  location: string;
  description: string;
  experience: string;
};

const JobCards: React.FC<JobCardProps> = ({
  title,
  company,
  location,
  description,
  experience,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Company:</span> {company}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Location:</span> {location}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Experience:</span> {experience}
      </p>
      <p className="text-gray-700 text-sm mt-3 line-clamp-3">
        {description}
      </p>
    </div>
  );
};

export default JobCards;
