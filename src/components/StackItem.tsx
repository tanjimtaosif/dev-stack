interface Technology {
  id: string;
  name: string;
  category: string;
  icon: string;
}

interface StackItemProps {
  tech: Technology;
  onRemove: (id: string) => void;
}

const StackItem = ({ tech, onRemove }: StackItemProps) => {
  return (
    /* <!-- Stack Item Start --> */
    <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-white">
      <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 truncate">
          {tech.name}
        </p>
        <p className="text-xs text-gray-400">{tech.category}</p>
      </div>
      <button
        onClick={() => onRemove(tech.id)}
        className="text-gray-400 hover:text-red-500 transition-colors text-lg leading-none cursor-pointer"
        aria-label={`Remove ${tech.name}`}
      >
        ✕
      </button>
    </div>
    /* <!-- Stack Item End --> */
  );
};

export default StackItem;
