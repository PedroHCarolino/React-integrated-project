import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import TelaHome from './pages/home/Home'




function App() {
  // const [modalIsOpen, setIsOpen] = useState(false);
  
  // function openModal() {
  //   setIsOpen(true);
  // } 
   
  // function closeModal() {
  //   setIsOpen(false);
  // }

  return (
    <>
    <BrowserRouter>
       <Routes>
         <Route path="/" index element={ <TelaHome /> }  />
       </Routes>
    </BrowserRouter> 
    </>
)};


export default App;
 