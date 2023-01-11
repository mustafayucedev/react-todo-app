import { BsCheck2Circle } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";

import style from 'components/List/style.module.css';

function Index( {todos, setTodos, setEditTodo} ) {

    const handleCompleted = (todo) => {
        setTodos (
            todos.map((item) => {
                if(item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        )
    }

    const handleEdit = ( {id} ) => {
        const findTodo = todos.find(todo => todo.id === id);
        setEditTodo(findTodo);
    }

    const handleDelete = ( {id} ) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

  return (
    <>
        {todos.map((todo) => (
            <li key={todo.id} className={style.todos}>
                <input 
                type="text"
                value={todo.title} 
                onChange={(e) => e.preventDefault()} 
                className={`${todo.completed ? "completed" : ""}`}
                />
                <div>
                    <button onClick={() => handleCompleted(todo)}>
                        <BsCheck2Circle />
                    </button>
                    <button onClick={() => handleEdit(todo)}>
                        <CiEdit />
                    </button>
                    <button onClick={() => handleDelete(todo)}>
                        <TiDeleteOutline />
                    </button>
                </div>
            </li>
        )    
        )}
    </>
  )
}

export default Index