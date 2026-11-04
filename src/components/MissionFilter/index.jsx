import './style.css'

function MissionFilter({ 
  statusFilter,
  onStatusChange,
  techFilter,
  onTechChange,
  difficultyFilter,
  onDifficultyChange, 
  sortedMissionsXp,
  onSortedMissionsXpChange
}) {
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
      <div className='mission-filters__group'>
        <label htmlFor='difficulty-filter'>Dificuldade:</label>
          <select
            id='difficulty-filter'
            value={difficultyFilter}
            onChange={(e) => onDifficultyChange(e.target.value)}>
            <option value='Todas'>Todas</option>
            <option value='Fácil'>Fácil</option>
            <option value='Média'>Média</option>
            <option value='Difícil'>Difícil</option>
          </select>
      </div>
      <div className='mission-filters__group'>
        <label htmlFor='difficulty-filter'>Ordenação:</label>
          <select
            id='difficulty-filter'
            value={sortedMissionsXp}
            onChange={(e) => onSortedMissionsXpChange(e.target.value)}>
            <option value='Nenhum'>Nenhum</option>
            <option value='Maior Xp'>Maior Xp</option>
            <option value='Menor Xp'>Menor Xp</option>
          </select>
      </div>
    </section>
  )
}

export default MissionFilter