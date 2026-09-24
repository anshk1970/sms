export default function DeleteModal({ student, onConfirm, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/45 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-xl border border-gray-300 p-6 w-full max-w-[340px]">
        <h2 className="text-base font-medium mb-2 text-gray-900">
          Remove student?
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          Remove {student.first} {student.last} ({student.id}) permanently?
        </p>
        <div className="flex gap-2 justify-end">
          <button
            onClick={onClose}
            className="bg-transparent border border-gray-300 rounded-lg px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-[#A32D2D] text-white border-none rounded-lg px-[18px] py-2 cursor-pointer text-sm hover:bg-[#8a2626]"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}