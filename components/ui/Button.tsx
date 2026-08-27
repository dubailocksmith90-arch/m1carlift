import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, children, disabled, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-[#C9A227] hover:bg-[#E8C04A] text-[#0A0A0B] shadow-[0_0_20px_rgba(201,162,39,0.25)] hover:shadow-[0_0_30px_rgba(201,162,39,0.4)]",
      secondary: "bg-[#1E1E21] hover:bg-[#27272B] text-[#EDEDED] border border-[#2A2A2E]",
      ghost: "hover:bg-[#1E1E21] text-[#8A8A95] hover:text-[#EDEDED]",
      outline: "border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0A0A0B]",
    };

    const sizes = {
      sm: "text-sm px-3 py-2",
      md: "text-sm px-5 py-2.5",
      lg: "text-base px-7 py-3.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Processing…
          </>
        ) : children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
