// import './App.css';
import Student from './component/Student';
import { Route, Routes } from "react-router-dom";
import Book from './component/Book';
import Menu from './component/Menu';
import RoutesMenu from './component/RoutesMenu'
function App() {
  return (
    <div >

      <RoutesMenu/>
    <Menu/>
    </div>
  );
}

export default App;
