import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md px-3 bg-transparent py-2 border border-frame text-highlight dark:text-white text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-highlight dark:placeholder:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

const InputIcon = React.forwardRef(
  ({ className, type, children, ...props }, ref) => {
    return (
      <div className="flex w-full items-center">
        <Input
          ref={ref}
          type={type}
          {...props}
          className={cn(
            "text-highlight dark:text-white border border-frame border-r-0",
            className
          )}
        />
        <div className="flex items-center h-10 border border-none md:border-solid border-l-0 border-frame">
          {children}
        </div>
      </div>
    );
  }
);

export { Input, InputIcon };
