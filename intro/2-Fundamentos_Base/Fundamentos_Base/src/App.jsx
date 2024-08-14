import './App.css';

//2-importando componente//
import FirstComponent from './components/FirstComponent'

//4-TemplateExpression//
import TemplateExpression from './Components/TemplateExpression';

function App() {
//3-comentários//
  return(
  <div className="App">
    {/*3- comentário-jsx*/}
    <FirstComponent/>
    <TemplateExpression/>
  </div>
  );
}

export default App
