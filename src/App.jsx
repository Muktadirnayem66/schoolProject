import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import StudentsInfo from "./components/Info/StudentsInfo";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
  return (
    <div className="bg-[#172227] text-white">
      <Navbar/>
      <Hero/>
      <StudentsInfo/>
      <Footer/>
    </div>
  );
};

export default App;