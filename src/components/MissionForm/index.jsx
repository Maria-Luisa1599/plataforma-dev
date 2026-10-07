import './style.css'
import { useState } from 'react'

function MissionForm({ onAddMission }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [technology, setTechnology] = useState('React')
  const [difficulty, setDifficulty] = useState('Fácil')
  const [xp, setXp] = useState(50)

  function handleSubmit(event) {
    event.preventDefault()

    if (!title.trim() || !description.trim()) {
        alert('Preencha todos os campos!')
        return   
    }
        onAddMission?.({
            id: Date.now(),
            title: title.trim(),
            description: description.trim(),
            technology,
            difficulty,
            xp: Number(xp),
            completed: false,
        })
        
        setTitle('')
        setDescription('')
        setTechnology('React')
        setDifficulty('Fácil')
        setXp(50)
  }

  return (
    <section className='mission-form__section'>
      <div className='mission-form__heading'>
        <p>Nova missão</p>
        <h2>Crie seu próximo desafio</h2>
      </div>
      <form className='mission-form' onSubmit={handleSubmit}>
        <div className='mission-form__group'>
          <label htmlFor='title'>Título:</label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Ex.: Criar meu primeiro formulário'
            required
          />
        </div>
        <div className='mission-form__group'>
          <label htmlFor='description'>Descrição:</label>
          <textarea
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Descreva o desafio da missão'
            required
          />
        </div>
        <div className='mission-form__group'>
          <label htmlFor='technology'>Tecnologia:</label>
          <select 
            id='technology'
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}>
            {
                ['React', 'HTML', 'CSS', 'Git', 'Debug', 'JavaScript', 'IA', 'Python']
                .map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))
            }
          </select>
        </div>
        <div className='mission-form__group'>
          <label htmlFor='difficulty'>Dificuldade:</label>
          <select id='difficulty' value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value='Fácil'>Fácil</option>
            <option value='Médio'>Médio</option>
            <option value='Difícil'>Difícil</option>
          </select>
        </div>
        <div className='mission-form__group'>
          <label htmlFor='xp'>XP:</label>
          <input
            type='number'
            id='xp'
            min='0'
            value={xp}
            onChange={(e) => setXp(e.target.value)}
            required
          />
        </div>
        <button className='mission-form__button' type='submit'>Adicionar missão</button>
      </form>
    </section>
  )
}

export default MissionForm
