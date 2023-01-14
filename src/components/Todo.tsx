import { Check, Trash } from 'phosphor-react';
import styles from './Todo.module.css';

interface TodoProps{
    todo: {
        id: string;
        content: string;
        complete: boolean;
    };

    onDeleteTodo: (id: string) => void;
    onCheckTodo: (id: string) => void;
}

export function Todo({todo, onDeleteTodo, onCheckTodo}: TodoProps){
    function handleDelete(){
        onDeleteTodo(todo.id);
    }

    function handleCheck(){
        onCheckTodo(todo.id);
    }
    
    return(
        <div className={styles.todo}>
            <button 
                onClick={handleCheck}
                className={todo.complete ? styles.todoCheckMarked : styles.todoCheck}
                type="button"
                >
                <Check size={16}/>
            </button>
            
            <p className={todo.complete ?  styles.todoContentFinished: styles.todoContent}>
                {todo.content}
            </p>
            
            <button
                onClick={handleDelete}
                className={styles.todoDelete}
                type="button"
                >
                <Trash size={24}/>
            </button>
        </div>
    )
}