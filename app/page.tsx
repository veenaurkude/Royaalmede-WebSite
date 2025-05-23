"use client";

import { useEffect } from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";

import {
  ArrowRight,
  Phone,
  Mail,
  Star,
  Check,
  Clock,
  DollarSign,
  Users,
  MapPin,
  Landmark,
  Building,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ElfsightReview from "@/components/ElfsightReview/ElfsightReview";
import WhatsAppBtn from "@/components/WhatsAppBtn/WhatsAppBtn";

export default function Home() {

  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [pathname]);

  return (

    <>


    <Head>
        <title>Royaalmede Loan Solution & Infrastructure - Nagpur</title>
        <meta
          name="description"
          content="Royaalmede offers premium loan solutions and infrastructure development in Nagpur. Explore home, business, personal, and mortgage loans along with luxury properties."
        />
        <meta
          name="keywords"
          content="loan solutions Nagpur, business loans, home loans, personal loans, mortgage loans, infrastructure projects Nagpur, real estate Nagpur, Royaalmede properties, affordable housing Nagpur"
        />
        <meta name="author" content="Royaalmede" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Royaalmede Loan Solution & Infrastructure" />
        <meta
          property="og:description"
          content="Reliable and fast loan solutions, and premium properties in Nagpur. Discover your perfect loan or property with Royaalmede."
        />
        <meta property="og:image" content="/logo.svg" /> 
        <meta property="og:url" content="https://www.royaalmede.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.royaalmede.com" />
      </Head>

    <div className="flex min-h-screen flex-col font-sans">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] text-white flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')",
          }}
        >
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>

          {/* <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-800/40 z-0" /> */}

          {/* Content container */}
          <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl ">
              Royaalmede Loan Solution & Infrastructure
            </h1>
            <p className="mt-4 text-gray-200 md:text-xl/relaxed">
              Providing comprehensive loan solutions and premium infrastructure
              projects in Nagpur.
            </p>
            <div className="mt-6 flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button
                size="lg"
                className="gap-1 bg-amber-500 hover:bg-amber-600"
                asChild
              >
                <Link href="/loans">
                  Explore Loans <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-1 border-white text-black hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link href="/infrastructure">
                  View Properties <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-blue-900">100+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-blue-900">95%</h3>
                <p className="text-gray-600">Customers Recommend Us</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-blue-900">6</h3>
                <p className="text-gray-600">Premium Properties</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-blue-900">13+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                  Our Services
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our comprehensive range of services designed to meet
                  your needs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="h-full overflow-hidden border-0 shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/home.jpg"
                    alt="Loan Solutions"
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">
                    Loan Solutions
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Comprehensive loan options to meet your financial needs,
                    offering competitive interest rates, flexible repayment
                    terms, quick approvals, and personalized support throughout
                    the process.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                      <span>Business Loans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                      <span>Personal Loans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                      <span>Home Loans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                      <span>Mortgage Loans</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-blue-900 hover:bg-blue-800"
                    asChild
                  >
                    <Link href="/loans">View Loan Solutions</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="h-full overflow-hidden border-0 shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img
                    src="home2.jpg"
                    alt="Infrastructure Projects"
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">
                    Infrastructure Projects
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Premium residential and commercial properties across Nagpur
                    featuring modern amenities, sustainable design, and
                    excellent connectivity to key city hubs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                      <span>Royaalmede Premium</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                      <span>Rachana City</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                      <span>Royaal Krishnum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                      <span>Royaal Kings</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-blue-900 hover:bg-blue-800"
                    asChild
                  >
                    <Link href="/infrastructure">
                      View Infrastructure Projects
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-16 bg-gradient-to-b from-white to-gray-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                  Client Testimonials
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear what our satisfied clients have to say about their
                  experience with us.
                </p>
              </div>
            </div>

            <ElfsightReview />
          </div>
        </section>

        

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-70">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                  Why Choose Us
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are committed to providing exceptional service and value to
                  our clients.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Simplicity",
                  description:
                    "Enjoy a smooth, hassle-free home buying experience from start to finish.",
                  icon: <Check className="h-6 w-6 text-amber-500" />,
                },
                {
                  title: "Luxury",
                  description:
                    "Premium living spaces designed with elegance and comfort in mind.",
                  icon: <Landmark className="h-6 w-6 text-amber-500" />,
                },
                {
                  title: "Affordable Rates",
                  description:
                    "Competitive pricing without compromising on quality or design.",
                  icon: <DollarSign className="h-6 w-6 text-amber-500" />,
                },
                {
                  title: "Community Living",
                  description:
                    "Vibrant neighborhoods built for families, friendships, and connection.",
                  icon: <Users className="h-6 w-6 text-amber-500" />,
                },
                {
                  title: "Strategic Locations",
                  description:
                    "Properties located near key transport, business, and lifestyle hubs.",
                  icon: <MapPin className="h-6 w-6 text-amber-500" />,
                },
                {
                  title: "Distinguished Architecture",
                  description:
                    "Standout designs that blend modern aesthetics with lasting value.",
                  icon: <Building className="h-6 w-6 text-amber-500" />,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="mb-4 w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-blue-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 bg-gradient-to-b bg-blue-900 text-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Contact Us
                </h2>
                <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with us for any inquiries or to schedule a
                  consultation.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-amber-500 mt-1" />
                  <div>
                    <h3 className="font-bold">Head Office</h3>
                    <Link
                      href="https://maps.app.goo.gl/UYgL8phznvvZJwBv6"
                      target="_blank"
                      className="text-gray-100"
                    >
                      Plot No. 28, 1st floor, Govind Prabhu Nagar, Rajapeth,
                      Hudkeshwar Road, Nagpur, Maharashtra - 440034.
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-amber-500 mt-1" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <Link
                      href="tel:+91-9028999253"
                      className="text-gray-300 hover:text-gray-100"
                    >
                      +91-9028999253
                    </Link>
                    &nbsp; | &nbsp;
                    <Link
                      href="tel:+91-9373450092"
                      className="text-gray-300 hover:text-gray-100"
                    >
                      +91-9373450092
                    </Link>
                    {/* <p className="text-gray-300">+91-9028999253</p> */}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-amber-500 mt-1" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <Link
                      href="mailto:royaalmede@gmail.com"
                      className="text-gray-300 hover:text-gray-100"
                    >
                      royaalmede@gmail.com
                    </Link>
                    {/* <p className="text-gray-300">info@royaalmede.com</p> */}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-amber-500 mt-1" />
                  <div>
                    <h3 className="font-bold">Business Hours</h3>
                    <p className="text-gray-300">
                      Monday - Saturday: 10:30 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 bg-white p-6 rounded-lg shadow-lg text-gray-800">
                <div className="w-full h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29778.39589881355!2d79.124281!3d21.100623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b90ba7f78311%3A0x4ad00a12382990ac!2sRoyaalmede%20loan%20solutions%20And%20Royaalmede%20Jandhan%20multiurban%20Nidhi%20Ltd!5e0!3m2!1sen!2sin!4v1747995526817!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full rounded-lg shadow-md"
                  />
                </div>

                
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />


      {/* WhatsAppBtn */}
      <WhatsAppBtn />

      
    </div>

    </>
  );
}
