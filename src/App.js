import './App.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routing from './router/rou';

class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo'>
           <h1>BEDTIME story</h1>
        </div>
        <div className='bar'>
        <ul className='menu'>
          <li>
          <Link to="/ ">หน้าหลัก</Link>
          </li>
          <li>
          <Link to="/write ">แต่งนิยาย</Link>
          </li>
          <li>
          <Link to="/signin ">เข้าระบบ</Link>
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
                  <a href='# '>ณ หมู่บ้านชายป่า มีเด็กเลี้ยงแกะคนหนึ่งชอบพูดโกหกเป็นประจำ...</a>
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
                  <a href='# '>กาลครั้งหนึ่ง ณ หมู่บ้านที่แสนอบอุ่น มีเด็กหญิงหน้าตาน่ารักนั่ง ...</a>
                </li>
            </div>
        </div>
    </section>
    <Routing/>

    </div>
    
  
  );
  }
}
  export default App;