import {Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";

export default function App() {
  return (
	<>
	<Routes>
        <Route path="/" element={<Homepage />}/>
      </Routes>
	</>
  );
}

