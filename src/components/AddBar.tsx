import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from "./AddBar.module.css";
import { PlusCircle } from "phosphor-react";

interface AddBarProps{
    onAddTodo: (content: string) => void;
}

export function AddBar({ onAddTodo }: AddBarProps){
    const [content, setContent] = useState('');
    
    function handleChangeContent(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('');
        setContent(event.target.value);
    }

    function handleFormSubmit(event: FormEvent){
        event.preventDefault();
        onAddTodo(content);
        setContent('');

    }

    function handleInvalidContent(event: InvalidEvent<HTMLInputElement>){
        event.target.setCustomValidity('Esse campo é obrigatório.');
    }

    const isContentEmpty = content.length === 0;

    return (
        <form 
            className={styles.form}
            onSubmit={handleFormSubmit}
            >
            <input 
                type="text"
                name="content"
                placeholder="Adicione uma nova tarefa"
                value={content}
                onChange={handleChangeContent}
                onInvalid={handleInvalidContent}
                required
            />

            <button
                disabled={isContentEmpty}
                type="submit"
                >
                Criar
                <PlusCircle size={16}/>
            </button>
        </form>
    )
}