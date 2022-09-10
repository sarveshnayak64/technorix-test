import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import SuggestedJobs from './SuggestedJobs'

const JobDetails = () => {
	const {jobId} = useParams()
	const [jobDetails, setJobDetails] = useState({
    "id": '',
    "code": "",
    "title": "",
    "description": "",
    "industry": "",
    "postedDate": "",
    "closingDate": null,
    "attributes": [],
    "location": {
        "id": '',
        "title": "",
        "city": "",
        "state": "",
        "country": "",
        "zip": ""
    },
    "department": {
        "id": "",
        "title": ""
    },
    "division": [],
    "function": {
        "id": "",
        "title": ""
    },
    "type": "",
    "positions": "",
    "experience": "",
    "salary": "",
    "hostedUrl": "",
    "applyUrl": "",
    "slug": "",
    "company": ""
})

	useEffect(() => {
		const fetchJobDetails = async () => {
      const res = await fetch('https://teknorix.jobsoid.com/api/v1/jobs/'+jobId);
      const data = await res.json()
      return data
    }

		const getJobDetails = async () => {
      const jobDetailsFromServer = await fetchJobDetails();
      setJobDetails(jobDetailsFromServer)
    }

    getJobDetails()
	},[jobId])
	
  

	return (
			<div className="container">
			<div>
			<Link to="/"><i className="fa fa-arrow-left"></i> Go Back</Link>
			<h2 className="fw-bold job-detail-heading">{jobDetails.title}</h2>
			<span className="list-detail">
	      <i className="fas fa-building"></i>
	      <span>{jobDetails.department.title}</span>
	      </span>
	      <span className="list-detail">
	      <i className="fa fa-map-marker"></i>
	      <span>{jobDetails.location.city}, {jobDetails.location.state}</span>
	      </span>
	      <span className="badge bg-secondary">{jobDetails.type}</span><br/>
	      <a href={jobDetails.applyUrl} className="btn btn-info rounded-pill btn-job-detail-apply">Apply</a>
	      
			</div>
			<hr/>
			<div className="row col-12">
			<div className="col-8">
			<div className="job-detail-content-box" dangerouslySetInnerHTML={{__html: jobDetails.description}}>

			</div>
			</div>
			<div className="col-4">
			{jobDetails.department.id !== '' && <SuggestedJobs departmentId={jobDetails.department.id}/>}
			
			<div className="share-job-box">
			<h5 className="fw-bold job-opening-title" >SHARE JOB OPENINGS</h5>
			<br/>
			<span className="share-job-social-icon">
			<i className="fab fa-facebook-square"></i>
			</span>
			<span className="share-job-social-icon">
			<i className="fab fa-instagram"></i>
			</span>
			<span className="share-job-social-icon">
			<i className="fab fa-twitter"></i> 
			</span>
			</div>
			</div>
			</div>

			</div>
		)
}

export default JobDetails
