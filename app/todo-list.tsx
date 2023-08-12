function asyncComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
	return fn as (arg: T) => R;
}

export default async function TodoList() {
	const res = await fetch('https://localhost:3001/api/todo/list');
	const data = await res.json();
	const { todos } = data;

	return (
		<div>
			<ul style={{ listStyleType: 'none', padding: 0 }}>
				{todos.map((todo: any) => (
					<li key={todo.id} style={{ padding: '5px 0' }}>
						{todo.name}
					</li>
				))}
			</ul>
		</div>
	);
}

// export default TodoList;
