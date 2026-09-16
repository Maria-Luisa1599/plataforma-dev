import './style.css'

function ProfileCard ({name, codename, favoriteArea, level}){
    return(
        <section className='profile-card'>
            <div className='profile-card__avatar'>
                {name.charAt(0)}
            </div>
            <div className='profile-card__contas'>
                <p className='profile-card__label'>Perfil do Desenvolvedor</p>
                <h2>{name}</h2>
                <p className='profile-card__codename'>Codinome: {codename}</p>
                <p>Área Favorita: {favoriteArea}</p>
                <p>Nível Atual: {level}</p>
            </div>
        </section>
    )

}

export default ProfileCard