import React from 'react'
import SkillsIndicator from '../components/MySkillsPage/SkillsIndicator'

export default function SkillsPage() {
	return (
		<div className="container">
			<h3 className="intro-title text-white">Skills</h3>
			<hr />
			<div className="row">
				<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
					<div className="skill-mf">
						<SkillsIndicator
							isIconEnabled={true}
							icon="favorite"
							title="Love for Programming"
							degree="Advanced"
						/>
						<SkillsIndicator title="React.js" degree="Advanced" />
						<SkillsIndicator title="Angular 8" degree="Advanced" />
						<SkillsIndicator
							title="React Native"
							degree="Advanced"
						/>
						<SkillsIndicator
							title="Express.js"
							degree="Intermediate"
						/>
						<SkillsIndicator
							title="Mongo DB"
							degree="Intermediate"
						/>
						<SkillsIndicator title="ASP .NET" degree="Advanced" />
						<SkillsIndicator title="C# .NET" degree="Advanced" />
						<SkillsIndicator
							title="Visual Basic .NET"
							degree="Advanced"
						/>
						<SkillsIndicator title="Hadoop" degree="Beginner" />
					</div>
				</div>
				<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
					<div className="skill-mf">
						<SkillsIndicator
							title="JavaScript"
							degree="Intermediate"
						/>
						<SkillsIndicator
							title="Node.js"
							degree="Intermediate"
						/>
						<SkillsIndicator title="MySQL" degree="Intermediate" />
						<SkillsIndicator title="HTML" degree="Advanced" />
						<SkillsIndicator title="CSS3" degree="Advanced" />
						<SkillsIndicator
							title="Android"
							degree="Intermediate"
						/>
						<SkillsIndicator
							title="Machine Learning"
							degree="Beginner"
						/>
						<SkillsIndicator
							title="Big Data Analytics"
							degree="Beginner"
						/>
						<SkillsIndicator
							title="Appache Cassandra"
							degree="Beginner"
						/>
						<SkillsIndicator
							title="Arduino"
							degree="Intermediate"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
