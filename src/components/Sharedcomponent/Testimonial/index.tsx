"use client";
import { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FiUpload,
  FiCheck,
  FiChevronDown,
  FiLoader,
  FiSend,
} from "react-icons/fi";
import { FaGraduationCap, FaGlobe, FaUserGraduate } from "react-icons/fa";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    city: "",
    zipCode: "",
    email: "",
    phone: "",
    hearAboutUs: "",
    admissionIntake: "",
    interestedProgram: "",
  });

  const [activeSection, setActiveSection] = useState(0);
  const [fileUploads, setFileUploads] = useState({
    academicFile: { file: null, name: "", uploading: false, uploaded: false },
    experienceFile: { file: null, name: "", uploading: false, uploaded: false },
    cvFile: { file: null, name: "", uploading: false, uploaded: false },
    licenseFile: { file: null, name: "", uploading: false, uploaded: false },
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const sections = [
    "Personal Information",
    "Contact Details",
    "Program Selection",
    "Documents",
    "Review & Submit",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (
    field: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileUploads((prev) => ({
        ...prev,
        [field]: {
          ...prev[field as keyof typeof fileUploads],
          file,
          name: file.name,
          uploading: true,
          uploaded: false,
        },
      }));

      // Simulate upload
      setTimeout(() => {
        setFileUploads((prev) => ({
          ...prev,
          [field]: {
            ...prev[field as keyof typeof fileUploads],
            uploading: false,
            uploaded: true,
          },
        }));
      }, 1500);
    }
  };

  const nextSection = async () => {
    await controls.start({
      x: 100,
      opacity: 0,
      transition: { duration: 0.3 },
    });
    setActiveSection((prev) => Math.min(prev + 1, sections.length - 1));
    await controls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    });

    if (formRef.current) {
      formRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevSection = async () => {
    await controls.start({
      x: -100,
      opacity: 0,
      transition: { duration: 0.3 },
    });
    setActiveSection((prev) => Math.max(prev - 1, 0));
    await controls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    });

    if (formRef.current) {
      formRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#420516] to-[#6A0D1B] p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1a1a2e] rounded-3xl shadow-2xl overflow-hidden max-w-md w-full border border-[#FF9A9E]/30"
        >
          <div className="bg-gradient-to-r from-[#6A0D1B] to-[#420516] p-8 text-center">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FiCheck className="mx-auto text-white text-6xl" />
            </motion.div>
            <h2 className="mt-6 text-3xl font-bold text-white">
              Application Submitted!
            </h2>
          </div>
          <div className="p-8 text-center">
            <p className="text-gray-300 mb-6">
              Thank you for your application. We've received your information
              and will contact you within 3-5 business days.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-[#6A0D1B] to-[#420516] text-white rounded-full font-medium shadow-lg hover:shadow-[#FF9A9E]/30"
            >
              Back to Home
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#420516] to-[#6A0D1B] py-12 px-4 sm:px-6 lg:px-8">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#FF9A9E] rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#6A0D1B] rounded-full filter blur-[120px] opacity-15"></div>

        {/* Stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.5,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1a1a2e] rounded-3xl shadow-2xl overflow-hidden border border-[#FF9A9E]/30"
        >
          {/* Progress Steps */}
          <div className="bg-gradient-to-r from-[#6A0D1B] to-[#420516] px-8 py-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                <FaUserGraduate className="text-xl" />
                Apply Now
              </h1>
              <div className="text-white font-medium">
                Step {activeSection + 1} of {sections.length}
              </div>
            </div>

            <div className="flex justify-between relative">
              {sections.map((section, index) => (
                <div key={index} className="flex flex-col items-center z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setActiveSection(index)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all ${
                      index <= activeSection
                        ? "bg-white text-[#6A0D1B]"
                        : "bg-[#420516] text-white"
                    }`}
                  >
                    {index + 1}
                  </motion.div>
                  <div
                    className={`text-xs mt-2 text-center ${
                      index <= activeSection
                        ? "text-white font-medium"
                        : "text-[#FF9A9E]"
                    }`}
                  >
                    {section.split(" ")[0]}
                  </div>
                </div>
              ))}
              <div className="absolute h-1 bg-[#420516] top-5 left-5 right-5 -z-0">
                <motion.div
                  className="h-full bg-white"
                  initial={{ width: "0%" }}
                  animate={{
                    width: `${(activeSection / (sections.length - 1)) * 100}%`,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>

          {/* Form Body */}
          <div className="p-8" ref={formRef}>
            <form onSubmit={handleSubmit}>
              <motion.div
                key={activeSection}
                animate={controls}
                className="space-y-8"
              >
                {/* Section 1: Personal Information */}
                {activeSection === 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        First name <span className="text-[#FF9A9E]">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#16213e] border border-[#1f2a4a] rounded-xl focus:ring-2 focus:ring-[#FF9A9E] focus:border-[#FF9A9E] text-white transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Last name <span className="text-[#FF9A9E]">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#16213e] border border-[#1f2a4a] rounded-xl focus:ring-2 focus:ring-[#FF9A9E] focus:border-[#FF9A9E] text-white transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="md:col-span-2"
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Address <span className="text-[#FF9A9E]">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#16213e] border border-[#1f2a4a] rounded-xl focus:ring-2 focus:ring-[#FF9A9E] focus:border-[#FF9A9E] text-white transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Country <span className="text-[#FF9A9E]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#16213e] border border-[#1f2a4a] rounded-xl appearance-none focus:ring-2 focus:ring-[#FF9A9E] focus:border-[#FF9A9E] text-white transition-all duration-300"
                        >
                          <option value="" className="bg-[#16213e]">
                            Select country
                          </option>
                          <option value="US" className="bg-[#16213e]">
                            United States
                          </option>
                          <option value="CA" className="bg-[#16213e]">
                            Canada
                          </option>
                          <option value="UK" className="bg-[#16213e]">
                            United Kingdom
                          </option>
                          <option value="AU" className="bg-[#16213e]">
                            Australia
                          </option>
                        </select>
                        <FiChevronDown className="absolute right-3 top-4 text-gray-400" />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        City <span className="text-[#FF9A9E]">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#16213e] border border-[#1f2a4a] rounded-xl focus:ring-2 focus:ring-[#FF9A9E] focus:border-[#FF9A9E] text-white transition-all duration-300"
                      />
                    </motion.div>
                  </div>
                )}

                {/* Section 2: Contact Details */}
                {activeSection === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Zip / Postal code{" "}
                        <span className="text-[#FF9A9E]">*</span>
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        required
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#16213e] border border-[#1f2a4a] rounded-xl focus:ring-2 focus:ring-[#FF9A9E] focus:border-[#FF9A9E] text-white transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Email <span className="text-[#FF9A9E]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#16213e] border border-[#1f2a4a] rounded-xl focus:ring-2 focus:ring-[#FF9A9E] focus:border-[#FF9A9E] text-white transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Phone <span className="text-[#FF9A9E]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#16213e] border border-[#1f2a4a] rounded-xl focus:ring-2 focus:ring-[#FF9A9E] focus:border-[#FF9A9E] text-white transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        How did you hear about us?{" "}
                        <span className="text-[#FF9A9E]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="hearAboutUs"
                          required
                          value={formData.hearAboutUs}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#16213e] border border-[#1f2a4a] rounded-xl appearance-none focus:ring-2 focus:ring-[#FF9A9E] focus:border-[#FF9A9E] text-white transition-all duration-300"
                        >
                          <option value="" className="bg-[#16213e]">
                            Select an option
                          </option>
                          <option value="social-media" className="bg-[#16213e]">
                            Social Media
                          </option>
                          <option value="friend" className="bg-[#16213e]">
                            Friend/Family
                          </option>
                          <option
                            value="search-engine"
                            className="bg-[#16213e]"
                          >
                            Search Engine
                          </option>
                          <option
                            value="advertisement"
                            className="bg-[#16213e]"
                          >
                            Advertisement
                          </option>
                          <option value="other" className="bg-[#16213e]">
                            Other
                          </option>
                        </select>
                        <FiChevronDown className="absolute right-3 top-4 text-gray-400" />
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* Section 3: Program Selection */}
                {activeSection === 2 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="md:col-span-2"
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Interested Program{" "}
                        <span className="text-[#FF9A9E]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="interestedProgram"
                          required
                          value={formData.interestedProgram}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#16213e] border border-[#1f2a4a] rounded-xl appearance-none focus:ring-2 focus:ring-[#FF9A9E] focus:border-[#FF9A9E] text-white transition-all duration-300"
                        >
                          <option value="" className="bg-[#16213e]">
                            Select program
                          </option>
                          <option
                            value="computer-science"
                            className="bg-[#16213e]"
                          >
                            Computer Science
                          </option>
                          <option
                            value="business-administration"
                            className="bg-[#16213e]"
                          >
                            Business Administration
                          </option>
                          <option
                            value="healthcare-management"
                            className="bg-[#16213e]"
                          >
                            Healthcare Management
                          </option>
                          <option value="engineering" className="bg-[#16213e]">
                            Engineering
                          </option>
                        </select>
                        <FiChevronDown className="absolute right-3 top-4 text-gray-400" />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Admission Intake{" "}
                        <span className="text-[#FF9A9E]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="admissionIntake"
                          required
                          value={formData.admissionIntake}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#16213e] border border-[#1f2a4a] rounded-xl appearance-none focus:ring-2 focus:ring-[#FF9A9E] focus:border-[#FF9A9E] text-white transition-all duration-300"
                        >
                          <option value="" className="bg-[#16213e]">
                            Select intake
                          </option>
                          <option value="fall-2023" className="bg-[#16213e]">
                            Fall 2023
                          </option>
                          <option value="spring-2024" className="bg-[#16213e]">
                            Spring 2024
                          </option>
                          <option value="summer-2024" className="bg-[#16213e]">
                            Summer 2024
                          </option>
                          <option value="fall-2024" className="bg-[#16213e]">
                            Fall 2024
                          </option>
                        </select>
                        <FiChevronDown className="absolute right-3 top-4 text-gray-400" />
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* Section 4: Documents */}
                {activeSection === 3 && (
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Academic Transcripts{" "}
                        <span className="text-[#FF9A9E]">*</span>
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[#1f2a4a] rounded-xl cursor-pointer hover:border-[#FF9A9E] transition-all duration-300 bg-[#16213e]/50">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            {fileUploads.academicFile.uploaded ? (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="text-green-500 flex items-center"
                              >
                                <FiCheck className="mr-2" />
                                <span>{fileUploads.academicFile.name}</span>
                              </motion.div>
                            ) : fileUploads.academicFile.uploading ? (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1 }}
                                className="text-[#FF9A9E]"
                              >
                                <FiLoader />
                              </motion.div>
                            ) : (
                              <>
                                <FiUpload className="text-gray-400 text-2xl mb-2" />
                                <p className="text-sm text-gray-400">
                                  <span className="font-semibold">
                                    Click to upload
                                  </span>{" "}
                                  or drag and drop
                                </p>
                                <p className="text-xs text-gray-500">
                                  PDF, DOCX up to 10MB
                                </p>
                              </>
                            )}
                          </div>
                          <input
                            type="file"
                            className="hidden"
                            onChange={(e) =>
                              handleFileChange("academicFile", e)
                            }
                            required
                          />
                        </label>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        CV/Resume <span className="text-[#FF9A9E]">*</span>
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[#1f2a4a] rounded-xl cursor-pointer hover:border-[#FF9A9E] transition-all duration-300 bg-[#16213e]/50">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            {fileUploads.cvFile.uploaded ? (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="text-green-500 flex items-center"
                              >
                                <FiCheck className="mr-2" />
                                <span>{fileUploads.cvFile.name}</span>
                              </motion.div>
                            ) : fileUploads.cvFile.uploading ? (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1 }}
                                className="text-[#FF9A9E]"
                              >
                                <FiLoader />
                              </motion.div>
                            ) : (
                              <>
                                <FiUpload className="text-gray-400 text-2xl mb-2" />
                                <p className="text-sm text-gray-400">
                                  <span className="font-semibold">
                                    Click to upload
                                  </span>{" "}
                                  or drag and drop
                                </p>
                                <p className="text-xs text-gray-500">
                                  PDF, DOCX up to 10MB
                                </p>
                              </>
                            )}
                          </div>
                          <input
                            type="file"
                            className="hidden"
                            onChange={(e) => handleFileChange("cvFile", e)}
                            required
                          />
                        </label>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Experience Certificates (Optional)
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[#1f2a4a] rounded-xl cursor-pointer hover:border-[#FF9A9E] transition-all duration-300 bg-[#16213e]/50">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            {fileUploads.experienceFile.uploaded ? (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="text-green-500 flex items-center"
                              >
                                <FiCheck className="mr-2" />
                                <span>{fileUploads.experienceFile.name}</span>
                              </motion.div>
                            ) : fileUploads.experienceFile.uploading ? (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1 }}
                                className="text-[#FF9A9E]"
                              >
                                <FiLoader />
                              </motion.div>
                            ) : (
                              <>
                                <FiUpload className="text-gray-400 text-2xl mb-2" />
                                <p className="text-sm text-gray-400">
                                  <span className="font-semibold">
                                    Click to upload
                                  </span>{" "}
                                  or drag and drop
                                </p>
                                <p className="text-xs text-gray-500">
                                  PDF, DOCX up to 10MB
                                </p>
                              </>
                            )}
                          </div>
                          <input
                            type="file"
                            className="hidden"
                            onChange={(e) =>
                              handleFileChange("experienceFile", e)
                            }
                          />
                        </label>
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* Section 5: Review & Submit */}
                {activeSection === 4 && (
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="bg-[#16213e] p-6 rounded-xl border border-[#1f2a4a]"
                    >
                      <h3 className="text-lg font-medium text-white mb-4">
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-400">First Name</p>
                          <p className="font-medium text-white">
                            {formData.firstName || "Not provided"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Last Name</p>
                          <p className="font-medium text-white">
                            {formData.lastName || "Not provided"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Address</p>
                          <p className="font-medium text-white">
                            {formData.address || "Not provided"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Country</p>
                          <p className="font-medium text-white">
                            {formData.country || "Not provided"}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-[#16213e] p-6 rounded-xl border border-[#1f2a4a]"
                    >
                      <h3 className="text-lg font-medium text-white mb-4">
                        Contact Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-400">Email</p>
                          <p className="font-medium text-white">
                            {formData.email || "Not provided"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Phone</p>
                          <p className="font-medium text-white">
                            {formData.phone || "Not provided"}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-[#16213e] p-6 rounded-xl border border-[#1f2a4a]"
                    >
                      <h3 className="text-lg font-medium text-white mb-4">
                        Program Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-400">Program</p>
                          <p className="font-medium text-white">
                            {formData.interestedProgram || "Not provided"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Intake</p>
                          <p className="font-medium text-white">
                            {formData.admissionIntake || "Not provided"}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-[#16213e] p-6 rounded-xl border border-[#1f2a4a]"
                    >
                      <h3 className="text-lg font-medium text-white mb-4">
                        Documents
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <FiCheck className="text-green-500 mr-2" />
                          <span className="text-white">
                            Academic Transcripts:{" "}
                            {fileUploads.academicFile.name || "Not uploaded"}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <FiCheck className="text-green-500 mr-2" />
                          <span className="text-white">
                            CV/Resume:{" "}
                            {fileUploads.cvFile.name || "Not uploaded"}
                          </span>
                        </div>
                        {fileUploads.experienceFile.name && (
                          <div className="flex items-center">
                            <FiCheck className="text-green-500 mr-2" />
                            <span className="text-white">
                              Experience Certificates:{" "}
                              {fileUploads.experienceFile.name}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="pt-4"
                    >
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="privacy"
                            name="privacy"
                            type="checkbox"
                            required
                            className="focus:ring-[#FF9A9E] h-4 w-4 text-[#FF9A9E] border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="privacy"
                            className="font-medium text-gray-300"
                          >
                            I agree to the privacy policy
                          </label>
                          <p className="text-gray-400">
                            We'll never share your information with anyone else.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>

              <div className="mt-8 flex justify-between">
                {activeSection > 0 ? (
                  <motion.button
                    type="button"
                    onClick={prevSection}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-[#1f2a4a] text-gray-300 rounded-xl font-medium hover:bg-[#2a3a5f] transition-colors"
                  >
                    Back
                  </motion.button>
                ) : (
                  <div></div>
                )}

                {activeSection < sections.length - 1 ? (
                  <motion.button
                    type="button"
                    onClick={nextSection}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-[#6A0D1B] to-[#420516] text-white rounded-xl font-medium shadow-lg ml-auto hover:shadow-xl hover:from-[#420516] hover:to-[#6A0D1B] transition-all duration-300"
                  >
                    Continue
                  </motion.button>
                ) : (
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-[#6A0D1B] to-[#420516] text-white rounded-xl font-medium shadow-lg ml-auto hover:shadow-xl hover:from-[#420516] hover:to-[#6A0D1B] transition-all duration-300 flex items-center gap-2"
                  >
                    <FiSend />
                    Submit Application
                  </motion.button>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#6A0D1B] rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#420516] rounded-full filter blur-[120px] opacity-15"></div>

        {/* Stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.5,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`,
            }}
          ></div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0% {
            opacity: 0.2;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
