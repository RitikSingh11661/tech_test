import './App.css';
import { Navbar } from './components/Navbar';
import { CreateAds } from './pages/CreateAds';
import { Dashboard } from './pages/Dashboard';
import { Route, Routes } from 'react-router-dom'
import { SuccessfullAdd } from './pages/SuccessfullAdd';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exect path='/' element={<Dashboard />} />
        <Route exect path='/createAds' element={<CreateAds />} />
        <Route exect path='/successfullAdd' element={<SuccessfullAdd/>} />
      </Routes>
    </div>
  );
}

export default App;
