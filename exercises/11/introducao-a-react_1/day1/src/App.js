import logo from './logo.svg';
import './App.css';

const renderTask = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = [
  'Escovar do dentes',
  'Tomar café',
  'Rever o conteúdo',
]

function App() {
  return (
    <div>
      <h2>Lista de Tarefas diárias</h2>
      <ol>
        { tasks.map(task => renderTask(task))}
      </ol>
    </div>
  );
}

export default App;
