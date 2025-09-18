import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export default function SubSectionHeading({ title, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 text-center", className)}>
      <h2 className="font-title text-3xl md:text-3xl font-bold mb-3 text-purple-500">
        {title}
      </h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
    </div>
  );
}