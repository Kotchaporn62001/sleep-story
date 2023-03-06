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
            <a href = "# " >เข้าระบบ</a>
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
      <section className="fic">
        <div className="container">
            <div className="fic_area">
                <img src="img/Aesop_620401_01.jpg" alt="" width="100" height="100"/>
                <h2> หมาป่ากับลูกแกะ</h2>
                <li>
                  <a href='# '>เช้าตรู่วันหนึ่ง ลูกแกะหลงฝูงยืนดื่มน้ำอยู่บริเวณริมฝั่งลำธารในป่า ...</a>
                </li>
            </div>
        </div>
    </section>
    <section className="fic1">
        <div className="container">
            <div className="fic_area">
                <img src="img/Aesop_620401_01.jpg" alt="" width="100" height="100"/>
                <h2>เด็กเลี้ยงแกะ</h2>
                <li>
                  <a href='# '>เช้าตรู่วันหนึ่ง ลูกแกะหลงฝูงยืนดื่มน้ำอยู่บริเวณริมฝั่งลำธารในป่า ...</a>
                </li>
            </div>
        </div>
    </section>
    <section className="fic2">
        <div className="container">
            <div className="fic_area">
                <img src="img/Aesop_620401_01.jpg" alt="" width="100" height="100"/>
                <h2>หนูน้อยหมวกแดง</h2>
                <li>
                  <a href='# '>เช้าตรู่วันหนึ่ง ลูกแกะหลงฝูงยืนดื่มน้ำอยู่บริเวณริมฝั่งลำธารในป่า ...</a>
                </li>
            </div>
        </div>
    </section>

    </div>
    
  
  );
}

export default App;