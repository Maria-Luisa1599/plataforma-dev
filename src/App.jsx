import './App.css'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
import ProfileCard from './components/ProfileCard'
import SummaryCard from './components/SummaryCard'

function App (){
  const summaryData = [
    {
      id: 1,
      title: 'Missões',
      value: 5,
      description: 'Desafios Disponíveis'
    },
    {
      id: 2,
      title: 'Projetos',
      value: 3,
      description: 'Projetos Cadastrados'
    },
    {
      id: 3,
      title: 'Tecnologias',
      value: 4,
      description: 'Tecnologias Praticadas'
    },
    {
      id: 4,
      title: 'XP',
      value: 2,
      description: 'Experiência Acumulada'
    },
  ]

  return(
    <main className='app'>
      <Header/>
      <div className='dashboard'>
        <ProfileCard
          name='Maria'
          codename='CodeMaster'
          favoriteArea='Desenvolvimento Web'
          level='Aprendiz de React'
        />
        <section className='summary-section'>
          <h2>Resumo da Jornada: </h2>
          <div className='summary-grid'>
            {summaryData.map((item) => (
              <SummaryCard
                key={item.id}
                title={item.title}
                value={item.value}
                description={item.description}
              />
            ))}
          </div>
        </section>
      </div>
      <Welcome/>
      <Footer/>
    </main>
  )
}

export default App