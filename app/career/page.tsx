"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import WhatsAppBtn from "@/components/WhatsAppBtn/WhatsAppBtn";
import JobCards from "@/components/JobCards/JobCards";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  experience: string;
};

const CareerPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("https://api.example.com/jobs"); // ✅ Replace with your real API
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
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/home1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
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
              <JobCards key={job.id} {...job} />
            ))}
          </div>
        )}
      </section>

      {/* Footer & WhatsApp Button */}
      <Footer />
      <WhatsAppBtn />
    </main>
  );
};

export default CareerPage;
