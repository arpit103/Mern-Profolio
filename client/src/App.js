import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Project from "./pages/Project/Project";
import Techstack from "./pages/Techstack/Techstack";
import Workexp from "./pages/workexp/workexp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Project />
          <Workexp />
          <Contact />
        </div>{" "}
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center"> PROTFOLIO 2024 </h4>{" "}
          </Tada>{" "}
        </div>{" "}
      </div>{" "}
      <ScrollToTop
        smooth
        color="white"
        style={{
          backgroundColor: "#1e1e2c",
          borderRadius: "80px",
        }}
      />{" "}
    </>
  );
}

export default App;
