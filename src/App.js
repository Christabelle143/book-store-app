import { useSelector } from 'react-redux';
import {
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Books bookList={state.book} />} />
          <Route path="/categories" element={<Categories categories={state.categories} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
