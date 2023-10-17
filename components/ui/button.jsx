import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "text-sm font-medium inline-flex items-center justify-center focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-highlight text-white hover:bg-highlight/90 dark:bg-white dark:text-highlight dark:hover:bg-white/90",
        destructive: "bg-orange text-white hover:bg-orange/90",
        ghost:
          "bg-transparent text-highlight hover:text-highlight/90 dark:text-white dark:hover:text-white/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

const ButtonIcon = React.forwardRef(({ iconRef, ...props }, ref) => {
  const Icon = iconRef;
  return (
    <Button ref={ref} {...props}>
      <Icon />
    </Button>
  );
});

export { Button, ButtonIcon, buttonVariants };
