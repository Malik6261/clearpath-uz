import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Majors from './pages/Majors';
import MajorDetail from './pages/MajorDetail';
import PracticalPaths from './pages/PracticalPaths';
import PathDetail from './pages/PathDetail';
import Exams from './pages/Exams';
import ExamDetail from './pages/ExamDetail';
import Scholarships from './pages/Scholarships';
import Resources from './pages/Resources';
import GapYear from './pages/GapYear';
import Contact from './pages/Contact';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/uz/" replace />} />
        <Route path="/:lang/*" element={
          <Layout>
            <Routes>
              <Route index element={<Home />} />
              <Route path="majors" element={<Majors />} />
              <Route path="majors/:id" element={<MajorDetail />} />
              <Route path="paths" element={<PracticalPaths />} />
              <Route path="paths/:id" element={<PathDetail />} />
              <Route path="exams" element={<Exams />} />
              <Route path="exams/:id" element={<ExamDetail />} />
              <Route path="scholarships" element={<Scholarships />} />
              <Route path="resources" element={<Resources />} />
              <Route path="gap-year" element={<GapYear />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<Navigate to="/uz/" replace />} />
            </Routes>
          </Layout>
        } />
        <Route path="*" element={<Navigate to="/uz/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;