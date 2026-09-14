import StackItem from "./StackItem";

interface Technology {
  id: string;
  name: string;
  category: string;
  icon: string;
}

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    /* <!-- Your Stack Section Start --> */
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
      <p className="text-sm text-gray-400 mt-1">
        {stack.length > 0
          ? `${stack.length} Technology Selected`
          : "No technologies selected yet."}
      </p>

      {/* <!-- Stack Content --> */}
      {stack.length === 0 ? (
        /* <!-- Empty State --> */
        <div className="mt-4 rounded-lg border border-dashed border-gray-200 py-8 flex items-center justify-center">
          <p className="text-sm text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        /* <!-- Stack Items --> */
        <div className="mt-4 flex flex-col gap-3">
          {stack.map((tech) => (
            <StackItem key={tech.id} tech={tech} onRemove={onRemove} />
          ))}
          <button
            onClick={onRemoveAll}
            className="w-full py-2.5 rounded-lg text-sm font-semibold text-red-500 border border-red-300 hover:bg-red-50 transition-colors mt-1 cursor-pointer"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
    /* <!-- Your Stack Section End --> */
  );
};

export default YourStack;
