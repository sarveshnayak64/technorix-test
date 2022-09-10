
const Chip = ({ value, onRemoveFilter}) => {
		return (
			<div className="d-inline chip">
					{value.title}
	  <i className="chip-close fas fa-times" onClick={()=>onRemoveFilter(value.value)}></i>
	</div>
			)
}

export default Chip