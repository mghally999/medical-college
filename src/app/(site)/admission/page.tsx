"use client";

import React from "react";

// ✅ Admissions Sections (importing directly from app/admission subpages)
import ApplicationProcess from "./application-process/page";
import AdmissionProcedure from "./admission-procedure/page";
import ScholarshipOpportunities from "./scholarship-opportunities/page";

export default function AdmissionsPage() {
  return (
    <main className="text-black bg-white overflow-x-hidden">
      {/* Section: Application Process */}
      <ApplicationProcess />

      {/* Section: Admission Procedure */}
      <AdmissionProcedure />

      {/* Section: Scholarship Opportunities */}
      <ScholarshipOpportunities />
    </main>
  );
}
