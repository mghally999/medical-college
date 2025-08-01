"use client";

import { useEffect, useState } from "react";
import { getGroupedPrograms } from "@/utils/getGroupedPrograms";

interface Program {
  id: string;
  title: string;
  level?: string;
  credentialTitle?: string;
  professional?: boolean;
}

interface GroupedPrograms {
  professionalPrograms: Program[];
  regularPrograms: Program[];
}

interface FormData {
  firstName: string;
  lastName: string;
  address: string;
  country: string;
  city: string;
  postalCode: string;
  email: string;
  phone: string;
  referralSource: string;
  intake: string;
  course: string;
  academicFile: File | null;
  experienceFile: File | null;
  cvFile: File | null;
  healthcareLicense: File | null;
}

interface FileNames {
  academicFile: string;
  experienceFile: string;
  cvFile: string;
  healthcareLicense: string;
}

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  // ... rest of the countries
  "Zambia",
  "Zimbabwe",
];

interface ApplicationFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplicationFormModal({
  isOpen,
  onClose,
}: ApplicationFormModalProps) {
  const [programList, setProgramList] = useState<GroupedPrograms>({
    professionalPrograms: [],
    regularPrograms: [],
  });

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    city: "",
    postalCode: "",
    email: "",
    phone: "",
    referralSource: "",
    intake: "",
    course: "",
    academicFile: null,
    experienceFile: null,
    cvFile: null,
    healthcareLicense: null,
  });

  const [fileNames, setFileNames] = useState<FileNames>({
    academicFile: "",
    experienceFile: "",
    cvFile: "",
    healthcareLicense: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
      setProgramList(getGroupedPrograms());
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
      setFileNames((prev) => ({
        ...prev,
        [name]: files[0].name,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();

      // Append all form fields
      Object.keys(formData).forEach((key) => {
        const value = formData[key as keyof FormData];
        if (value !== null && value !== "") {
          if (key.endsWith("File") || key === "healthcareLicense") {
            // Handle files
            if (value instanceof File) {
              formDataToSend.append(key, value);
            }
          } else {
            // Handle regular fields
            formDataToSend.append(key, value as string);
          }
        }
      });

      const res = await fetch("/api/application-email", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Application submitted successfully!");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          address: "",
          country: "",
          city: "",
          postalCode: "",
          email: "",
          phone: "",
          referralSource: "",
          intake: "",
          course: "",
          academicFile: null,
          experienceFile: null,
          cvFile: null,
          healthcareLicense: null,
        });
        setFileNames({
          academicFile: "",
          experienceFile: "",
          cvFile: "",
          healthcareLicense: "",
        });
        setTimeout(() => {
          setStatus("");
          onClose();
        }, 3000);
      } else {
        setStatus(`❌ Error: ${data.message || "Submission failed"}`);
      }
    } catch (err) {
      setStatus(
        `❌ Request failed: ${
          err instanceof Error ? err.message : "Network error"
        }`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const { professionalPrograms, regularPrograms } = programList;

  const getLabel = (program: Program) =>
    program.credentialTitle || `${program.title} - ${program.level}`;

  return (
    <div className="modal-overlay">
      <div className="modal-background" onClick={onClose} />
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <h2 className="modal-title">Application Form</h2>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            {/* Personal Information Fields */}
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First name *"
                required
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last name *"
                required
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <textarea
                name="address"
                placeholder="Address *"
                required
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                rows={3}
                className="non-resizable"
              />
            </div>

            <div className="form-group">
              <select
                name="country"
                required
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              >
                <option value="">Country/Region *</option>
                {COUNTRIES.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="city"
                placeholder="City *"
                required
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="postalCode"
                placeholder="Zip / Postal code *"
                required
                value={formData.postalCode}
                onChange={(e) =>
                  setFormData({ ...formData, postalCode: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <select
                name="referralSource"
                required
                value={formData.referralSource}
                onChange={(e) =>
                  setFormData({ ...formData, referralSource: e.target.value })
                }
              >
                <option value="">How did you hear about us? *</option>
                <option value="Friends">Friends</option>
                <option value="Social Media">Social Media</option>
                <option value="Google Search">Google Search</option>
                <option value="Advertisement">Advertisement</option>
                <option value="Event">Event</option>
                <option value="Website">Website</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <select
                name="intake"
                required
                value={formData.intake}
                onChange={(e) =>
                  setFormData({ ...formData, intake: e.target.value })
                }
              >
                <option value="">Admission Intake *</option>
                <option value="July 2025">July 2025</option>
                <option value="September 2025">September 2025</option>
                <option value="January 2026">January 2026</option>
                <option value="April 2026">April 2026</option>
              </select>
            </div>

            <div className="form-group">
              <select
                name="course"
                required
                value={formData.course}
                onChange={(e) =>
                  setFormData({ ...formData, course: e.target.value })
                }
              >
                <option value="">Interested Program *</option>
                {regularPrograms.length > 0 && (
                  <optgroup label="University Progression">
                    {regularPrograms.map((program) => (
                      <option key={program.id} value={getLabel(program)}>
                        {getLabel(program)}
                      </option>
                    ))}
                  </optgroup>
                )}
                {professionalPrograms.length > 0 && (
                  <optgroup label="Professional Courses">
                    {professionalPrograms.map((program) => (
                      <option key={program.id} value={getLabel(program)}>
                        {getLabel(program)}
                      </option>
                    ))}
                  </optgroup>
                )}
              </select>
            </div>
          </div>

          {/* File Uploads */}
          <div className="file-uploads-grid">
            <div className="form-group file-upload">
              <label>Academic File *</label>
              <div className="file-input-container">
                <label className="file-input-label">
                  <input
                    type="file"
                    name="academicFile"
                    required
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                  <span className="file-input-button">Choose File</span>
                  <span className="file-input-name">
                    {fileNames.academicFile || "No file chosen"}
                  </span>
                </label>
              </div>
            </div>

            <div className="form-group file-upload">
              <label>Experience File</label>
              <div className="file-input-container">
                <label className="file-input-label">
                  <input
                    type="file"
                    name="experienceFile"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                  <span className="file-input-button">Choose File</span>
                  <span className="file-input-name">
                    {fileNames.experienceFile || "No file chosen"}
                  </span>
                </label>
              </div>
            </div>

            <div className="form-group file-upload">
              <label>Latest CV *</label>
              <div className="file-input-container">
                <label className="file-input-label">
                  <input
                    type="file"
                    name="cvFile"
                    required
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                  />
                  <span className="file-input-button">Choose File</span>
                  <span className="file-input-name">
                    {fileNames.cvFile || "No file chosen"}
                  </span>
                </label>
              </div>
            </div>

            <div className="form-group file-upload">
              <label>Healthcare License (Healthcare Students Only)</label>
              <div className="file-input-container">
                <label className="file-input-label">
                  <input
                    type="file"
                    name="healthcareLicense"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <span className="file-input-button">Choose File</span>
                  <span className="file-input-name">
                    {fileNames.healthcareLicense || "No file chosen"}
                  </span>
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`submit-button ${isSubmitting ? "submitting" : ""}`}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Submitting...
              </>
            ) : (
              "Apply Now"
            )}
          </button>
        </form>

        {status && (
          <div
            className={`status-message ${
              status.includes("✅") ? "success" : "error"
            }`}
          >
            {status}
          </div>
        )}

        <p className="modal-disclaimer">
          We'll never share your information with anyone else.
        </p>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(6px);
          z-index: 999999;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-background {
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .modal-content {
          position: relative;
          background: white;
          padding: 2.5rem;
          border-radius: 16px;
          max-width: 800px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          text-align: center;
          animation: fadeInUp 0.4s ease;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background-color 0.2s ease;
        }

        .modal-close:hover {
          background-color: #f1f5f9;
        }

        .modal-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #0f172a;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .file-uploads-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          text-align: left;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #334155;
          font-size: 0.95rem;
        }

        .modal-form input,
        .modal-form select,
        .modal-form textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 0.75rem;
          margin-bottom: 0.5rem;
          font-size: 1rem;
          background: white;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .modal-form input:focus,
        .modal-form select:focus,
        .modal-form textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }

        .modal-form textarea {
          resize: none;
          min-height: 100px;
        }

        .non-resizable {
          resize: none;
        }

        .file-upload {
          margin-bottom: 1rem;
        }

        .file-input-container {
          position: relative;
        }

        .file-input-label {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .file-input-label input[type="file"] {
          position: absolute;
          opacity: 0;
          width: 0.1px;
          height: 0.1px;
          overflow: hidden;
          z-index: -1;
        }

        .file-input-button {
          padding: 0.65rem 1rem;
          background: #f1f5f9;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: #334155;
          margin-right: 0.75rem;
          transition: all 0.2s ease;
        }

        .file-input-button:hover {
          background: #e2e8f0;
        }

        .file-input-name {
          font-size: 0.9rem;
          color: #64748b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 200px;
          display: inline-block;
        }

        .submit-button {
          background: #000000;
          color: white;
          padding: 0.85rem 1.5rem;
          border: none;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 0.5rem;
        }

        .submit-button:hover {
          background: #000000;
        }

        .submit-button:disabled {
          background: #94a3b8;
          cursor: not-allowed;
        }

        .submit-button.submitting {
          background: #2563eb;
        }

        .spinner {
          display: inline-block;
          width: 1rem;
          height: 1rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
          margin-right: 0.5rem;
        }

        .status-message {
          margin-top: 1.5rem;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .status-message.success {
          background-color: #ecfdf5;
          color: #065f46;
          border: 1px solid #a7f3d0;
        }

        .status-message.error {
          background-color: #fef2f2;
          color: #b91c1c;
          border: 1px solid #fecaca;
        }

        .modal-disclaimer {
          margin-top: 1.5rem;
          font-size: 0.875rem;
          color: #64748b;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 767px) {
          .modal-content {
            padding: 1.75rem 1.5rem;
            max-width: 95%;
          }

          .form-grid,
          .file-uploads-grid {
            grid-template-columns: 1fr;
          }

          .modal-title {
            font-size: 1.5rem;
          }

          .file-input-name {
            max-width: 150px;
          }
        }
      `}</style>
    </div>
  );
}
