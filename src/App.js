import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from  './Components/Navbar'
import SearchBox from './Components/SearchBox'
import SocialMedia from './Components/SocialMedia';

function App() {
  return (
    <>
   <Navbar />
   <SearchBox />
   <SocialMedia />
   </>
  );
  
}

export default App;
