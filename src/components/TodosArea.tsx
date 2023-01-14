import { Empty } from './Empty';
import { Todo } from './Todo';
import styles from  './TodosArea.module.css';

interface Todo{
    id: string;
    content: string;
    complete: boolean;
}
  
interface TodosAreaProps{
    todos: Todo[];
    onDeleteTodo: (id: string) => void;
    onCheckTodo: (id: string) => void
}

export function TodosArea({todos, onDeleteTodo, onCheckTodo}: TodosAreaProps){
    const createdNum = todos.length;

    const completeNum = todos.filter(todo => {
        return todo.complete === true
    }).length;
    
    return (
        <div className={styles.todosArea}>
            <header className={styles.info}>
                    <strong>Tarefas Criadas <span>{createdNum}</span></strong>
                    <strong>Concluídas <span>{completeNum}</span></strong>
            </header>
            <div className={styles.todosContainer}>
                {createdNum === 0
                ? (<Empty />)
                : (todos.map(todo => {
                    return <Todo 
                                onDeleteTodo={onDeleteTodo}
                                onCheckTodo={onCheckTodo}
                                todo={todo}
                                key={todo.id}
                            />
                }))
                }
            </div>

        </div>
    )
}