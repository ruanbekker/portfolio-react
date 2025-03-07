import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-900">
      <Navbar />
      <div className="w-full max-w-3xl p-6 pt-20">
        <Profile />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;

