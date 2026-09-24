export default function StudentModal({ form, setForm, onSave, onClose, isEdit }) {
  const field = (id, label, props) => (
    <div className="mb-3.5">
      <label className="block text-[13px] text-gray-500 mb-[5px]">{label}</label>
      <input
        {...props}
        value={form[id]}
        onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
        className="w-full px-2.5 py-2 border border-gray-300 rounded-lg text-sm outline-none box-border bg-white text-gray-900 focus:border-gray-400"
      />
    </div>
  );

  const select = (id, label, options) => (
    <div className="mb-3.5">
      <label className="block text-[13px] text-gray-500 mb-[5px]">{label}</label>
      <select
        value={form[id]}
        onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
        className="w-full px-2.5 py-2 border border-gray-300 rounded-lg text-sm bg-white text-gray-900"
      >
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/45 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-xl border border-gray-300 p-6 w-full max-w-[440px] max-h-[90vh] overflow-y-auto box-border">
        <h2 className="text-[17px] font-medium mb-5 text-gray-900">
          {isEdit ? "Edit student" : "Add student"}
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {field("first", "First name", { placeholder: "e.g. Aanya" })}
          {field("last", "Last name", { placeholder: "e.g. Sharma" })}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {field("id", "Student ID", { placeholder: "e.g. STU-007" })}
          {select("year", "Year", ["1st year", "2nd year", "3rd year", "4th year"])}
        </div>
        {field("course", "Course / Major", { placeholder: "e.g. Computer Science" })}
        <div className="grid grid-cols-2 gap-3">
          {select("grade", "Grade", ["A", "B", "C", "D", "F"])}
          {field("att", "Attendance %", { type: "number", min: 0, max: 100, placeholder: "e.g. 92" })}
        </div>
        {field("email", "Email", { placeholder: "e.g. student@college.edu" })}

        <div className="flex gap-2 justify-end mt-5">
          <button
            onClick={onClose}
            className="bg-transparent border border-gray-300 rounded-lg px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="bg-[#185FA5] text-white border-none rounded-lg px-[18px] py-2 cursor-pointer text-sm hover:bg-[#144d87]"
          >
            Save student
          </button>
        </div>
      </div>
    </div>
  );
}