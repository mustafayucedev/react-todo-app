import { useState , useEffect } from "react";
import "App.css";
import Header from 'components/Header/Index';
import Form from 'components/Form/Index';
import List from 'components/List/Index';

function App() {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([initialState]);
  const [editTodo,setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
     <header>
       <Header />
     </header>
      <main>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <section>
          <List 
            todos={todos} 
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
