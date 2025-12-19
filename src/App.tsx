import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import FloatingChatbot from "./components/FloatingChatbot";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <TechStack />
      </main>

      <Footer />

      {/* Floating chatbot lives OUTSIDE layout */}
      <FloatingChatbot />
    </>
  );
}

export default App;
