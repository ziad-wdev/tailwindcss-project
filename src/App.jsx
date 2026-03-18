import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Team from './components/Team';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
