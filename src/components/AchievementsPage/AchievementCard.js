import React from 'react'

export default function AchievementCard({
	children,
	icon,
	title,
	link,
	idx,
	summary,
	from,
	to,
	myRole,
	contribution,
	technologiesUsed
}) {
	return (
		<span>
			<div
				className="modal fade bg-dark"
				id={`modal${idx}`}
				tabindex="-1"
				role="dialog"
				aria-labelledby={`modalLabel${idx}`}
				aria-hidden="true">
				<div
					className="modal-dialog modal-dialog-centered"
					role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h4 id={`modalLabel${idx}`}>{title}</h4>
							<button
								type="button"
								className="close text-dark"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true" className="text-dark">
									&times;
								</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="lead font-weight-bold text-dark">
								Summary
							</div>
							<p className="text-dark lead">{summary}</p>
							<div className="lead font-weight-bold text-dark">
								Timespan
							</div>
							<p className="text-dark lead">
								From <b>{from}</b> To <b>{to}</b>
							</p>
							<div className="lead font-weight-bold text-dark">
								My Role
							</div>
							<p className="text-dark lead">{myRole}</p>
							<div className="lead font-weight-bold text-dark">
								Contribution
							</div>
							<p className="text-dark lead">{contribution}</p>
							<div className="lead font-weight-bold text-dark">
								Technology Stack Used
							</div>
							<div className="mt-3">
								{technologiesUsed.map((technology) => (
									<span className="badge badge-pill badge-dark p-3 mr-3 mt-2">
										{technology}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="service-box">
				<div className="service-ico">
					<span className="ico-circle">
						<i className={`ion-${icon} text-dark`}></i>
					</span>
				</div>
				<div className="service-content">
					<h2 className="s-title">{title}</h2>
					<p className="text-center text-truncate">
						<a href={link}>{link}</a>
					</p>
					<p className="s-description text-center">{children}</p>
					<div className="text-right mt-5">
						<button
							className="btn btn-primary"
							data-toggle="modal"
							data-target={`#modal${idx}`}>
							<span className="d-flex align-items-center">
								Know More
								<i class="material-icons ml-4">
									keyboard_arrow_right
								</i>
							</span>
						</button>
					</div>
				</div>
			</div>
		</span>
	)
}
