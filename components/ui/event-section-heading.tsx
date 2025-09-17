import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export default function EHeading({ title, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-3 text-center", className)}>
      <h2 className="font-title text-3xl md:text-4xl font-bold">
        {title}
      </h2>
    </div>
  );
}