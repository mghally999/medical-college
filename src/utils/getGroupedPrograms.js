import { programs } from "../data/programs";

export function getGroupedPrograms() {
  const professionalPrograms = programs.filter((p) => p.professional);
  const regularPrograms = programs.filter((p) => !p.professional);

  return { professionalPrograms, regularPrograms };
}
