
import React from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "./Button";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    this.setState({
      hasError: false,
      error: null,
    });

    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="
            min-h-[50vh]
            flex items-center justify-center
            p-6
            bg-slate-50/50
            dark:bg-slate-950/30
            transition-colors duration-300
          "
        >
          <div
            className="
              relative
              w-full max-w-md
              p-8 sm:p-10
              rounded-3xl
              bg-white/90
              dark:bg-slate-900/90
              backdrop-blur-xl
              border border-slate-200/80
              dark:border-slate-800/80
              shadow-2xl
              shadow-slate-900/10
              dark:shadow-black/30
              text-center
              overflow-hidden
            "
          >
            {/* Decorative Glow */}
            <div
              className="
                absolute -top-20 left-1/2
                -translate-x-1/2
                w-40 h-40
                rounded-full
                bg-indigo-500/10
                dark:bg-indigo-500/10
                blur-3xl
                pointer-events-none
              "
            />

            {/* Error Icon */}
            <div
              className="
                relative
                w-16 h-16
                mx-auto
                rounded-2xl
                bg-gradient-to-br
                from-indigo-500/10
                via-violet-500/10
                to-cyan-500/10
                border border-indigo-200/60
                dark:border-indigo-500/20
                text-indigo-600
                dark:text-indigo-400
                flex items-center justify-center
                shadow-lg
                shadow-indigo-500/10
              "
            >
              <AlertTriangle className="w-7 h-7" />

              {/* Small Dot */}
              <span
                className="
                  absolute
                  -right-1
                  -top-1
                  w-3.5 h-3.5
                  rounded-full
                  bg-gradient-to-r
                  from-indigo-500
                  to-violet-500
                  border-2
                  border-white
                  dark:border-slate-900
                "
              />
            </div>

            {/* Content */}
            <div className="relative mt-6 space-y-3">
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-indigo-600
                  dark:text-indigo-400
                "
              >
                Oops! Something happened
              </p>

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  font-black
                  tracking-tight
                  text-slate-900
                  dark:text-white
                "
              >
                Something went wrong
              </h2>

              <p
                className="
                  text-sm
                  leading-6
                  text-slate-600
                  dark:text-slate-400
                "
              >
                An unexpected error occurred while loading this page.
                Please refresh the page and try again.
              </p>
            </div>

            {/* Action */}
            <div className="relative mt-7">
              <Button
                variant="primary"
                size="md"
                icon={RotateCcw}
                onClick={this.handleReload}
                className="
                  mx-auto
                  min-w-[150px]
                "
              >
                Refresh Page
              </Button>
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
              "
            />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

