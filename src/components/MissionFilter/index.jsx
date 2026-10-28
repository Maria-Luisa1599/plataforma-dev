import './style.css'

function MissionFilter({statusFilter, onStatusChange, techFilter, onTechChange}) {
  return (
    <section className='mission-filters'>
      <div className='mission-filters__group'>
        <label htmlFor='status-filter'>
          Status
        </label>
        <select 
          id='status-filter'
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
        >
          <option value="Todas">Todas</option>
          <option value="Pendentes">Pendentes</option>
          <option value="Concluidas">Concluidas</option>
        </select>
      </div>
      <div className='mission-filters__group'>
        <label htmlFor='technology-filter'>Tecnologia:</label>
          <select 
            id='technology-filter'
            value={techFilter}
            onChange={(e) => onTechChange(e.target.value)}>
            {
                ['Todas', 'React', 'HTML', 'CSS', 'Git', 'Debug', 'JavaScript', 'IA', 'Python']
                .map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))
            }
          </select>
      </div>
    </section>
  )
}

export default MissionFilter