import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function yearsOfExperience(startYear: number): string {
  const yoe = new Date().getFullYear() - startYear
  return `${yoe} year${yoe === 1 ? "" : "s"}`
}