import Header from "./components/header/Header";
import Episodes from "./components/episodes/Episodes";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import './app.scss'
import { About } from "./components/about/About";
import Comments from "./components/comments/Comments";
function App() {
  return (
    <div className="conteiner">
      <Header />
      <Banner />
      <Episodes />
      <About/>
      <Comments/>
      <Footer />
    </div>

  );
}

export default App;
