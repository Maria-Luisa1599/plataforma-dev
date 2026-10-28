import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
import ProfileCard from './components/ProfileCard'
import SummaryCard from './components/SummaryCard'
import MissionCard from './components/MissionCard'
import MissionForm from './components/MissionForm'
import MissionSearch from './components/MissionSearch'
import MissionFilter from './components/MissionFilter'

const initialMissions = [
  {
    id: 1,
    title: "Criar componente de perfil",
    description: "Monte um card com nome, codinome e área favorita.",
    technology: "React",
    difficulty: "Fácil",
    xp: 50,
    completed: true,
  },
  {
    id: 2,
    title: "Reutilizar um componente",
    description: "Use o mesmo componente para exibir dados diferentes.",
    technology: "React",
    difficulty: "Fácil",
    xp: 50,
    completed: true,
  },
  {
    id: 3,
    title: "Criar a Central de Missões",
    description: "Exiba uma lista de missões utilizando componentes.",
    technology: "React",
    difficulty: "Média",
    xp: 100,
    completed: false,
  },
  {
    id: 4,
    title: "Investigar um erro",
    description: "Encontre e corrija um problema de props ou estado.",
    technology: "Debug",
    difficulty: "Média",
    xp: 80,
    completed: false,
  },
];

function App (){

  const [missions, setMissions] = useState(initialMissions)
  const [editMission, setEditMission] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('Todas')
  const [techFilter, setTechFilter] = useState('Todas')

  function toggleMission(missionId){
    const updatedMissions = missions.map((mission) => {
      if(mission.id === missionId){
        return{
          ...mission, completed: !mission.completed
        }
      }
      return mission
    })
    setMissions(updatedMissions)
  }

  function addMission(mission){
    setMissions((currentMissions) => [mission, ...currentMissions])
  }

  function deleteMission(missionId){
    const updatedMissions = missions.filter((mission) => mission.id !== missionId)
    setMissions(updatedMissions)
  }

  function updateMission(updatedMission){
    const updatedMissions = missions.map((mission) => mission.id === updatedMission.id ? updatedMission : mission)
    setMissions(updatedMissions)
    setEditMission(null)
  }

  const completedMissions = missions.filter((mission) => mission.completed)
  const completedMissionsCount = completedMissions.length
  const earnedXP = completedMissions.reduce((total, mission) => total + mission.xp, 0)
  
  const filteredMission = missions.filter((mission) => {
    const matchSearch = mission.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchStatus = statusFilter === 'Todas' || (statusFilter === 'Concluidas' && mission.completed) || (statusFilter === 'Pendentes' && !mission.completed)
    const matchTech = techFilter === 'Todas' || (techFilter === mission.technology)
    return matchSearch && matchStatus && matchTech
  })
  
  const summaryData = [
    {
      id: 1,
      title: 'Missões',
      value: completedMissionsCount,
      description: `${missions.length} desafios disponíveis`
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
      value: earnedXP,
      description: 'Experiência Acumulada'
    },
  ]

  return(
    <main className='app'>
      <Header/>
      <div className='dashboard'>
      <Welcome/>
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
        <MissionForm 
          onAddMission={addMission}
          editMission={editMission}
          onUpdateMission={updateMission}
        />
        <section className='missions-section'>
          <MissionSearch
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          <MissionFilter
            statusFilter={statusFilter}
            onStatusChange={setStatusFilter}
            techFilter={techFilter}
            onTechChange={setTechFilter}
          />
          <div className='section-heading'>
            <div>
              <p className='section-heading__tag'>
                Central de Missões
              </p>
              <h2>Próximos desafios</h2>
            </div>
            <span>{missions.length} Missões</span>
          </div>
          <div className='missions-grid'>
            {filteredMission.map((mission) => (
              <MissionCard
                key={mission.id}
                title={mission.title}
                description={mission.description}
                technology={mission.technology}
                difficulty={mission.difficulty}
                xp={mission.xp}
                completed={mission.completed}
                onToggle={() => toggleMission(mission.id)}
                onDelete={() => deleteMission(mission.id)}
                onEdit={() => setEditMission(mission)}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer/>
    </main>
  )
}

export default App
