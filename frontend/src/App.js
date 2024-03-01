import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/Homescreen";

const App = () => {
  return (
    <>
      <Header />
      <HomeScreen/>
      <Footer/>
    </>
  )
}

export default App

