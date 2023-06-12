import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Homepage from "./screen/Homepage";
import How from "./components/How";
import Logo from "./components/Logo";
import Other from "./components/Other";
import ScrollMenu from "./screen/Product";
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
import AboutusPage from "./screen/AboutPage";
import ContactPage from "./screen/ContactPage";

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
    <div className="">
      <AboutusPage />
    </div>
  )
}
const ProductPage = () => {
  return (
    <div className="">
      <ScrollMenu />
    </div>
  )
}
const Contact = () => {
  return (
    <div className="">
      <ContactPage />
    </div>
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
