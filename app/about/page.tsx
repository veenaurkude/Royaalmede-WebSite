import React from "react";
import Head from "next/head";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import WhatsAppBtn from "@/components/WhatsAppBtn/WhatsAppBtn";

import atulImage from "@/public/atul.jpg";
import ankkitImage from "@/public/ankit.jpg";

const About = () => {
  const properties = [
    {
      src: "/img1.jpg",
      title: "Royaalmede",
      description: "Modern design in a prime residential location.",
    },
    {
      src: "/img2.png",
      title: "Royaalmede Premium",
      description: "Commercial excellence in the city center.",
    },
    {
      src: "/img3.png",
      title: "Royaal Kings",
      description: "Luxury villas surrounded by greenery.",
    },
    {
      src: "/img4.png",
      title: "Royaal Krishnum",
      description: "Elegant high-rise living with modern amenities.",
    },
    {
      src: "/img5.png",
      title: "Rachana City",
      description: "Sophisticated urban development project.",
    },
    {
      src: "/img6.png",
      title: "Royaalmede Plaza",
      description: "Smart commercial space for modern enterprises.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          About Royaalmede – Premium Real Estate Developers in Nagpur
        </title>
        <meta
          name="description"
          content="Discover Royaalmede's mission, vision, and achievements in transforming Nagpur’s real estate. Led by Atul Waghare & Ankkit Malviyaa, we craft premium properties redefining modern living."
        />
        <meta
          name="keywords"
          content="Royaalmede Nagpur, About Royaalmede, Atul Waghare, Ankkit Malviyaa, real estate developers Nagpur, premium properties Nagpur, residential projects Nagpur, commercial real estate Nagpur, infrastructure in Nagpur, luxury homes Nagpur, Royaalmede mission and vision, top builders Nagpur"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About Royaalmede – Real Estate Developers in Nagpur"
        />
        <meta
          property="og:description"
          content="Meet Royaalmede's visionary team and explore our mission to build premium homes and commercial spaces in Nagpur."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://royaalmede.com/about" />
        <meta
          property="og:image"
          content="https://royaalmede.com/images/about-cover.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Royaalmede – Real Estate Developers in Nagpur"
        />
        <meta
          name="twitter:description"
          content="Explore Royaalmede’s real estate journey and leadership in premium residential and commercial development in Nagpur."
        />
        <meta name="twitter:image" content="/home1.jpg" />
      </Head>

      <main className="flex min-h-screen flex-col font-sans bg-white">
        {/* Header */}
        <Header />

        {/* Home Section */}
        <section
          className="relative bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center text-white"
          style={{ backgroundImage: "url('/home1.jpg')" }} // Replace with your actual image path
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
              About Us
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-6">
              Crafting premium residential and commercial spaces in Nagpur with
              modern amenities and prime locations.
            </p>

            {/* Back to Home */}
            <Link
              href="/"
              className="inline-flex items-center text-sm text-gray-300 hover:text-amber-500 transition"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </section>

        <main className="flex-1">
          {/* Mission Section */}
          <section className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="relative w-72 h-72 rounded-xl overflow-hidden border-4 border-amber-500 shadow-lg">
                <Image
                  src={atulImage}
                  alt="Mr. Atul Waghare"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-xl font-semibold text-center">
                Mr. Atul Waghare
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl text-blue-900 font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-base leading-relaxed text-justify">
                Our mission is to transform Nagpur, Maharashtra’s real estate by
                creating well-designed homes and commercial spaces that suit
                modern lifestyles. Under the visionary leadership of our
                directors, Atul Waghare and Ankkit Malviyaa, we focus on
                quality, innovation, and customer satisfaction to redefine urban
                living. Guided by Atul’s passion for creativity and Ankit’s
                market expertise, we are committed to building sustainable
                properties that enhance lives and create thriving communities.
              </p>
            </div>
          </section>

          {/* Vision Section */}
          <section className="container mx-auto px-4 py-16 flex flex-col-reverse lg:flex-row items-center gap-10">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl text-blue-900 font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-base leading-relaxed text-justify">
                Our vision is to set a new standard in Nagpur, Maharashtra’s
                real estate sector by developing exceptional projects that
                showcase quality, innovation, and excellence. Led by Atul
                Waghare’s creative leadership and Ankkit Malviyaa’s strategic
                expertise, we aim to make Nagpur a prime destination for luxury
                living and commercial growth. Our projects are designed to blend
                elegance, functionality, and convenience. With a strong
                commitment to quality, transparency, and sustainability, we
                strive to shape the future of real estate and improve lifestyles
                for generations to come.
              </p>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="relative w-72 h-72 rounded-xl overflow-hidden border-4 border-amber-500 shadow-lg">
                <Image
                  src={ankkitImage}
                  alt="Mr. Ankkit Malviyaa"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-xl font-semibold text-center">
                Mr. Ankkit Malviyaa
              </p>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-900 mb-10">
                Our Achievements
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map((property, index) => (
                  <div
                    key={index}
                    className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
                  >
                    <div className="relative w-full h-80 rounded-xl overflow-hidden">
                      <Image
                        src={property.src}
                        alt={property.title}
                        fill
                        className="w-full h-80 items-center justify-center bg-white"
                        // className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">
                        {property.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {property.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />

        {/* WhatsAppBtn */}
        <WhatsAppBtn />
      </main>
    </>
  );
};

export default About;
