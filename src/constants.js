export const AVATARS = [
  { bg: "#E6F1FB", color: "#0C447C" },
  { bg: "#EAF3DE", color: "#27500A" },
  { bg: "#EEEDFE", color: "#3C3489" },
  { bg: "#FAEEDA", color: "#633806" },
  { bg: "#E1F5EE", color: "#085041" },
  { bg: "#FAECE7", color: "#712B13" },
];

export const GRADE_COLORS = {
  A: { bg: "#EAF3DE", color: "#3B6D11" },
  B: { bg: "#E6F1FB", color: "#185FA5" },
  C: { bg: "#FAEEDA", color: "#854F0B" },
  D: { bg: "#FAECE7", color: "#993C1D" },
  F: { bg: "#FCEBEB", color: "#A32D2D" },
};

export const GRADE_VALUES = { A: 10, B: 8, C: 6, D: 4, F: 0 };

export const INITIAL_STUDENTS = [
  { id: "STU-001", first: "Rahul",  last: "Verma",  year: "2nd year", course: "Computer Science", grade: "A", att: 95, email: "rahul.v@college.edu" },
  { id: "STU-002", first: "Priya",  last: "Singh",  year: "3rd year", course: "Mathematics",      grade: "B", att: 88, email: "priya.s@college.edu" },
  { id: "STU-003", first: "Aanya",  last: "Sharma", year: "1st year", course: "Physics",           grade: "A", att: 97, email: "aanya.sh@college.edu" },
  { id: "STU-004", first: "Karan",  last: "Mehta",  year: "4th year", course: "Electronics",      grade: "C", att: 76, email: "karan.m@college.edu" },
  { id: "STU-005", first: "Divya",  last: "Patel",  year: "2nd year", course: "Chemistry",        grade: "B", att: 91, email: "divya.p@college.edu" },
  { id: "STU-006", first: "Arjun",  last: "Joshi",  year: "3rd year", course: "Computer Science", grade: "D", att: 62, email: "arjun.j@college.edu" },
];

export const EMPTY_FORM = {
  first: "", last: "", id: "", year: "1st year",
  course: "", grade: "A", att: "", email: "",
};