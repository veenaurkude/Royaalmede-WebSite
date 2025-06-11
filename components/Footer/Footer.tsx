import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaPhoneSquareAlt,
  FaWhatsappSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 text-gray-800 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div>
                {/* <h3 className="text-xl text-amber-500 font-bold">Royaalmede</h3> */}
                <img
                  src="./royaalmede_logo.png"
                  alt="Royaalmede Logo"
                  className="w-[200px]"
                />
                <p className="text-blue-900">
                  Providing premium loan solutions and infrastructure projects
                  in Nagpur.
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Link href="tel:+91-9028999253" aria-label="Call">
                  <FaPhoneSquareAlt className="text-3xl text-amber-500 hover:text-amber-600 transition" />
                </Link>
                <Link href="https://wa.me/919028999253" target="_blank" aria-label="WhatsApp">
                  <FaWhatsappSquare className="text-3xl text-amber-500 hover:text-amber-600  transition" />
                </Link>
                <Link
                  href="https://www.instagram.com/royaalmede_infraa_nagpur/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagramSquare className="text-3xl text-amber-500 hover:text-amber-600 transition" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-amber-500">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-900 hover:text-blue-900">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/loans"
                    className="text-gray-900 hover:text-blue-900"
                  >
                    RoyaalMede Loan Solutions
                  </Link>
                </li>
                
                <li>
                  <Link
                    href="/#testimonials"
                    className="text-gray-900 hover:text-blue-900"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-gray-900 hover:text-blue-900"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/career"
                    className="text-gray-900 hover:text-blue-900"
                  >
                    Career
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-amber-500">
                Properties
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#properties" className="text-gray-900 hover:text-blue-900">
                    Royal Kunj
                  </Link>
                </li>
                <li>
                  <Link href="#properties" className="text-gray-900 hover:text-blue-900">
                    Royaal Krishnum
                  </Link>
                </li>
                <li>
                  <Link href="#properties" className="text-gray-900 hover:text-blue-900">
                  Royaal Platinum
                  </Link>
                </li>
                <li>
                  <Link href="#properties" className="text-gray-900 hover:text-blue-900">
                    Royaal Gold
                  </Link>
                </li>
                <li>
                  <Link href="#properties" className="text-gray-900 hover:text-blue-900">
                    Royaal Meena
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-amber-500">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 min-w-[20px] text-amber-500 mt-1" />
                  <Link href='https://maps.app.goo.gl/UYgL8phznvvZJwBv6' target="_blank" className="text-gray-900 hover:text-blue-900">
                    Plot No. 28, 1st floor, Govind Prabhu Nagar, Rajapeth,
                    Hudkeshwar Road, Nagpur, Maharashtra - 440034.
                  </Link>
                </li>
                <li className="flex items-start gap-2 text-black">
                  <Phone className="h-5 w-5 min-w-[20px] text-amber-500 mt-1" />
                  <Link href='tel:+91-9028999253' className="text-gray-900 hover:text-blue-900">+91-9028999253</Link> |
                  <Link href='tel:+91-9373450092' className="text-gray-900 hover:text-blue-900">+91-9373450092</Link>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-5 w-5 min-w-[20px] text-amber-500 mt-1" />
                  <Link href='mailto:royaalmede@gmail.com' className="text-gray-900 hover:text-blue-900">royaalmede@gmail.com</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-700">
            <p>© {new Date().getFullYear()} <Link href="/" className="text-gray-900 hover:text-blue-900">Royaalmede</Link>. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
