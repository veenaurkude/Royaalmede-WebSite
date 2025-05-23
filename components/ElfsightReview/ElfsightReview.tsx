"use client";

import React, { useEffect } from "react";

const ElfsightReview = () => {
  useEffect(() => {
    // Add the Elfsight script if it isn't already present
    if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Optional: inject CSS to hide Elfsight toolbar
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      .eapps-widget-toolbar {
        display: none !important;
        visibility: hidden !important;
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      if (styleTag.parentNode) {
        styleTag.parentNode.removeChild(styleTag);
      }
    };
  }, []);

  return (
    <div className="mx-auto p-6 ">
      {/* <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Testimonials</h1> */}
      <div
        className="elfsight-app-6f2985e9-2b18-48cb-bb8e-a70e451f3de5"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default ElfsightReview;
