import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
	const [data, setData] = React.useState<string | null>(null)

	const getData = () => {
		fetch(
			'http://localhost:8080/api/fetchItems?link=https://blog.roblox.com/feed/'
		)
			.then((result) => result.text())
			.then((res) => {
				setData(res)
			})
	}
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<button onClick={getData}>Click Me For Data</button>
				{data}
			</header>
		</div>
	)
}

export default App
