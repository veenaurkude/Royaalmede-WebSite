"use client";
import Head from "next/head";

import {
  ArrowLeft,
  MapPin,
  Check,
  ArrowRight,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn/WhatsAppBtn";

const InfrastructurePage = () => {
  return (
    <>
      <Head>
        <title>
          Premium Residential & Commercial Properties in Nagpur | Royaalmede
          Infrastructure
        </title>
        <meta
          name="description"
          content="Discover luxury properties in prime Nagpur locations with Royaalmede. Explore well-designed residential and commercial projects like Royaalmede Premium, Rachana City & Royaal Kings."
        />
        <meta
          name="keywords"
          content="properties in Nagpur, residential projects Nagpur, commercial properties Nagpur, Royaalmede infrastructure, Royaalmede Premium, Rachana City Nagpur, Royaal Kings, buy property Nagpur, luxury homes Nagpur, real estate Nagpur"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Premium Properties in Nagpur – Royaalmede Infrastructure"
        />
        <meta
          property="og:description"
          content="Explore premium residential and commercial real estate projects by Royaalmede in Nagpur's prime locations."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://royaalmede.com/infrastructure"
        />
        <meta
          property="og:image"
          content="/building2.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Premium Properties in Nagpur – Royaalmede Infrastructure"
        />
        <meta
          name="twitter:description"
          content="Discover luxurious residential and commercial developments across Nagpur by Royaalmede Infrastructure."
        />
        <meta
          name="twitter:image"
          content="img2.png"
        />
      </Head>

      <div className="flex min-h-screen flex-col">
        {/* Header */}
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section
            className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-white"
            style={{ backgroundImage: "url('/building2.jpg')" }} // Replace with your actual image path
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-75"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                RoyaalMede Infrastructure Projects
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-6">
                Discover our premium residential and commercial properties
                across Nagpur with modern amenities and prime locations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                {/* <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600"
              >
                <Link href="/#properties" className="flex gap-1 text-center" > View Properties <ArrowRight className="h-4 w-4" /></Link>
                
              </Button> */}
                <Button
                  size="lg"
                  // variant="outline"
                  className="bg-amber-500 hover:bg-amber-600"
                >
                  <Link href="https://wa.me/919028999253">Enquire Now</Link>
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
          </section>

          {/* Properties Section */}
          <section className="py-16">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Our Properties
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Explore our range of premium residential and commercial
                    properties in prime locations across Nagpur.
                  </p>
                </div>
              </div>

              <Tabs defaultValue="all" className="mt-12">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="all">All Properties</TabsTrigger>
                  <TabsTrigger value="residential">Residential</TabsTrigger>
                  <TabsTrigger value="commercial">Commercial</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        name: "Royaalmede",
                        address: "1/32, Pipla Fata, Hudkeshwar Road, Nagpur",
                        image: "/img1.jpg",
                        type: "residential",
                        features: [
                          "2 & 3 BHK Apartments",
                          "Swimming Pool",
                          "Gym",
                          "24/7 Security",
                        ],
                      },
                      {
                        name: "Royaalmede Premium",
                        address:
                          "Plot no. 21, Radha Krishna Nagar, Mahalgi Nagar, Nagpur-440025",
                        image: "/img2.png",
                        type: "residential",
                        features: [
                          "3 & 4 BHK Luxury Apartments",
                          "Clubhouse",
                          "Landscaped Gardens",
                          "Smart Home Features",
                        ],
                      },
                      {
                        name: "Rachana City",
                        address: "Flat No 23, Rachana Mithila-2 Pipla, Nagpur",
                        image: "/img5.png",
                        type: "residential",
                        features: [
                          "1, 2 & 3 BHK Apartments",
                          "Children's Play Area",
                          "Community Hall",
                          "Power Backup",
                        ],
                      },
                      {
                        name: "Royaal Krishnum",
                        address: "Plot No 19, Pipla Bus Stop, Nagpur",
                        image: "/img4.png",
                        type: "commercial",
                        features: [
                          "Office Spaces",
                          "Retail Shops",
                          "Ample Parking",
                          "High-Speed Elevators",
                        ],
                      },
                      {
                        name: "Royaal Kings",
                        address: "Besa, Nagpur",
                        image: "/img3.png",
                        type: "commercial",
                        features: [
                          "Commercial Complex",
                          "Food Court",
                          "Conference Rooms",
                          "24/7 Security",
                        ],
                      },
                      {
                        name: "Royaalmede Plaza",
                        address: "Hudkeshwar Road, Nagpur",
                        image: "/img6.png",
                        type: "commercial",
                        features: [
                          "Retail Spaces",
                          "Office Units",
                          "Basement Parking",
                          "Modern Architecture",
                        ],
                      },
                    ].map((property, index) => (
                      <Card key={index} className="overflow-hidden h-full">
                        <img
                          src={property.image || "/placeholder.svg"}
                          alt={property.name}
                          className="w-full h-80 items-center justify-center bg-white"
                        />
                        <CardHeader>
                          <CardTitle>{property.name}</CardTitle>
                          <CardDescription className="flex items-start gap-1">
                            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            {property.address}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <p className="text-sm font-medium">Key Features:</p>
                            <ul className="space-y-1">
                              {property.features.map((feature, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <Check className="h-4 w-4 text-primary mt-0.5" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                        {/* <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </CardFooter> */}
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="residential" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        name: "Royaalmede",
                        address: "1/32, Pipla Fata, Hudkeshwar Road, Nagpur",
                        image: "/img1.jpg",
                        features: [
                          "2 & 3 BHK Apartments",
                          "Swimming Pool",
                          "Gym",
                          "24/7 Security",
                        ],
                      },
                      {
                        name: "Royaalmede Premium",
                        address:
                          "Plot no. 21, Radha Krishna Nagar, Mahalgi Nagar, Nagpur-440025",
                        image: "/img2.png",
                        features: [
                          "3 & 4 BHK Luxury Apartments",
                          "Clubhouse",
                          "Landscaped Gardens",
                          "Smart Home Features",
                        ],
                      },
                      {
                        name: "Rachana City",
                        address: "Flat No 23, Rachana Mithila-2 Pipla, Nagpur",
                        image: "/img5.png",
                        features: [
                          "1, 2 & 3 BHK Apartments",
                          "Children's Play Area",
                          "Community Hall",
                          "Power Backup",
                        ],
                      },
                    ].map((property, index) => (
                      <Card key={index} className="overflow-hidden h-full">
                        <img
                          src={property.image || "/placeholder.svg"}
                          alt={property.name}
                          className="w-full h-80 items-center justify-center bg-white"
                        />
                        <CardHeader>
                          <CardTitle>{property.name}</CardTitle>
                          <CardDescription className="flex items-start gap-1">
                            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            {property.address}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <p className="text-sm font-medium">Key Features:</p>
                            <ul className="space-y-1">
                              {property.features.map((feature, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <Check className="h-4 w-4 text-primary mt-0.5" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                        {/* <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </CardFooter> */}
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="commercial" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        name: "Royaal Krishnum",
                        address: "Plot No 19, Pipla Bus Stop, Nagpur",
                        image: "/img4.png",
                        features: [
                          "Office Spaces",
                          "Retail Shops",
                          "Ample Parking",
                          "High-Speed Elevators",
                        ],
                      },
                      {
                        name: "Royaal Kings",
                        address: "Besa, Nagpur",
                        image: "/img3.png",
                        features: [
                          "Commercial Complex",
                          "Food Court",
                          "Conference Rooms",
                          "24/7 Security",
                        ],
                      },
                      {
                        name: "Royaalmede Plaza",
                        address: "Hudkeshwar Road, Nagpur",
                        image: "/img6.png",
                        features: [
                          "Retail Spaces",
                          "Office Units",
                          "Basement Parking",
                          "Modern Architecture",
                        ],
                      },
                    ].map((property, index) => (
                      <Card key={index} className="overflow-hidden h-full">
                        <img
                          src={property.image || "/placeholder.svg"}
                          alt={property.name}
                          className="w-full h-80 items-center justify-center bg-white"
                        />
                        <CardHeader>
                          <CardTitle>{property.name}</CardTitle>
                          <CardDescription className="flex items-start gap-1">
                            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            {property.address}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <p className="text-sm font-medium">Key Features:</p>
                            <ul className="space-y-1">
                              {property.features.map((feature, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <Check className="h-4 w-4 text-primary mt-0.5" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                        {/* <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </CardFooter> */}
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Amenities Section */}
          <section className="py-16 bg-gray-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Premium Amenities
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our properties come with a range of premium amenities to
                    enhance your living and working experience.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {[
                  {
                    title: "Modern Architecture",
                    description:
                      "Contemporary designs with premium finishes and materials.",
                    icon: "🏢",
                  },
                  {
                    title: "Green Spaces",
                    description:
                      "Landscaped gardens and open areas for recreation.",
                    icon: "🌳",
                  },
                  {
                    title: "Security Systems",
                    description:
                      "24/7 security with CCTV surveillance and access control.",
                    icon: "🔒",
                  },
                  {
                    title: "Fitness Centers",
                    description:
                      "State-of-the-art gyms and fitness facilities.",
                    icon: "💪",
                  },
                  {
                    title: "Community Areas",
                    description:
                      "Spaces for social gatherings and community events.",
                    icon: "👥",
                  },
                  {
                    title: "Parking Facilities",
                    description:
                      "Ample parking space for residents and visitors.",
                    icon: "🚗",
                  },
                  {
                    title: "Power Backup",
                    description:
                      "Uninterrupted power supply with backup generators.",
                    icon: "⚡",
                  },
                  {
                    title: "Water Supply",
                    description:
                      "24/7 water supply with water treatment facilities.",
                    icon: "💧",
                  },
                ].map((amenity, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm"
                  >
                    <div className="text-4xl mb-4">{amenity.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{amenity.title}</h3>
                    <p className="text-gray-500">{amenity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Location Advantages */}
          <section className="py-16">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Location Advantages
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our properties are strategically located to provide easy
                    access to essential facilities and services.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Connectivity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Close proximity to major highways and roads</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Easy access to public transportation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>
                          Well-connected to railway stations and airport
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>
                          Centrally located with easy access to all parts of the
                          city
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Nearby Facilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>
                          Reputed schools and educational institutions
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Hospitals and healthcare centers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Shopping malls and retail outlets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>
                          Restaurants, cafes, and entertainment venues
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary/10">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Find Your Perfect Space?
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Schedule a visit to our properties and experience the
                    premium lifestyle we offer.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button
                      size="lg"
                      className="gap-1 bg-blue-900 hover:bg-blue-800"
                    >
                      Schedule a Visit <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="gap-1">
                      <Link href="/loanPdf.pdf">Download Brochure</Link>
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/img4.png"
                    alt="Schedule a Visit"
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
}

export default InfrastructurePage;
