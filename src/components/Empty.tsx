import styles from './Empty.module.css';
import clipboard from '../assets/Clipboard.png';

export function Empty(){
    return(
        <div className={styles.empty}>
            <img src={clipboard} alt={"Empty todos"}/>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}