import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accordion from './components/Accordion/Accordion';


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/accordion" element={<Accordion/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
