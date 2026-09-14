import logoText from "../assets/assets/logo-text.png";

const Footer = () => {
  return (
    /* <!-- Footer Section Start --> */
    <footer className="border-t border-gray-200 bg-white">
      {/* <!-- Footer Top --> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* <!-- Brand Column --> */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src={logoText} alt="Dev Stack" className="h-7" />
            </a>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* <!-- Product Links --> */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Company Links --> */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Legal Links --> */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- Footer Bottom --> */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
    /* <!-- Footer Section End --> */
  );
};

export default Footer;
