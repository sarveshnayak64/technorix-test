import SearchBox from './SearchBox'

const SearchBar = ({departments, locations, functions, onSearchByText, onSearchByDepartment, onSearchByLocation, onSearchByFunction, searchArray, onRemoveFilter, onClearFilter}) => {


	return (
		<>
<div className=' search-box'>
    <div className='mb-3 row search-input'>
    <div className='col'>
  <input type="text" className='form-control' placeholder="Search for Job" onChange= {(e) => onSearchByText(e.target.value)} />
    </div>
</div>
<div className='mb-3 row search-input'>
  <div className='col'>
    <select className="form-select" aria-label="Default select example" onChange= {(e) => onSearchByDepartment(parseInt(e.target.value, 10))}>
  <option value="" hidden>Department</option>
  {departments.map((department) => (
  	<option key={department.id} value={department.id}>{department.title}</option>
  	))}
</select>
  </div>
  <div className='col'>
    <select className="form-select" aria-label="Default select example" onChange= {(e) => onSearchByLocation(parseInt(e.target.value, 10))}>
  <option value="" hidden>Location</option>
  {locations.map((location) => (
  	<option key={location.id} value={location.id} onSelect={() => console.log('dd')}>{location.title}</option>
  	))}
</select>
  </div>
  <div className='col'>
    <select className="form-select" aria-label="Default select example" onChange= {(e) => onSearchByFunction(parseInt(e.target.value, 10))}>
  <option value="" hidden>Function</option>
  {functions.map((func) => (
  	<option key={func.id} value={func.id}>{func.title}</option>
  	))}
</select>
  </div>
</div>
</div>

<SearchBox searchArray = {searchArray} onRemoveFilter = {onRemoveFilter} onClearFilter={onClearFilter}/>
</>
		)
}

export default SearchBar