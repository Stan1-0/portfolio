import { TechIcon } from "./Techicon";
export const ToolboxItems = ({
  items,
}: {
  items: {
    id: number;
    title: string;
    iconType: React.ElementType;
  }[];
}) => {
  return (
    <div>
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
  );
};
