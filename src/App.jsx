import React from 'react';
import { Route, Routes } from 'react-router-dom';

import RequestList from './components/RequestsList/RequestsList.component.jsx';
import Header from './components/Header/Header.component.jsx';
import RequestForm from './components/RequestForm/RequestForm.component.jsx';

import './App.css';

function App() {
	return (
		<>
			<Header />
			<main className='main'>
				<Routes>
					<Route path='/' element={<RequestList />} />
					<Route path='/request-form' element={<RequestForm />} />
					<Route path='/update/:id' element={<RequestForm />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
