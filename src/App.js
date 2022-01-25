import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import OnlineCourses from './Components/OnlineCourses/OnlineCourses';
import OnsiteCourses from './Components/OnsiteCourses/OnsiteCourses';
import Footer from './Components/Share/Footer/Footer';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <OnlineCourses></OnlineCourses>
      <OnsiteCourses></OnsiteCourses>
      <Footer></Footer>
    </div>
  );
}

export default App;
