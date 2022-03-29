import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main'
import { Review } from './components/Review/Review'
import { Signin } from './components/Signin/Signin';

function App() {
  return (
    <>
      <Header />
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/signin/*' element={<Signin />} />
              <Route path='/review/*' element={<Review />} />
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
