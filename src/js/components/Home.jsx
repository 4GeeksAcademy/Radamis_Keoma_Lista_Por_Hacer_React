import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {
	const [valorInput, setValorInput] = useState([
		{
			id: 1,
			texto: 'Arreglar la cama',
			estado: 'todo',
		},
	])

	const [nuevaTarea, setnuevaTarea] = useState('')

	function funOnKeyDown(event) {

		if (event.code === 'Enter') {
			if (nuevaTarea.trim() === ' ') {
				alert('Debes escribir el nombre de la tarea!')
				return
			}

			setValorInput([
				...valorInput,
				{
					id: valorInput.length + 1,
					texto: nuevaTarea,
					estado: 'todo'
				},
			])
			setnuevaTarea('')
		}
	}

	function eliminarTarea(id) {
		const newTareas = valorInput.filter((tarea) => tarea.id !== id);
		setValorInput(newTareas);
	}

	return (
		<div>
			<div className="container contenedor">
				<ul>
				<input
					type="text"
					value={nuevaTarea}
					onKeyDown={funOnKeyDown} onChange={(event) => setnuevaTarea(event.target.value)} placeholder='No hay tareas, añadir tareas' />
				{valorInput.map((valor) => (
					<div key={valor.id}>
						<li><p>{valor.texto}
						<button className="X"
							onClick={() => eliminarTarea(valor.id)}>x</button></p></li>
					</div>

				))}
				</ul>
			</div>

		</div>
	);

};



export default Home;