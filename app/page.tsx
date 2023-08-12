import AddNewTodo from './add-new-todo';
import TodoList from './todo-list';

export default function Page() {
  return (
    <div className=''>
      <div className=''>
        <AddNewTodo />
        <TodoList />
      </div>
    </div>
  );
}
