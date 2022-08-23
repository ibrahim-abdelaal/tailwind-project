import './App.css';
import { HomePage } from './pages/homePage';
import { NavBar } from './components/organisms/NavBar';
import { Footer } from './components/organisms/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
