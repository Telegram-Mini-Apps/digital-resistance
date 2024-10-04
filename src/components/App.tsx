import { Navigate, HashRouter, Routes, Route } from 'react-router-dom';

import IndexPage from '../pages/IndexPage/IndexPage';

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={IndexPage}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </HashRouter>
  );
}
