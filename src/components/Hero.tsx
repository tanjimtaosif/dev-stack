import bannerImg from "../assets/assets/banner-stack.png";

const Hero = () => {
  return (
    /* <!-- Hero Section Start --> */
    <section className="py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* <!-- Hero Text --> */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight tracking-tight text-gray-900">
              Build Your Ideal
              <br />
              <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-gray-500 max-w-md mx-auto md:mx-0">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#technologies"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 hover:opacity-90 transition-opacity shadow-md"
              >
                Explore Technologies
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* <!-- Hero Image --> */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={bannerImg}
              alt="Development Stack Illustration"
              className="w-72 md:w-80 lg:w-105"
            />
          </div>
        </div>
      </div>
    </section>
    /* <!-- Hero Section End --> */
  );
};

export default Hero;
