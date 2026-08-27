import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-[#EDEDED]">
            {label}
            {props.required && <span className="text-[#C9A227] ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            "w-full bg-[#1E1E21] border border-[#2A2A2E] rounded-lg px-4 py-2.5 text-sm text-[#EDEDED] placeholder:text-[#8A8A95]",
            "focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]",
            "transition-colors duration-200",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="text-red-400 text-xs">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
