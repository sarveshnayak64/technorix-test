import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const SuggestedJobs = ({departmentId}) => {
	const [suggestedJobs, setSuggestedJobs] = useState([]);

	useEffect((departmentId) => {
		const fetchJobs = async() => {
		const res = await fetch('https://teknorix.jobsoid.com/api/v1/jobs?dept='+departmentId)
		const data = await res.json()

		return data
	}

		const getJobs = async () => {
			const jobsFromServer = await fetchJobs()
			setSuggestedJobs(jobsFromServer);
		}

		getJobs()
	},[]) 

	return(
			<div className="search-box">
			<h5 className="fw-bold job-opening-title" >OTHER JOB OPENINGS</h5>
			{suggestedJobs.map((suggestedJob)=> (
				<li className="list-group-item job-opening-list-item align-items-start border-0" key= {suggestedJob.id}>
    <div className="ms-2 me-auto">
      <Link to={`/${suggestedJob.id}`} className="fw-bold job-opening-list-title">{suggestedJob.title}</Link><br/>
      <span className="job-opening-list-detail">
      <i className="fas fa-building"></i>
      <span>{suggestedJob.department.title}</span>
      </span>
      <span className="job-opening-list-detail">
      <i className="fa fa-map-marker"></i>
      <span>{suggestedJob.location.city} {suggestedJob.location.state}</span>
      </span>
      
    </div>
  </li>
				))
			}
			</div>
		)
}

export default SuggestedJobs
