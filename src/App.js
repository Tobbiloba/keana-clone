import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import How from "./components/How";
import Logo from "./components/Logo";
import Other from "./components/Other";
import ScrollMenu from "./components/Product";
// import Product from "./components/Product";
import ProductMenu from "./components/ProductMenu";
import Review from "./components/Review";
import Roll from "./components/Roll";
// import { Route, Switch } from 'react-router-dom';
// import {Switch}
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

const MainPage = () => {
  return (
    <div>
      <Homepage />
      <Other />
      <About />
      <Review />
      <Logo />
      <How />
      <Roll />
      <Banner />
      <Footer />
    </div>
  )
}
const AboutPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-black">About</div>
  )
}
const ProductPage = () => {
  return (
    <div className="">
      {/* <Homepage /> */}
      <ScrollMenu />
    </div>
  )
}
const Contact = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-red-500">Contact</div>
  )
}

const routes = [
  <Route path="/" element={<MainPage />} />,
  <Route path="/product" element={<ProductPage />} />,
  <Route path="/about" element={<AboutPage />} />,
  <Route path="/contact" element={<Contact />} />,
]

const router = createBrowserRouter(createRoutesFromElements(routes))
function App() {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
