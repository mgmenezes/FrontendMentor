import "./App.css";
// import { MinimalBlogCard } from "./components/MinimalBlogCard/MinimalBlogCard";
import { BusinessBlogCard } from "./components/BusinessBlogCard/BusinessBlogCard";
// import Cactus from "./assets/Cactus.jpg";

function App() {
  return (
    <>
      {/* <MinimalBlogCard title="Embracing Minimalism" imageSrc={Cactus} /> */}

      <BusinessBlogCard />
    </>
  );
}

export default App;
