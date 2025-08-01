"use client";
import { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FiUpload, FiCheck, FiChevronDown, FiLoader } from "react-icons/fi";

type FileUpload = {
  file: File | null;
  name: string;
  uploading: boolean;
  uploaded: boolean;
};

type FormData = {
  firstName: string;
  lastName: string;
  address: string;
  country: string;
  city: string;
  zipCode: string;
  email: string;
  phone: string;
  hearAboutUs: string;
  admissionIntake: string;
  interestedProgram: string;
};

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
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
    field: keyof typeof fileUploads,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileUploads((prev) => ({
        ...prev,
        [field]: {
          ...prev[field],
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
            ...prev[field],
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md w-full"
        >
          <div className="bg-black p-8 text-center">
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
            <p className="text-gray-600 mb-6">
              Thank you for your application. We've received your information
              and will contact you within 3-5 business days.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-medium shadow-lg"
            >
              Back to Home
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Progress Steps */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white">
                University Application
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
                        ? "bg-white text-purple-600"
                        : "bg-indigo-400 text-white"
                    }`}
                  >
                    {index + 1}
                  </motion.div>
                  <div
                    className={`text-xs mt-2 text-center ${
                      index <= activeSection
                        ? "text-white font-medium"
                        : "text-indigo-200"
                    }`}
                  >
                    {section.split(" ")[0]}
                  </div>
                </div>
              ))}
              <div className="absolute h-1 bg-indigo-400 top-5 left-5 right-5 -z-0">
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
                initial={{ x: activeSection > 0 ? 100 : -100, opacity: 0 }}
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="md:col-span-2"
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl appearance-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                        >
                          <option value="">Select country</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="UK">United Kingdom</option>
                          <option value="AU">Australia</option>
                        </select>
                        <FiChevronDown className="absolute right-3 top-4 text-gray-400" />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Zip / Postal code{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        required
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        How did you hear about us?{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="hearAboutUs"
                          required
                          value={formData.hearAboutUs}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl appearance-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                        >
                          <option value="">Select an option</option>
                          <option value="social-media">Social Media</option>
                          <option value="friend">Friend/Family</option>
                          <option value="search-engine">Search Engine</option>
                          <option value="advertisement">Advertisement</option>
                          <option value="other">Other</option>
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Interested Program{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="interestedProgram"
                          required
                          value={formData.interestedProgram}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl appearance-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                        >
                          <option value="">Select program</option>
                          <option value="computer-science">
                            Computer Science
                          </option>
                          <option value="business-administration">
                            Business Administration
                          </option>
                          <option value="healthcare-management">
                            Healthcare Management
                          </option>
                          <option value="engineering">Engineering</option>
                        </select>
                        <FiChevronDown className="absolute right-3 top-4 text-gray-400" />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Admission Intake <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="admissionIntake"
                          required
                          value={formData.admissionIntake}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl appearance-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                        >
                          <option value="">Select intake</option>
                          <option value="fall-2023">Fall 2023</option>
                          <option value="spring-2024">Spring 2024</option>
                          <option value="summer-2024">Summer 2024</option>
                          <option value="fall-2024">Fall 2024</option>
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
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Academic Transcripts{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-purple-500 transition-all duration-300">
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
                                className="text-purple-500"
                              >
                                <FiLoader />
                              </motion.div>
                            ) : (
                              <>
                                <FiUpload className="text-gray-400 text-2xl mb-2" />
                                <p className="text-sm text-gray-500">
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
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        CV/Resume <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-purple-500 transition-all duration-300">
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
                                className="text-purple-500"
                              >
                                <FiLoader />
                              </motion.div>
                            ) : (
                              <>
                                <FiUpload className="text-gray-400 text-2xl mb-2" />
                                <p className="text-sm text-gray-500">
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
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Experience Certificates (Optional)
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-purple-500 transition-all duration-300">
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
                                className="text-purple-500"
                              >
                                <FiLoader />
                              </motion.div>
                            ) : (
                              <>
                                <FiUpload className="text-gray-400 text-2xl mb-2" />
                                <p className="text-sm text-gray-500">
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
                      className="bg-gray-50 p-6 rounded-xl"
                    >
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">First Name</p>
                          <p className="font-medium">
                            {formData.firstName || "Not provided"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Last Name</p>
                          <p className="font-medium">
                            {formData.lastName || "Not provided"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Address</p>
                          <p className="font-medium">
                            {formData.address || "Not provided"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Country</p>
                          <p className="font-medium">
                            {formData.country || "Not provided"}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-gray-50 p-6 rounded-xl"
                    >
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Contact Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-medium">
                            {formData.email || "Not provided"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="font-medium">
                            {formData.phone || "Not provided"}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-gray-50 p-6 rounded-xl"
                    >
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Program Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Program</p>
                          <p className="font-medium">
                            {formData.interestedProgram || "Not provided"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Intake</p>
                          <p className="font-medium">
                            {formData.admissionIntake || "Not provided"}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-gray-50 p-6 rounded-xl"
                    >
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Documents
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <FiCheck className="text-green-500 mr-2" />
                          <span>
                            Academic Transcripts:{" "}
                            {fileUploads.academicFile.name || "Not uploaded"}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <FiCheck className="text-green-500 mr-2" />
                          <span>
                            CV/Resume:{" "}
                            {fileUploads.cvFile.name || "Not uploaded"}
                          </span>
                        </div>
                        {fileUploads.experienceFile.name && (
                          <div className="flex items-center">
                            <FiCheck className="text-green-500 mr-2" />
                            <span>
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
                            className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="privacy"
                            className="font-medium text-gray-700"
                          >
                            I agree to the privacy policy
                          </label>
                          <p className="text-gray-500">
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
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-medium"
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
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium shadow-lg ml-auto"
                  >
                    Continue
                  </motion.button>
                ) : (
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-medium shadow-lg ml-auto"
                  >
                    Submit Application
                  </motion.button>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
