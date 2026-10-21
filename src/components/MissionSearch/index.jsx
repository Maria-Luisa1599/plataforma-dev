import './style.css'

function MissionSearch({ searchTerm, onSearchChange }) {
  return (
    <section className='mission-search'>
      <label htmlFor='mission-search'>Buscar missão</label>
      <input
        id='mission-search'
        type='text'
        placeholder='Digite o título da missão'
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      >
      </input>
      {
        searchTerm && (
          <button
            type='button'
            className='mission-search__clear'
            onClick={() => onSearchChange('')}
            >
              Limpar busca
            </button>
        )
      }
    </section>
  )
}

export default MissionSearch
