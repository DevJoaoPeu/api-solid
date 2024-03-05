import { setYear, parseISO } from "date-fns";

// Receives "2024-03-05" and returns "2025-03-05"

export function getFutureDate(date: string) {
    return setYear(parseISO(date), new Date().getFullYear() + 1)
}
