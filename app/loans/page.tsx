"use client";

import { useState } from "react";
import Head from "next/head";

import {
  ArrowLeft,
  Check,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
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
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn/WhatsAppBtn";
import Modal from "@/components/Modal/Modal";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { BASE_URL } from "@/lib/config";
import { toast } from "react-toastify";

const LoansPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    extfield: "", // either "salaried" or "business"
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Api


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(`${BASE_URL}/loan-enquiries`, formData);

      console.log("Submitted data:", formData);

      toast.success("Loan enquiry submitted successfully!");

      setIsModalOpen(false); // Close modal if applicable

      // Reset the form
      setFormData({
        name: "",
        phone: "",
        email: "",
        extfield: "",
      });
    } catch (error) {
      console.error("Failed to submit loan enquiry:", error);
      toast.error("There was a problem submitting your enquiry.");
    }
  };

  return (
    <>
      <Head>
        <title>
          Affordable Loan Solutions in Nagpur – Business, Home, Personal & More
          | Royaalmede
        </title>
        <meta
          name="description"
          content="Explore customized loan solutions in Nagpur with Royaalmede. We offer fast approvals, low interest rates, and flexible repayment options for business, personal, home, and mortgage loans."
        />
        <meta
          name="keywords"
          content="loan solutions Nagpur, business loans Nagpur, personal loans Nagpur, home loans Nagpur, mortgage loans, low interest loans, loan agency Nagpur, Royaalmede loans, fast loan approval, flexible repayment loans"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Affordable Loan Solutions in Nagpur – Royaalmede"
        />
        <meta
          property="og:description"
          content="Get fast and reliable loan solutions tailored to your needs in Nagpur. Business, home, and personal loans available."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/logo.svg" />
        <meta property="og:image" content="/building.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Affordable Loan Solutions in Nagpur – Royaalmede"
        />
        <meta
          name="twitter:description"
          content="Royaalmede offers business, personal, and home loans in Nagpur with fast approval and flexible repayment."
        />
        <meta name="twitter:image" content="/img1.jpg" />
      </Head>

      <div className="flex min-h-screen flex-col font-sans">
        {/* Header */}
        <Header />

        <main className="flex-1">
          {/* Hero Section */}

          <section
            className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-white"
            style={{ backgroundImage: `url('/home.jpg')` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-75"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                Royaalmede Loan Solutions
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-6">
                We offer a variety of loan options to meet your financial needs
                with competitive rates and flexible terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                <Button
                  size="lg"
                  className="gap-1 bg-amber-500 hover:bg-amber-600"
                  onClick={() => setIsModalOpen(true)}
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>

              {/* Back to Home */}
              <Link
                href="/"
                className="inline-flex items-center text-sm text-gray-300 hover:text-amber-500 transition"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </div>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <h2 className="text-2xl font-bold mb-6 text-blue-900 text-center">
                Loan Enquiry Form
              </h2>
              

              <form className="space-y-4 text-blue-900" onSubmit={handleSubmit}>
                <Input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <Input
                  type="tel"
                  placeholder="Mobile No."
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <div className="flex items-center gap-6">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="extfield" // ✅ Match your state
                      value="salaried"
                      checked={formData.extfield === "salaried"}
                      onChange={handleChange}
                      className="form-radio text-blue-900"
                    />
                    <span className="ml-2">Salaried</span>
                  </label>

                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="extfield" // ✅ Match your state
                      value="business"
                      checked={formData.extfield === "business"}
                      onChange={handleChange}
                      className="form-radio text-blue-900"
                    />
                    <span className="ml-2">Business</span>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-900 text-white hover:bg-blue-800"
                >
                  Submit
                </Button>
              </form>
            </Modal>
          </section>

          {/* Loan Types Section */}
          <section className="py-16">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                    Types of Loans
                  </h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Explore our comprehensive range of loan options designed to
                    meet your specific needs.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {[
                  {
                    title: "Business Loan",
                    description:
                      "Fuel your business growth with our flexible and accessible loan solutions.",
                    features: [
                      "Loan Range: From ₹50K – Up to ₹25 Lacs",
                      "CIBIL Score: 650+ or even -1 accepted",
                      "Docs Needed: PAN, Aadhaar, 1-year bank statement (no ITR)",
                      "Property Type: Rented or owned – both accepted",
                      "Coverage: Fast processing, available Pan India",
                    ],
                    icon: "💼",
                    image:
                      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                  },
                  {
                    title: "Personal Loan",
                    description:
                      "Quick personal loans for your immediate financial needs.",
                    features: [
                      "Loan Range: ₹50K – ₹10 Lacs",
                      "CIBIL Score: 650+ or even -1 accepted",
                      "Docs Needed: PAN, Aadhaar, 6-month bank statement (no salary slip or PF required)",
                      "Eligibility: Minimum ₹15K monthly net salary in account",
                      "Coverage: Available Pan India with fast approval",
                    ],
                    icon: "👤",
                    image:
                      "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                  },
                  {
                    title: "Home Loan",
                    description:
                      "Make your dream home a reality with our affordable home loans.",
                    features: [
                      "Business: PAN, Aadhaar, ITR (3 yrs), Gumasta, Bank statement",
                      "Salaried: PAN, Aadhaar, salary slips (3 mo), Bank statement (6 mo)",
                      "Email & mobile required for all applicants",
                      "Optional: GST/FSSAI or other business proof",
                      "Multiple incomes accepted for higher eligibility",
                    ],
                    icon: "🏠",
                    image:
                      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                  },
                  {
                    title: "Mortgage Loan",
                    description:
                      "Secure loans against your property with competitive interest rates.",
                    features: [
                      "Loan against property for business/salaried profiles",
                      "Business: PAN, Aadhaar, ITR 3 yrs, Bank Statement, Gumasta",
                      "Salaried: PAN, Aadhaar, salary slips, Bank Statement",
                      "Mandatory Details: Email & mobile number required",
                      "Higher eligibility via combined family income",
                    ],
                    icon: "📝",
                    image:
                      "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                  },
                ].map((loan, index) => (
                  <Card
                    key={index}
                    className="h-full overflow-hidden border-0 shadow-lg"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={loan.image || "/placeholder.svg"}
                        alt={loan.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <CardHeader>
                      <div className="text-4xl mb-2">{loan.icon}</div>
                      <CardTitle className="text-blue-900">
                        {loan.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {loan.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {loan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="min-w-[20px] pt-1">
                              <Check className="h-5 w-5 text-amber-500" />
                            </div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                          
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                      >
                        {/* <Link href="/loanPdf.pdf">Learn More</Link> */}
                        <a href="/loanPdf.pdf" download>
                          Learn More
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Loan Cycle Section */}
          <section className="py-16 bg-gray-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                    Loan Cycle
                  </h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our streamlined loan process ensures quick and hassle-free
                    approval.
                  </p>
                </div>
              </div>
              <div className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      step: "Provide your basic information & KYC Documents",
                      description:
                        "Fill out our simple application form with your details and required documents.",
                      icon: "📝",
                    },
                    {
                      step: "Provide Income Documents & Bank Account Statement",
                      description:
                        "Our team verifies your documents and checks your eligibility for the loan.",
                      icon: "📄",
                    },
                    {
                      step: "Accept Loan Terms",
                      description:
                        "Once verified, your loan is approved within 48 hours.",
                      icon: "✅",
                    },
                    {
                      step: "Execution of Loan Agreement",
                      description:
                        "Digitally sign the agreement to proceed with your loan disbursement.",
                      icon: "🖋️",
                    },
                    {
                      step: "Disbursement into your Bank Account",
                      description:
                        "The approved loan amount is credited directly to your bank account.",
                      icon: "💰",
                    },
                    {
                      step: "Pay EMI through Auto Debit",
                      description:
                        "Your EMIs will be deducted automatically each month from your account.",
                      icon: "🏦",
                    },
                  ].map((step, index) => (
                    <div key={index} className="relative">
                      <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                        <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center mb-4 text-xl">
                          {index + 1}
                        </div>
                      
                        <div className="text-3xl mb-4">{step.icon}</div>
                        <h3 className="text-xl font-bold mb-2 text-blue-900">
                          {step.step}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                      {index < 5 && (
                        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-2 bg-amber-500"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center mt-8 space-y-4">
                <p>Download PDF For Review Document</p>

                <Button
                  className="w-56 text-center bg-blue-900 hover:bg-blue-800"
                  asChild
                >
                  {/* <Link href="/loanPdf.pdf">Download</Link> */}
                  <a href="/loanPdf.pdf" download>
                    Download
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Documents Required Section */}
          <section className="py-16">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                    Documents Required
                  </h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Prepare these documents to ensure a smooth loan application
                    process.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <Card className="border-0 shadow-lg overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      alt="Individual Documents"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-900">
                      For Individuals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                        <span className="text-gray-600">
                          Identity Proof (Aadhar Card, PAN Card, Voter ID)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                        <span className="text-gray-600">
                          Address Proof (Utility Bills, Passport)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                        <span className="text-gray-600">
                          Income Proof (Salary Slips, IT Returns)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                        <span className="text-gray-600">
                          Bank Statements (Last 6 months)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                        <span className="text-gray-600">
                          Passport-sized Photographs
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      alt="Business Documents"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-900">
                      For Businesses
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                        <span className="text-gray-600">
                          Business Registration Documents
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                        <span className="text-gray-600">
                          GST Registration Certificate
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                        <span className="text-gray-600">
                          Business Financial Statements (Last 2 years)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                        <span className="text-gray-600">
                          Business Bank Statements (Last 12 months)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                        <span className="text-gray-600">
                          KYC Documents of Directors/Partners
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r bg-blue-900 text-white">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Get Started?
                  </h2>
                  <p className="max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Apply for a loan today and take the first step towards
                    achieving your financial goals.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button
                      size="lg"
                      className="gap-1 bg-amber-500 hover:bg-amber-600"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Apply Now
                      <ArrowRight className="h-4 w-4" />
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="gap-1 border-white text-black hover:bg-white/10 hover:text-white"
                    >
                      <Link href="/#contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Apply for Loan"
                    className="rounded-lg object-cover shadow-lg"
                    width={500}
                    height={300}
                  />
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
};

export default LoansPage;
