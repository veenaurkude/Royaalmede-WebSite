"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/lib/config";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { Phone, Mail, ArrowLeft } from "lucide-react";
import WhatsAppBtn from "@/components/WhatsAppBtn/WhatsAppBtn";
import JobCard from "@/components/JobCard/JobCard";


type Job = {
  id: number;
  jobTitle: string;
  companyName: string;
  location: string;
  jobDescription: string;
  totalExperience: string;
};

const CareerPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/careers`);

        console.log("API response:", response.data);

        setJobs(response.data);
      } catch (error) {
        console.error("Failed to fetch job data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <main className="flex min-h-screen flex-col font-sans bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/home1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            Our Careers
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-6">
            Crafting premium residential and commercial spaces in Nagpur with
            modern amenities and prime locations.
          </p>
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-300 hover:text-amber-500 transition"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </section>

      {/* Job Listings */}
      <section className="flex-1 py-16 px-4 container mx-auto">
        {loading ? (
          <p className="text-center text-lg text-gray-600">Loading jobs...</p>
        ) : jobs.length === 0 ? (
          <p className="text-center text-lg text-gray-600">
            No job openings available.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                jobTitle={job.jobTitle}
                companyName={job.companyName}
                location={job.location}
                jobDescription={job.jobDescription}
                totalExperience={job.totalExperience}
              />
            ))}
          </div>
        )}

        {/* Contact Section */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Connect With Us
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            Interested in joining our team? Reach out to us!
          </p>

          {/* Phone */}
          <div className="flex justify-center items-center gap-2 text-md text-gray-600 mb-1">
            <Phone className="h-5 w-5 text-amber-500" />
            <Link
              href="tel:+91-9028999253"
              className="text-gray-900 hover:text-blue-900"
            >
              +91-9028999253
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="tel:+91-9373450092"
              className="text-gray-900 hover:text-blue-900"
            >
              +91-9373450092
            </Link>
          </div>

          {/* Email */}
          <div className="flex justify-center items-center gap-2 text-md text-gray-600">
            <Mail className="h-5 w-5 text-amber-500" />
            <Link
              href="mailto:royaalmede@gmail.com"
              className="text-gray-900 hover:text-blue-900"
            >
              royaalmede@gmail.com
            </Link>
          </div>
        </section>
      </section>

      <Footer />
      <WhatsAppBtn />
    </main>
  );
};

export default CareerPage;

