import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import SearchBar from './components/SearchBar'
import JobLists from './components/JobLists'
import JobDetails from './components/JobDetails'

const App = () => {
  const [jobs, setJobs] = useState([])
  const [searchArray, setSearchArray] = useState([{key: 'q',value: '',title: ''},{key: 'dept',value: '',title: ''},{key: 'loc',value: '',title: ''},{key: 'fun',value: '',title: ''}])
  const [departments, setDepartments] = useState([])
  const [locations, setLocations] = useState([])
  const [functions, setFunctions] = useState([])

  useEffect(() => {
    const fetchJobs = async () => {
      var url = 'https://teknorix.jobsoid.com/api/v1/jobs'
      var count = 0

      searchArray.map((search, index) => {
        
        if(search.value !== ''){
            count === 0 ? url = url+"?"+search.key+"="+search.value : url = url+"&"+search.key+"="+search.value
            count = count + 1
          }
          return url
      }) 
      count = 0
      const res = await fetch(url)
      var data = await res.json()
      
      return data
    }
    const fetchDepartments = async () => {
      const res = await fetch('https://teknorix.jobsoid.com/api/v1/departments')
      const data = await res.json()
      return data
    }
    const fetchLocations = async () => {
      const res = await fetch('https://teknorix.jobsoid.com/api/v1/locations')
      const data = await res.json()
      
      return data
    }
    const fetchFunctions = async () => {
      const res = await fetch('https://teknorix.jobsoid.com/api/v1/functions')
      const data = await res.json()
      
      return data
    }

    const getJobs = async () => {
      const jobsFromServer = await fetchJobs();
      setJobs(jobsFromServer)
    }
    const getDepartments = async () => {
      const departmentsFromServer = await fetchDepartments();
      setDepartments(departmentsFromServer)
    }
    const getLocations = async () => {
      const locationsFromServer = await fetchLocations();
      setLocations(locationsFromServer)
    }
    const getFunctions = async () => {
      const functionsFromServer = await fetchFunctions();
      setFunctions(functionsFromServer)
    }
    getJobs()
    getDepartments()
    getLocations()
    getFunctions()
  }, [searchArray])

  
    const onSearchByText = (id) => {
      setSearchArray(searchArray.map(item => 
        item.key === 'q' ? item = {...item,value: id} : item
        ))
    }
    const onSearchByDepartment = (id) => {
      var departmentTitle;
      departments.map(department => 
        department.id === id ? departmentTitle = department.title : ''
        )
      setSearchArray(searchArray.map(item => 
        item.key === 'dept' ? item = {...item,value: id, title: departmentTitle} : item
        ))
    }
    const onSearchByLocation = (id) => {
       var locationTitle;
      locations.map(location => 
        location.id === id ? locationTitle = location.title : ''
        )
      setSearchArray(searchArray.map(item => 
        item.key === 'loc' ? item = {...item,value: id, title: locationTitle} : item
        ))
    }
    const onSearchByFunction = (id) => {
       var functionTitle;
      functions.map(func => 
        func.id === id ? functionTitle = func.title : ''
        )
      setSearchArray(searchArray.map(item => 
        item.key === 'fun' ? item = {...item,value: id, title: functionTitle} : item
        ))
    }

    const onRemoveFilter = (value) => {
        setSearchArray(searchArray.map(item => 
            item.value === value ? item = {...item,value: ''} : item
          ))
    }
    const onClearFilter = () => {
        setSearchArray(searchArray.map(item => 
            item = {...item,value: ''}
          ))
    }


  return (
    <Router>
    
   
    <Routes>
    <Route path='/' exact element={
        <div className='container'>
    <SearchBar departments = {departments} locations = {locations} functions = {functions} onSearchByText = {onSearchByText} onSearchByDepartment = {onSearchByDepartment} onSearchByLocation = {onSearchByLocation} onSearchByFunction = {onSearchByFunction} searchArray = {searchArray} onRemoveFilter = {onRemoveFilter} onClearFilter = {onClearFilter}/>
    <JobLists jobs ={jobs} departments = {departments} />
    </div>
      } />
    <Route path='/:jobId' element={<JobDetails/>} />
    </Routes>

</Router>
  );
}

export default App;
