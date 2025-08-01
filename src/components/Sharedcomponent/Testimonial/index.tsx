"use client";
import { useState } from "react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-black px-6 py-8 text-center">
            <h1 className="text-3xl font-bold text-white">Apply Now</h1>
            <p className="mt-2 text-indigo-100">
              Please fill out all required fields
            </p>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="px-6 py-8 space-y-6">
            {/* Personal Information Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Country/Region <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="zipCode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Zip / Postal code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    required
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                Additional Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Academic File */}
              <div>
                <label
                  htmlFor="hearAboutUs"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  How did you hear about us?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="hearAboutUs"
                  name="hearAboutUs"
                  required
                  value={formData.hearAboutUs}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                  <option value="">Select an option</option>
                  <option value="social-media">Social Media</option>
                  <option value="friend">Friend/Family</option>
                  <option value="search-engine">Search Engine</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Experience File */}
              <div>
                <label
                  htmlFor="admissionIntake"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Admission Intake <span className="text-red-500">*</span>
                </label>
                <select
                  id="admissionIntake"
                  name="admissionIntake"
                  required
                  value={formData.admissionIntake}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                  <option value="">Select intake</option>
                  <option value="fall-2023">Fall 2023</option>
                  <option value="spring-2024">Spring 2024</option>
                  <option value="summer-2024">Summer 2024</option>
                  <option value="fall-2024">Fall 2024</option>
                </select>
              </div>

              {/* Latest CV */}
              <div>
                <label
                  htmlFor="interestedProgram"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Interested Program <span className="text-red-500">*</span>
                </label>
                <select
                  id="interestedProgram"
                  name="interestedProgram"
                  required
                  value={formData.interestedProgram}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                  <option value="">Select program</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="business-administration">
                    Business Administration
                  </option>
                  <option value="healthcare-management">
                    Healthcare Management
                  </option>
                  <option value="engineering">Engineering</option>
                </select>
              </div>
            </div>

            {/* Documents Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                Required Documents
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Academic File */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Academic File <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 flex items-center">
                    <label className="cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Choose File
                      <input type="file" className="sr-only" required />
                    </label>
                    <span className="ml-2 text-sm text-gray-500">
                      No file chosen
                    </span>
                  </div>
                </div>

                {/* Experience File */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Experience File
                  </label>
                  <div className="mt-1 flex items-center">
                    <label className="cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Choose File
                      <input type="file" className="sr-only" />
                    </label>
                    <span className="ml-2 text-sm text-gray-500">
                      No file chosen
                    </span>
                  </div>
                </div>

                {/* Latest CV */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Latest CV <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 flex items-center">
                    <label className="cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Choose File
                      <input type="file" className="sr-only" required />
                    </label>
                    <span className="ml-2 text-sm text-gray-500">
                      No file chosen
                    </span>
                  </div>
                </div>

                {/* Healthcare License */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Healthcare License (Healthcare Students Only)
                  </label>
                  <div className="mt-1 flex items-center">
                    <label className="cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Choose File
                      <input type="file" className="sr-only" />
                    </label>
                    <span className="ml-2 text-sm text-gray-500">
                      No file chosen
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy and Submit */}
            <div className="pt-6">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
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

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
