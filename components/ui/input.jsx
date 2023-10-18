import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "w-full h-10 px-3 py-2 bg-transparent border border-frame text-highlight text-sm focus-visible:outline-none placeholder:text-highlight disabled:cursor-not-allowed disabled:opacity-50 dark:text-white dark:placeholder:text-white dark:opacity-90",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

const InputIcon = React.forwardRef(
  ({ className, iconRef, hasBorder, children, ...props }, ref) => {
    const Icon = iconRef;
    return (
      <div className={cn("flex items-center", className)}>
        <Input
          className={cn("border-r-0", hasBorder ? "" : "border-none")}
          ref={ref}
          {...props}
        />
        <div
          className={cn(
            "h-10 inline-flex items-center pr-3",
            hasBorder ? "border border-l-0 border-frame" : "",
          )}
        >
          <Icon
            className="text-highlight dark:text-white dark:opacity-90"
            width={20}
            height={20}
          />
        </div>
      </div>
    );
  },
);

export { Input, InputIcon };
