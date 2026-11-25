import './style.css'

function ProjectCard ({title, description, technologies, status, githubUrl, deployUrl, onDelete, onEdit}){
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
                <div className='project-card__actions'>
                    { 
                        githubUrl && (
                            <a href={githubUrl} target='_blank' rel='noreferrer' className='project-card__link'>Ver código</a>
                        )
                    } 
                    {
                        deployUrl && (
                            <a href={deployUrl} target='_blank' rel='noreferrer' className='project-card__link'>Ver projeto</a>
                        )
                    }
                </div>
                <div className='project-card__actions'>
                    <button className='project-card__delete' type='button' onClick={onDelete}>Excluir</button>
                    <button type='button' className='mission-card__button' onClick={onEdit}>
                        Editar
                    </button>
                </div>
        </article>
    )
}

export default ProjectCard