import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CoursePage } from './pages/CoursePage';
import { TeacherPage } from './pages/TeacherPage';
import { PricePage } from './pages/PricePage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course" element={<CoursePage />} />
            <Route path="/teacher" element={<TeacherPage />} />
            <Route path="/price" element={<PricePage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </div>
  );
}

export default App;
