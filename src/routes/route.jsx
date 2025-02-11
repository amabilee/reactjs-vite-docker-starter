import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Base
} from './private_route.jsx'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/base" element={<Base />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;