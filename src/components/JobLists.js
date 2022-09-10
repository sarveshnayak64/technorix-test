

import JobList from './JobList'

const JobLists = ({jobs, departments}) =>{

	return (
		<>
			{departments.map((department,index) => (
				<div className='row' key={index}>
				{jobs.find(v => v.department.title === department.title) !== undefined && <h2 className="fw-bold job-title" >{department.title}</h2>}
				<ol className="list-group list-group" >
  				
				{jobs.map((job,index) => (
					<div key={index}>
					{job.department.id === department.id && <JobList key={index} job={job}/>}
					</div>
					)
				)}
				</ol>
				</div>
			))}
		</>
      
    )
}

export default JobLists