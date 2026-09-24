import { useState, useMemo } from "react";
import { INITIAL_STUDENTS, EMPTY_FORM } from "./constants";
import StudentModal from "./components/StudentModal";
import DeleteModal from "./components/DeleteModal";
import StudentCard from "./components/StudentCard";

export default function App() {
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  const [search, setSearch] = useState("");
  const [filterGrade, setFilterGrade] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const [modal, setModal] = useState(null); // null | "add" | number(editIdx)
  const [delIdx, setDelIdx] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return students.filter(s => {
      const match = `${s.first} ${s.last} ${s.id} ${s.course}`.toLowerCase().includes(q);
      return match && (!filterGrade || s.grade === filterGrade) && (!filterYear || s.year === filterYear);
    });
  }, [students, search, filterGrade, filterYear]);

  const stats = useMemo(() => {
    const n = students.length;
    if (!n) return { total: 0, gpa: "—", att: "—", courses: 0 };
    const GRADE_VALUES = { A: 10, B: 7, C: 5, D: 3, F: 0 };
    const gpa = (students.reduce((a, s) => a + (GRADE_VALUES[s.grade] || 0), 0) / n).toFixed(1);
    const att = Math.round(students.reduce((a, s) => a + (+s.att || 0), 0) / n) + "%";
    const courses = new Set(students.map(s => s.course)).size;
    return { total: n, gpa, att, courses };
  }, [students]);

  function openAdd() { setForm(EMPTY_FORM); setModal("add"); }
  function openEdit(i) { setForm({ ...students[i] }); setModal(i); }
  function closeModal() { setModal(null); }

  function saveStudent() {
    const s = {
      ...form,
      first: form.first.trim() || "Student",
      id: form.id.trim() || "STU-" + Math.floor(Math.random() * 900 + 100),
      course: form.course.trim() || "General",
      att: parseInt(form.att) || 85,
    };
    if (modal === "add") {
      setStudents(prev => [...prev, s]);
    } else {
      setStudents(prev => prev.map((st, i) => (i === modal ? s : st)));
    }
    closeModal();
  }

  function confirmDelete() {
    setStudents(prev => prev.filter((_, i) => i !== delIdx));
    setDelIdx(null);
  }

  const inputClass =
    "px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white text-gray-900 outline-none focus:border-gray-400";

  return (
    <div className="px-4 py-6 max-w-[1100px] mx-auto font-sans">
      {/* Header */}
      <div className="flex items-start justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-xl font-medium text-gray-900">Student records</h1>
          <p className="text-[13px] text-gray-400 mt-0.5">Manage your class roster</p>
        </div>
        <button
          onClick={openAdd}
          className="bg-[#185FA5] text-white border-none rounded-lg px-4 py-2 text-sm cursor-pointer flex items-center gap-1.5 hover:bg-[#144d87]"
        >
          + Add student
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-2.5 mb-6">
        {[
          { label: "Total students", value: stats.total },
          { label: "Avg GPA", value: stats.gpa },
          { label: "Avg attendance", value: stats.att },
          { label: "Active courses", value: stats.courses },
        ].map(({ label, value }) => (
          <div key={label} className="bg-gray-50 rounded-lg px-3.5 py-3">
            <div className="text-xs text-gray-400 mb-1">{label}</div>
            <div className="text-[22px] font-medium text-gray-900">{value}</div>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex gap-2.5 mb-5 flex-wrap">
        <input
          className={`${inputClass} flex-1 min-w-[160px]`}
          placeholder="Search by name, ID, or course…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select className={inputClass} value={filterGrade} onChange={e => setFilterGrade(e.target.value)}>
          <option value="">All grades</option>
          {["A", "B", "C", "D", "F"].map(g => <option key={g}>{g}</option>)}
        </select>
        <select className={inputClass} value={filterYear} onChange={e => setFilterYear(e.target.value)}>
          <option value="">All years</option>
          {["1st year", "2nd year", "3rd year", "4th year"].map(y => <option key={y}>{y}</option>)}
        </select>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 px-4 text-gray-400">
          <div className="text-4xl mb-3 opacity-40">👥</div>
          <p>No students found</p>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-3">
          {filtered.map((s, i) => {
            const realIdx = students.indexOf(s);
            return (
              <StudentCard
                key={s.id + i}
                student={s}
                onEdit={() => openEdit(realIdx)}
                onDelete={() => setDelIdx(realIdx)}
              />
            );
          })}
        </div>
      )}

      {/* Add / Edit modal */}
      {modal !== null && (
        <StudentModal
          form={form}
          setForm={setForm}
          onSave={saveStudent}
          onClose={closeModal}
          isEdit={modal !== "add"}
        />
      )}

      {/* Delete modal */}
      {delIdx !== null && (
        <DeleteModal
          student={students[delIdx]}
          onConfirm={confirmDelete}
          onClose={() => setDelIdx(null)}
        />
      )}
    </div>
  );
}