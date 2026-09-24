import { GRADE_COLORS } from "../constants";
import { avatarStyle, initials } from "../utils/helpers";

export default function StudentCard({ student, onEdit, onDelete }) {
  const av = avatarStyle(student.first);
  const gc = GRADE_COLORS[student.grade] || GRADE_COLORS.F;

  return (
    <div className="bg-white border border-gray-200 rounded-xl px-[18px] py-4 transition-colors duration-150 hover:border-gray-300">
      <div className="flex items-start gap-2.5 mb-2.5">
        <div
          style={{ background: av.bg, color: av.color }}
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium shrink-0"
        >
          {initials(student.first, student.last)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[15px] font-medium text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">
            {student.first} {student.last}
          </div>
          <div className="text-xs text-gray-400 mt-px">
            {student.id} · {student.year}
          </div>
          <span
            style={{ background: gc.bg, color: gc.color }}
            className="inline-block text-[11px] px-2 py-0.5 rounded-full font-medium mt-1.5"
          >
            Grade {student.grade}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1.5 border-t border-gray-100 pt-2.5">
        <div className="text-xs text-gray-400">
          Course
          <span className="block text-[13px] text-gray-900 font-medium">{student.course}</span>
        </div>
        <div className="text-xs text-gray-400">
          Attendance
          <span className="block text-[13px] text-gray-900 font-medium">{student.att}%</span>
        </div>
        <div className="text-xs text-gray-400 col-span-full">
          Email
          <span className="block text-xs text-gray-500">{student.email}</span>
        </div>
      </div>

      <div className="flex gap-1.5 mt-2.5">
        <button
          onClick={onEdit}
          className="flex-1 bg-transparent border border-gray-200 rounded-lg px-2.5 py-[5px] cursor-pointer text-[13px] text-gray-500 flex items-center justify-center gap-1 hover:bg-gray-50"
        >
          ✏️ Edit
        </button>
        <button
          onClick={onDelete}
          className="flex-1 bg-transparent border border-gray-200 rounded-lg px-2.5 py-[5px] cursor-pointer text-[13px] text-gray-500 flex items-center justify-center gap-1 hover:bg-gray-50"
        >
          🗑️ Remove
        </button>
      </div>
    </div>
  );
}