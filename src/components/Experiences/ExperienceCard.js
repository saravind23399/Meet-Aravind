import React from 'react'

export default function ExperienceCard({
	image,
	company,
	workedAs,
	children,
	from,
	to
}) {
	return (
		<div className="card">
			<img
				src={image}
				className="card-img-top mt-3"
				alt="tricog"
				style={{
					width: '80%',
					alignSelf: 'center',
					maxHeight: '550px',
					maxWidth: '200px'
				}}
			/>
			<div className="card-body">
				<h3 className="card-title">{company}</h3>
				<h6 className="card-text text-dark">{workedAs}</h6>
				<p className="card-text text-dark text-align-justify">
					{children}
				</p>
				<p className="align-items-center mt-4 w-100">
					<span className="ml-2 text-dark">
						<b className="text-dark">From </b> {from}{' '}
						<b className="text-dark">To </b> {to}
					</span>
				</p>
			</div>
		</div>
	)
}
