import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import Campaigns from "./components/Campaigns";
import Favorites from "./components/Favorites";
import MobileApp from "./components/MobileApp";
import Cards from "./components/Cards";
import AppFooter from "./components/AppFooter";

function App() {
  return (
   <>
   <Header />
   <HeroSection />
   <Categories />
   <Campaigns />
  <Favorites />
  <MobileApp />
  <Cards />
  <AppFooter />
   </>
  );
}

export default App;