import Menu from './Menu';
import '../styles/App.css';

function App() {
  return (
    <div className="app-container">
      <Menu />
      <main>
        <h1>Bem-vindo ao nosso App</h1>
        <p>Aqui você pode navegar pelos nossos serviços e produtos.</p>
      </main>
    </div>
  );
}

export default App;