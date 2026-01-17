import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-14 w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium outline-none transition-all focus:scale-[1.02] hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/25 active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
      ) : (
        <>
          Send Message
          <FaPaperPlane className="text-sm opacity-80 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
