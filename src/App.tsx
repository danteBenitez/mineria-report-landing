import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { Header } from './features/ui/header';
import { Hero } from './features/ui/hero';
import { Main } from './features/ui/main';

function App() {
  return (
    <div>
      <Header />
      <div className='p-0 m-0 w-100'>
        <Hero />
        <Main />
      </div>
    </div>
  );
}

export default App
