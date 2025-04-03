import Header from "./components/header/Header";
import Episodes from "./components/episodes/Episodes";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import './app.scss'
function App() {
  return (
    <div className="conteiner">
      <Header />
      <Banner />
      <Episodes />
      <Footer />
    </div>

  );
}

export default App;
