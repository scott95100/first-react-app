//imports
import Animal from './Animal'
import Human from './Human'

function App() {
  return (
    <div>
      <h1>title</h1>
      <Animal animal="dog"/>
      <Animal animal="cat"/>
      <Animal animal="tiger"/>
      <Animal animal="eagle"/>
      <Human name="Scott" location="Arizona"/>
    </div>
  
  );

}

export default App;
