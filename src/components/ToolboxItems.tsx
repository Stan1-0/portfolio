import { twMerge } from "tailwind-merge";
import { TechIcon } from "./Techicon";
export const ToolboxItems = ({
  items,
  className,
}: {
  items: {
    id: number;
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div className="flex flex-none py-0.5">
        {items.map((item) => (
          <div
            key={item.id}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
