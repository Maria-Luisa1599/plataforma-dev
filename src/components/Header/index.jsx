import './style.css'

function Header (){
    return(
        <header className='header'>
            <div>
                <p className='header__logo'>Plataforma Dev</p>
                <span className='header__subtitle'>Central de evoluções</span>
            </div>
            <button className='header__button'>Meu Perfil</button>
        </header>
    )

}

export default Header