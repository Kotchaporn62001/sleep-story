import React from 'react';
import './signin.css';
function Signin() {
    return (
        <div className="center">
            <h1>เข้าสู่ระบบ </h1>
            <form method="post">
                <div className="text_field">
                    <input type="text" required/>
                    <label>Username</label>
                </div>
                <div className="text_field">
                    <input type="text" required/>
                    <label>Password</label>
                </div>
                <div className="pass">ลืมรหัสผ่าน </div>
                <input type="submit" value="เข้าสู่ระบบ"/>
                
            </form>
        </div>

    )
    
}
export default Signin;