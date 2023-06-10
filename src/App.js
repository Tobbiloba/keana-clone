import About from "./components/About";
import Homepage from "./components/Homepage";
import How from "./components/How";
import Logo from "./components/Logo";
import Other from "./components/Other";
import Review from "./components/Review";
function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">

      <Homepage />
      <Other />
      <About />
      <Review />
      <Logo />
      <How />
    </div>
  );
}

export default App;
