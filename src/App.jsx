import Footer from "./component/footer";
import Header from "./component/header";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import FaqPage from "./pages/faq";
import { Fragment } from "react";
import ServicePage from "./pages/services";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <Fragment>
            <Header />
            <HomePage />
            <Footer />
          </Fragment>
        }
      />
      <Route
        path="/contact"
        element={
          <Fragment>
            <Header />
            <ContactPage />
            <Footer />
          </Fragment>
        }
      />
      <Route
        path="/about"
        element={
          <Fragment>
            <Header />
            <AboutPage />
            <Footer />
          </Fragment>
        }
      />
      <Route
        path="/faq"
        element={
          <Fragment>
            <Header />
            <FaqPage />
            <Footer />
          </Fragment>
        }
      />
      <Route
        path="/services"
        element={
          <Fragment>
            <Header />
            <ServicePage />
            <Footer />
          </Fragment>
        }
      />
      <Route path="*" element={<>Page NotFound</>} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
