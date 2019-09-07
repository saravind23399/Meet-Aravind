import React from 'react'
import RootNavBar from './components/common/navbar'
import IntroPage from './pages/IntroPage'

import './styles/index.css'
import AboutMePage from './pages/AboutMePage'
import SkillsPage from './pages/SkillsPage'
import AcheivementsPage from './pages/AcheivementsPage'

function App() {
	return (
		<div style={{ background: 'black' }}>
			<RootNavBar />
			<IntroPage />
			<div className="pt-5 pb-5">
				<AboutMePage />
			</div>
			<div className="pt-5 pb-5">
				<SkillsPage />
			</div>
			<div className="pt-5 pb-5">
				<AcheivementsPage />
			</div>
		</div>
	)
}

export default App
