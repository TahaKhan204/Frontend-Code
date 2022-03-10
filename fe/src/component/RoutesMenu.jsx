import Student from './Student';
import { Route, Routes } from "react-router-dom";
import Book from './Book';
function RoutesMenu() {
  return (
    <div >

      <Routes>
				<Route exact path="/student" element={<Student/>} />
        
				<Route exact path="/books" element={<Book/>} />
      </Routes>
    </div>
  );
}

export default RoutesMenu;
