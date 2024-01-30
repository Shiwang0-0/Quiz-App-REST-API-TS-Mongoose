import './App.css';
import {Routes,Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';
import Quiz from './components/quiz/quiz';
import { CreateQuiz,UpdateQuiz,GetQuiz,PublishQuiz } from './components/quiz/quiz';
import Exam from './components/exam/exam';
import Alert from './components/Alert/Alert';
import OtpModal from './components/Modal/modal';
function App() {

  return (
    <div className="App">
      <Alert message={"this is alert"}/>
        <BrowserRouter>
        <Routes>
        
          <Route path='/' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/register' element={<Register/> }></Route>
          <Route path='/quiz' element={<Quiz/>}></Route>
          <Route path='/createquiz' element={<CreateQuiz/>}></Route>
          <Route path='/updatequiz' element={<UpdateQuiz/>}></Route>
          <Route path='/getquiz' element={<GetQuiz/>}></Route>
          <Route path='/publishquiz' element={<PublishQuiz/>}></Route>
          <Route path='/exam' element={<Exam/>}></Route>
          <Route path='/otpmodal' element={<OtpModal/>}></Route>
        </Routes>
        </BrowserRouter>
        
         
    </div>
  );
}

export default App;
