import './App.css'
import { MinimalBlogCard } from './components/MinimalBlogCard/MinimalBlogCard'
import Cactus from './assets/Cactus.jpg'

function App() {

  return (
    <>
      <MinimalBlogCard title="Embracing Minimalism" imageSrc={Cactus} />
    </>
  )
}

export default App
