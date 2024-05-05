import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './App.css';
import { Header } from './features/ui/header/header';
import { Hero } from './features/ui/hero/hero';
import { Main } from './features/ui/main-content/main';

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
