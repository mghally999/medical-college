import { Documentation } from "@/components/Documentation/Documentation";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Featurs | CS Medical College",
};

export default function Page() {
  return (
    <>
      <Documentation />
    </>
  );
}
