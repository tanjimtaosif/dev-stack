import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TechCard from "./TechCard";
import YourStack from "./YourStack";
import Loading from "./Loading";

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

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  /* <!-- Load JSON Data --> */
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/data/technologies.json");
        const data = await response.json();
        setTechnologies(data);
      } catch {
        toast.error("Failed to load technologies.");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  /* <!-- Add to Stack Handler --> */
  const handleAddToStack = (tech: Technology) => {
    if (stack.find((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  /* <!-- Remove from Stack Handler --> */
  const handleRemove = (id: string) => {
    const tech = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (tech) {
      toast.info(`${tech.name} removed from your stack.`);
    }
  };

  /* <!-- Remove All Handler --> */
  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    /* <!-- Technologies Section Start --> */
    <section id="technologies" className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <!-- Section Header --> */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore the{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-2 text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* <!-- Grid + Sidebar Layout --> */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* <!-- Technology Cards Grid --> */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                isAdded={stack.some((item) => item.id === tech.id)}
                onAddToStack={handleAddToStack}
              />
            ))}
          </div>

          {/* <!-- Sidebar --> */}
          <div className="w-full lg:w-72 xl:w-80 lg:flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <YourStack
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    /* <!-- Technologies Section End --> */
  );
};

export default Technologies;
