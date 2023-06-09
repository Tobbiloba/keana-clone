import About from "./components/About";
import Homepage from "./components/Homepage";
import Other from "./components/Other";
function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">

      <Homepage />
      <Other />
      <About />
    </div>
  );
}

export default App;
