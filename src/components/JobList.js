import { Link } from 'react-router-dom'

const JobList = ({job}) => {
	return (
		<li className="list-group-item d-flex justify-content-between align-items-start border-0">
    <div className="ms-2 me-auto">
      <h4 className="fw-bold">{job.title}</h4>
      <span className="list-detail">
      <i className="fas fa-building"></i>
      <span>{job.department.title}</span>
      </span>
      <span className="list-detail">
      <i className="fa fa-map-marker"></i>
      <span>{job.location.title}</span>
      </span>
      <span className="badge bg-secondary">{job.type}</span>
    </div>
    <a href={job.applyUrl} className="btn btn-outline-primary rounded-pill">Apply</a>
    <Link to={`/${job.id}`} className="link-secondary btn-job-view rounded-pill">View</Link>
  </li>
	)
}

export default JobList