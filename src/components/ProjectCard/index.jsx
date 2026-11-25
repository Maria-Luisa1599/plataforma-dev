import './style.css'

function ProjectCard ({title, description, technologies, status, onDelete, onEdit}){
    return(
        <article className='project-card'>
                <span className='project-card__status'>{status}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='project-card__technologies'>
                    {technologies.map((techn) => (
                        <span key={techn} className='project-card__technology'>{techn}</span>
                    ))}
                </div>
                <button className='project-card__delete' type='button' onClick={onDelete}>Excluir</button>
                <button type='button' className='mission-card__button' onClick={onEdit}>
                    Editar
                </button>
        </article>
    )
}

export default ProjectCard