interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

interface TechCardProps {
  tech: Technology;
  isAdded: boolean;
  onAddToStack: (tech: Technology) => void;
}

const badgeColors: Record<string, string> = {
  Popular: "bg-pink-100 text-pink-600",
  Versatile: "bg-blue-100 text-blue-600",
  Fast: "bg-red-100 text-red-600",
  "SSR/Edge": "bg-gray-800 text-white",
  Standard: "bg-green-100 text-green-600",
  "Top SQL": "bg-blue-100 text-blue-600",
  Cache: "bg-red-100 text-red-600",
  Ubiquitous: "bg-purple-100 text-purple-600",
  Essential: "bg-blue-100 text-blue-600",
  Robust: "bg-blue-100 text-blue-600",
  Modern: "bg-blue-100 text-blue-600",
  Containers: "bg-blue-100 text-blue-600",
};

const TechCard = ({ tech, isAdded, onAddToStack }: TechCardProps) => {
  return (
    /* <!-- Tech Card Start --> */
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-300">
      {/* <!-- Card Header: Icon + Badge --> */}
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColors[tech.badge] || "bg-gray-100 text-gray-600"}`}
        >
          {tech.badge}
        </span>
      </div>

      {/* <!-- Card Body --> */}
      <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
      <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
        {tech.description}
      </p>

      {/* <!-- Card Meta --> */}
      <div className="flex items-center gap-2 mt-auto flex-wrap">
        <span className="text-xs font-medium bg-gray-900 text-white px-3 py-1 rounded-full">
          {tech.category}
        </span>
        <span className="text-xs text-gray-500">{tech.difficulty}</span>
        <div className="flex items-center gap-1 ml-auto">
          <span className="text-amber-400 text-sm">★</span>
          <span className="text-xs font-medium text-gray-700">
            {tech.rating}
          </span>
        </div>
      </div>

      {/* <!-- Add Button --> */}
      <button
        onClick={() => onAddToStack(tech)}
        disabled={isAdded}
        className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
          isAdded
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-800 active:scale-[0.98]"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
    /* <!-- Tech Card End --> */
  );
};

export default TechCard;
