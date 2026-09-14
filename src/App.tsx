import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <!-- Navbar --> */}
      <Navbar />

      {/* <!-- Main Content --> */}
      <main>
        {/* <!-- Hero Section --> */}
        <Hero />

        {/* <!-- Technologies Section --> */}
        <Technologies />
      </main>

      {/* <!-- Footer --> */}
      <Footer />

      {/* <!-- Toast Notifications --> */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
