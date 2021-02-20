import './App.css';
import Navbar from './components/Navbar';
import Quizcard from './components/Quizcard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="quiz-card-container">
        <Quizcard name="HTML"/>
        <Quizcard name="CSS" />
        <Quizcard name="JavaScript" />
      </section>
      <Footer />
    </div>
  );
}

export default App;
