import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CircleProps {
  text: string;
  current?: boolean;
  children?: React.ReactNode;
  lined?: boolean;
  grayLined?: boolean;
  next?: boolean;
}

export const Circle = ({
  text,
  current = false,
  children = <CheckIcon size={22} />,
  lined = false,
  grayLined = false,
  next = false,
}: CircleProps) => {
  const getStyle = () => {
    if (current) {
      return "bg-orange-500 text-white";
    } else if (next) {
      return "bg-white text-gray-400 border-gray-300";
    }
  };

  return (
    <div className="relative w-fit space-y-2">
      <div
        className={cn(
          "relative mx-auto bg-white rounded-full w-10 h-10 border border-orange-400 flex justify-center items-center text-orange-500",
          getStyle(),
        )}
      >
        {children}
        {lined && (
          <div
            className={cn(
              "absolute left-[39px] w-20 h-1 bg-orange-500 z-0 md:w-40",
              grayLined && "bg-gray-300",
            )}
          />
        )}
      </div>

      <p
        className={cn(
          "whitespace-nowrap text-xs text-orange-500 text-center",
          next && "text-gray-400",
        )}
      >
        {text}
      </p>
    </div>
  );
};
