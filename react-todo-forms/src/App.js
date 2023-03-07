import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './NavBar';
import './App.css';
import { LandingPage } from './LandingPage';
// import { TodoListView } from './TodoList/TodoLists';
// import { AddTodoPage } from './TodoList/AddTodoPage';
// import { EditTodoPage } from './TodoList/EditTodoPage';
// import { FormsDashboard } from './Forms';
import { MyProfile } from './Profile';
// import TodoItems from './TodoList/todoitems';
import App1 from './TodoList/todo';
import { FormsDashboard } from './Forms/index';
// import {TodoForm} from './TodoList/todoitems';



function App2() {
  return (
    <div className="todo-and-forms">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<LandingPage />} />
          <Route path='todolist' element={<App1 />} />
          <Route path='forms' element={<FormsDashboard />} />
          <Route path='profile' element={<MyProfile />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App2;
