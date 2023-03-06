import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo'>
           <h1>BEDTIME story</h1>
        </div>
        <div className='bar'>
        <ul className='menu'>
          <li>
            <a href ="# ">หน้าหลัก</a>
          </li>
          <li>
            <a href ="# ">แต่งนิยาย</a>
          </li>
          <li>
            <a href ="./signin ">เข้าระบบ</a>
          </li>
        </ul>
       </div> 
      </header>
      <div className="home" >
        <div className="container">
            <div className="home_con">
                <div className="home_text">
                    <h1>นิทานก่อนนอน</h1>
                </div>
                
            </div>
        </div>

      </div>

    </div>
    
  
  );
}

export default App;