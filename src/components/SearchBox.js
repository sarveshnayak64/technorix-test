
import Chip from './Chip'

const SearchBox = ({searchArray , onRemoveFilter, onClearFilter}) => {

	
	return (
			<div className=' search-box'>
	< >
	{searchArray.map((chip,index)=> (
		<div className="d-inline" key={index}>
	  		{chip.value !== '' && chip.key !== 'q' ? <Chip value={chip} onRemoveFilter = {onRemoveFilter}/> : ''}
	  	</div>
	))}
	</>
	<span className="link-success search-box-clear-all" onClick= {onClearFilter}>Clear All</span>
</div>
		)
}

export default SearchBox