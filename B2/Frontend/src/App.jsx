import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
	const URL = '/api/jokes'
	const [jokes, setJokes] = useState([])
	useEffect(() => {
		axios.get(URL)
		.then((response)=>{
			setJokes(response.data)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
	return (
		<>
			<h1>Jokes</h1>
			<p>Jokes: {jokes.length}</p>
			{
				jokes.map((joke, index) => (
					<div key={joke.id}>
						<h3>{joke.title}</h3>
						<p>{joke.content}</p>
					</div>
				))
			}
		</>
	)
}

export default App
