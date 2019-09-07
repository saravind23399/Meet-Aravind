import React from 'react'
import RootNavBar from './components/common/navbar'
import IntroPage from './pages/IntroPage'

import './styles/index.css'
import AboutMePage from './pages/AboutMePage'

function App() {
	return (
		<div style={{ background: 'black' }}>
			<RootNavBar />
			<IntroPage />
			<AboutMePage />
		</div>
	)
}

export default App
