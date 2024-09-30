import './App.css'
import {ImageProvider} from "./context/imageContextProvider"
import MenuSlider from './components/common/MenuSlider'
import Header from './components/layouts/Header'
import Home from './pages/home'
function App() {
  

  return (
    <>
    <Header /> 
    <Home />
    <ImageProvider >
      <MenuSlider/>
    </ImageProvider>
    </>
  )
}

export default App
