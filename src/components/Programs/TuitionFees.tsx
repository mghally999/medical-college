"use client";

import React from "react";
import { motion } from "framer-motion";

type Level = {
  name?: string;
  duration?: string;
  fee?: number | string;
};

type Fees = {
  tuition?: number | string;
  visa?: number | string;
  registration?: number | string;
  fee?: number | string;
  duration?: string;
  currency?: string;
  levels?: Level[];
};

interface Program {
  title: string;
  professional?: boolean;
  fees?: Fees;
}

interface TuitionFeesProps {
  program?: Program;
}

export const TuitionFees: React.FC<TuitionFeesProps> = ({ program }) => {
  if (!program?.fees) return null;

  const {
    title,
    professional = false,
    fees: {
      tuition,
      visa,
      registration,
      fee,
      duration,
      currency = "AED",
      levels,
    },
  } = program;

  const formatNumber = (value: string | number | undefined): string => {
    if (!value) return "N/A";
    const num = Number(value.toString().replace(/,/g, ""));
    return isNaN(num) ? "N/A" : num.toLocaleString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fee-wrapper"
    >
      <h2 className="section-title">Tuition & Fees</h2>
      <p className="disclaimer">
        All amounts are in UAE Dirhams (AED). Fees are subject to change.
      </p>

      <div className="table-container">
        <table className="text-white">
          <thead>
            <tr>
              {professional ? (
                <>
                  <th>Course</th>
                  <th>Duration</th>
                  <th>Fee</th>
                </>
              ) : (
                <>
                  <th>Program</th>
                  <th>Tuition Fee</th>
                  <th>Visa Fee</th>
                  <th>Registration</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {professional ? (
              Array.isArray(levels) && levels.length > 0 ? (
                levels.map((level, idx) => (
                  <tr key={idx}>
                    <td>{level.name || "N/A"}</td>
                    <td>{level.duration || duration || "N/A"}</td>
                    <td>
                      {formatNumber(level.fee)} {currency}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>{title}</td>
                  <td>{duration || "N/A"}</td>
                  <td>
                    {formatNumber(fee)} {currency}
                  </td>
                </tr>
              )
            ) : (
              <tr>
                <td>{title}</td>
                <td>
                  {formatNumber(tuition)} {currency}
                </td>
                <td>
                  {formatNumber(visa)} {currency}
                </td>
                <td>
                  {formatNumber(registration)} {currency}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .fee-wrapper {
          margin: 3rem 0;
          padding: 2rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          height: fit-content;
        }

        .section-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #111827;
        }

        .disclaimer {
          color: #ffffff;
          margin-bottom: 2rem;
          font-size: 0.95rem;
        }

        .table-container {
          overflow-x: auto;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px;
        }

        th,
        td {
          padding: 14px 20px;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        }

        th {
          background: #f9fafb;
          font-weight: 600;
          color: #374151;
        }

        tr:last-child td {
          border-bottom: none;
        }

        @media (max-width: 768px) {
          .fee-wrapper {
            padding: 1.5rem;
          }

          th,
          td {
            padding: 12px 16px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default TuitionFees;
