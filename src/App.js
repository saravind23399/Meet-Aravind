import React from 'react'
import RootNavBar from './components/common/navbar'
import IntroPage from './pages/IntroPage'

import './styles/index.css'
import AboutMePage from './pages/AboutMePage'
import SkillsPage from './pages/SkillsPage'
import AcheivementsPage from './pages/AcheivementsPage'
import WhatImLookingForPage from './pages/WhatImLookingForPage'
import ExperiencePage from './pages/ExperiencesPage'

function App() {
	return (
		<div style={{ background: 'black' }}>
			<RootNavBar />
			<div id="home" className="pt-5 pb-5">
				<IntroPage />
			</div>
			<div id="whoami" className="pt-5 pb-5">
				<AboutMePage />
			</div>
			<div id="achievements" className="pt-5 pb-5">
				<AcheivementsPage />
			</div>
			<div id="myskills" className="pt-5 pb-5">
				<SkillsPage />
			</div>
			<div id="experiences" className="pt-5 pb-5">
				<ExperiencePage />
			</div>
			<div id="whatimlookingfor" className="pt-5 pb-5">
				<WhatImLookingForPage />
			</div>
		</div>
	)
}

export default App
