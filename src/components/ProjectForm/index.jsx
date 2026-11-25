import './style.css'
import { useState, useEffect } from 'react'

function ProjectForm({ onAddProject, editProject, onUpdateProject }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [technologies, setTechnologies] = useState('')
  const [status, setStatus] = useState('Em andamento')
  const [githubUrl, setGithubUrl] = useState('')
  const [deployUrl, setDeployUrl] = useState('')

  
  useEffect(() => {
    if(editProject){
      setTitle(editProject.title)
      setDescription(editProject.description)
      setTechnologies(editProject.technologies.join(", "))
      setStatus(editProject.status)
      setGithubUrl(editProject.githubUrl || '')
      setDeployUrl(editProject.deployUrl || '')
    }
  }, [editProject])

  function handleSubmit(event) {
    event.preventDefault()

    if((deployUrl && !deployUrl.startsWith('http://') && !deployUrl.startsWith('https://')) || (githubUrl && !githubUrl.startsWith('http://') && !githubUrl.startsWith('https://'))){
      alert('Digite uma URL válida')
      return   
    }

    if (!title.trim() || !description.trim()) {
        alert('Preencha todos os campos!')
        return   
    }
    
    if(editProject){
        onUpdateProject?.({
          id: editProject.id,
          title: title.trim(),
          description: description.trim(),
          technologies: technologies.split(",").map((techn) => techn.trim()),
          status,
          githubUrl,
          deployUrl,
          completed: editProject.completed,
        })
      }else{
        onAddProject?.({
          id: Date.now(),
          title: title.trim(),
          description: description.trim(),
          technologies: technologies.split(",").map((techn) => techn.trim()),
          status,
          githubUrl,
          deployUrl,
        })
      }
        
        setTitle('')
        setDescription('')
        setTechnologies('')
        setStatus("Em andamento")
        setGithubUrl('')
        setDeployUrl('')
  }

  return (
    <section className='project-form__section'>
      <div className='project-form__heading'>
        <p>Novo Projeto</p>
        <h2>Crie seu próximo desafio</h2>
      </div>
      <form className='project-form' onSubmit={handleSubmit}>
        <div className='project-form__group'>
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
        <div className='project-form__group'>
          <label htmlFor='description'>Descrição:</label>
          <textarea
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Descreva o desafio do projeto'
            required
          />
        </div>
        <div className='project-form__group'>
          <label htmlFor='technologies'>Tecnologias:</label>
          <input
            type='text'
            id='technologies'
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
            placeholder='Separe as tecnologias por vírgula. (Ex.: React, JavaScript, Python)'
            required
          />
        </div>
        <div className='project-form__group'>
          <label htmlFor='xp'>Status:</label>
          <select id='status' value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value='Em andamento'>Em andamento</option>
            <option value='Concluído'>Concluído</option>
          </select>
        </div>
        <div className='project-form__group'>
          <label htmlFor='githubUrl'>URL do GitHub:</label>
          <input
            type='text'
            id='githubUrl'
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            placeholder='https://github.com/usuario/projeto'
          />
        </div>
        <div className='project-form__group'>
          <label htmlFor='deployUrl'>URL do deploy:</label>
          <input
            type='text'
            id='deployUrl'
            value={deployUrl}
            onChange={(e) => setDeployUrl(e.target.value)}
            placeholder='https://seu-projeto.com'
          />
        </div>
        <button className='project-form__button' type='submit'>
          {editProject ? 'Salvar alterações' : 'Adicionar Projeto'}
        </button>
      </form>
    </section>
  )
}

export default ProjectForm
