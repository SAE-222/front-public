import { cn } from "@/lib/utils";

interface ProductTagProps {
  tag: string;
  className?: string;
}

const ProductTag = ({ tag, className }: ProductTagProps) => {
  return (
    <div
      className={cn(
        "mb-2 py-1 px-2 text-xs bg-white",
        className,
      )}
    >
      {tag}
    </div>
  );
};

export default ProductTag;