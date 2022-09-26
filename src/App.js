import logo from './logo.PNG';
import './App.css';



function App() {
  return (
     <div class="gradient">
      <h1 class="text-red padding-large padding-text">COOKTAP</h1>
      <img src={logo} height alt="로고 이미지" id="logo"></img>

      <input type="button" value="시 작 하 기" class="btn-submit" id="btn-start"></input>
    </div>
  );
}

export default App;
