import { useEffect } from "react";
import style from "components/Form/style.module.css";
import { v4 as uuidv4 } from 'uuid';

function Index( {input, setInput, todos, setTodos, editTodo, setEditTodo} ) {

    const updateTodo = (title,id,completed) => {
        const newTodo = todos.map(todo => {
            return todo.id === id ? {title,id,completed} : todo;
        })
        setTodos(newTodo);
        setEditTodo("");
    };

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title)
        }
        else {
            setInput("");
        }
    },[setInput,editTodo]);
    

    const onChangeInput = (e) => {
        setInput(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
            setInput("");
        }
        else {
            updateTodo(input, editTodo.id, editTodo.completed);
        }
    };

  return (
    <>
        <section>
            <form onSubmit={onFormSubmit} className={style.form}>
                <input 
                    className={style.input}
                    type="text" 
                    placeholder="Enter a Todo.." 
                    value={input} 
                    onChange={onChangeInput} 
                    required
                 />
                <button className={style.button} type="submit">
                    {editTodo ? "OK" : "ADD"}  
                </button>
            </form>
        </section>
    </>
  )
}

export default Index