import { ArrayView, computed, useArrayRef, useRef } from 'alien-dom'

export function App() {
	const clicks = useRef(0)

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
			<h1>Hello, world!</h1>
			<div style={{ display: 'flex', gap: '10px' }}>
				<button onClick={() => clicks.value++}>Click me</button>
				<span>
					Clicks: <b>{clicks}</b>
				</span>
			</div>
			<TodoList />
		</div>
	)
}

function TodoList() {
	const todos = useArrayRef(['Eat a peach', 'Pet a kangaroo', 'Learn to snowboard'])

	return (
		<>
			<div>
				<input
					type="text"
					placeholder="Add a todo"
					onKeyDown={(event) => {
						if (event.key === 'Enter') {
							todos.unshift(event.currentTarget.value)
							event.currentTarget.value = ''
						}
					}}
					style={{
						width: '40ch',
					}}
				/>
			</div>
			<div
				style={{
					display: computed(() => (todos.length > 0 ? 'flex' : 'none')),
					flexDirection: 'column',
					borderBottom: '1px solid gray',
				}}
			>
				<ArrayView array={todos}>
					{(todo, key) => (
						<div
							key={key}
							style={{
								borderTop: '1px solid gray',
								padding: '3px 8px',
								width: '40ch',
							}}
							role="button"
							onClick={() => {
								const index = todos.indexOf(todo)
								todos.splice(index, 1)
							}}
						>
							{todo}
						</div>
					)}
				</ArrayView>
			</div>
		</>
	)
}
