import data from '../../data/data'

export default function TodoList() {

    return(
        <div>
            {data.map(todo => {
                return(
                    <div className={todo.category}>
                        {todo.task}
                    </div>
                )
            })}
        </div>
    );
}