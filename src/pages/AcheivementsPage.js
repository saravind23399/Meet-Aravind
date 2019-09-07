import React from 'react'
import AchievementCard from '../components/AchievementsPage/AchievementCard'

export default function AcheivementsPage() {
	return (
		<div id="achievements" className="container">
			<h3 className="intro-title text-white">My Achievements</h3>
			<hr />
			<div className="row">
				<div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
					<AchievementCard
						icon="briefcase"
						title="Technical Symposium management website ( Gyanmitra '19 )"
						summary="A Complete event management website for Gyanmitra '19"
						link="https://gyanmitra19.herokuapp.com/"
						from="December 2018"
						to="February 2019"
						myRole="Full Stack Developer"
						contribution="I leaded the team for this project. It was my first project on full stack development ( MEAN Stack to be precise ). I came to know the power of Javascript and its incredible flexibility. "
						technologiesUsed={['JavaScript', 'Node.js']}>
						An Event Management site for a technical symposium held
						at Mepco Schlenk Engineering College
					</AchievementCard>
				</div>
			</div>
		</div>
	)
}
