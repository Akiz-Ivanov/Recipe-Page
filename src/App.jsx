import './App.css'
import Header from './components/Header'
import Preparation from './components/Preparation'
import Ingredients from './components/Ingredients'
import Instructions from './components/Instructions'
import Nutrition from './components/Nutrition'

function App() {

  return (
    <main>
      <img src="/src/assets/images/image-omelette.jpeg" alt="Omelette." />
      <Header />
      <Preparation />
      <Ingredients />
      <Instructions />
      <Nutrition />
    </main>
  )
}

export default App
