
import { useEffect, useRef } from "react";
import { X, Film } from "lucide-react";

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = "max-w-3xl",
}) {
  const modalRef = useRef(null);

  // Close on Escape key & lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        p-4 sm:p-6
        overflow-y-auto
        bg-slate-950/75
        backdrop-blur-md
        transition-all duration-300
      "
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal */}
      <div
        ref={modalRef}
        className={`
          relative
          w-full ${maxWidth}
          max-h-[90vh]
          my-auto
          flex flex-col
          overflow-hidden

          rounded-3xl

          bg-white/95
          dark:bg-slate-900/95

          backdrop-blur-2xl

          border
          border-slate-200/80
          dark:border-slate-800/80

          shadow-2xl
          shadow-slate-950/20
          dark:shadow-black/50

          animate-in
          fade-in
          zoom-in-95
          duration-300
        `}
      >
        {/* Top Glow */}
        <div
          className="
            absolute
            -top-24
            left-1/2
            -translate-x-1/2
            w-72 h-40
            rounded-full
            bg-indigo-500/10
            dark:bg-indigo-500/10
            blur-3xl
            pointer-events-none
          "
        />

        {/* ================= HEADER ================= */}
        <div
          className="
            relative
            flex items-center justify-between
            gap-4
            px-5 sm:px-6
            py-4

            border-b
            border-slate-200/80
            dark:border-slate-800/80

            bg-slate-50/80
            dark:bg-slate-950/40

            backdrop-blur-xl
          "
        >
          {/* Title Area */}
          <div className="flex items-center gap-3 min-w-0">
            {/* Mini Logo */}
            <div
              className="
                hidden sm:flex
                shrink-0
                w-9 h-9
                rounded-xl
                items-center justify-center

                bg-gradient-to-br
                from-indigo-600
                via-violet-600
                to-cyan-500

                text-white

                shadow-md
                shadow-indigo-500/20
              "
            >
              <Film className="w-4 h-4" />
            </div>

            <div className="min-w-0">
              <p
                className="
                  hidden sm:block
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-indigo-500
                  dark:text-indigo-400
                  mb-0.5
                "
              >
                Movie Explorer
              </p>

              <h2
                id="modal-title"
                className="
                  text-base
                  sm:text-lg
                  font-bold
                  text-slate-900
                  dark:text-white
                  truncate
                  pr-2
                "
              >
                {title || "Show Details"}
              </h2>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            type="button"
            className="
              group
              shrink-0
              w-9 h-9
              rounded-xl

              flex items-center justify-center

              text-slate-500
              dark:text-slate-400

              bg-slate-100
              dark:bg-slate-800/70

              border
              border-slate-200
              dark:border-slate-700

              hover:text-white
              hover:border-transparent

              hover:bg-gradient-to-br
              hover:from-indigo-600
              hover:to-violet-600

              hover:shadow-lg
              hover:shadow-indigo-500/20

              transition-all duration-300

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-indigo-500/50

              cursor-pointer
            "
            aria-label="Close modal"
          >
            <X
              className="
                w-5 h-5
                transition-transform duration-300
                group-hover:rotate-90
              "
            />
          </button>
        </div>

        {/* ================= BODY ================= */}
        <div
          className="
            relative
            p-5 sm:p-6 lg:p-7
            overflow-y-auto
            custom-scrollbar
            flex-1

            bg-white/50
            dark:bg-slate-900/40
          "
        >
          {children}
        </div>

        {/* Bottom Accent */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            w-32
            h-1
            rounded-full

            bg-gradient-to-r
            from-indigo-600
            via-violet-600
            to-cyan-500

            opacity-80
          "
        />
      </div>
    </div>
  );
}

