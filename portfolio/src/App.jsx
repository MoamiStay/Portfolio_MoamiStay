import "./App.css";
import Introduction from "./Components/Introduction/Introduction";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Pattern from "./Components/Pattern/Index"

const App = () => {
    return (
        <>
        <Header />
        <Introduction />    
        <Cards />  
        <Pattern />
        <Footer /> 
        </>
    )
}

export default App;