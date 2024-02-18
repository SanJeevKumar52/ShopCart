import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScrenn from "./screens/Homescreen";

const App = () => {
  return (
    <>
      <Header />
      <HomeScrenn/>
      <Footer/>
    </>
  )
}

export default App

