import data from '../../data/data'

export default function TodoList() {

    return(
        <div>
            {data.map(todo => {
                return(
                    <div key={todo.category}>
                        {todo.task}
                    </div>
                )
            })}
        </div>
    );
}