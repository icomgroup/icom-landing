import axios from "axios";
import React from "react";
import { ReactDOM } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";





import Popup from 'reactjs-popup';


export default function Contact() {

  

  
  
 
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    service: ""
  });
  let flag = true
  
  const [value, setvalue] = React.useState('')

  function check(){
	if(value === ''){
    flag = false
    document.querySelector('.enter-number').innerHTML = "رجاء ادخل رقم هاتف"

  }
};
   if(value !== ''){
  flag = true
  document.querySelector('.enter-number').innerHTML = ''
    }
  
 let handleSubmit = async (e) => {
    
   e.preventDefault();
   if (flag){
   if(formData.email === ''){
    formData.email = 'ْ';
   }
   if(formData.message === ''){
    formData.message = 'ْ';
   }
   if(formData.service === ''){
    formData.service = 'تصميم وبرمجة مواقع الويب';
   }
  
   try {
    
     let res = await axios.post("https://icom-agency.com/api/add-message",{
      name:formData.name,
      email:formData.email,
      message: formData.message,
      service:formData.service,
      phone:value
     }
      );
     if (res.status === 200) {
      console.log(res.status)
       setFormData((prevFormData) => {
         return {
           ...prevFormData
         }
         
       });
       document.querySelector('.clicked-button').click()
       setTimeout(()=>window.location.replace("https://icom-digital.net/"),3000)
     } else {
       console.log("Some error occured");
     }
   } catch (err) {
     console.log(err.response);
   }



}else {
  console.log('error')
}
}

  function handleChange(event) {
    
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      };
    });
  }

     
      
     
    
  
 
 
  
  return (
    <div className="contact" id="contact-us" name="contact-us">
      <div className="pop-up-content">
      <Popup
    trigger={<button className="button clicked-button"> Open Modal </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> تم ارسال رسالتك بنجاح </div>
        <div className="content">
          {' '}
          <div class="success-checkmark">
  <div class="check-icon">
    <span class="icon-line line-tip"></span>
    <span class="icon-line line-long"></span>
    <div class="icon-circle"></div>
    <div class="icon-fix"></div>
  </div>
</div>

          <br />
        
        </div>
        <div className="actions">
          
          
        </div>
      </div>
    )}
  </Popup>
  </div>
      
      <h1>اتصل بنا</h1>
      <section>
        <div className="rectangle-and-form">
          <div className="red-rectangle">
            <h1>كن على تواصل معنا</h1>
            <p>
              لمناقشة مشروعك بشكل أفضل قم بتعبئة البيانات المطلوبة. سنقوم بالرد
              عليك في أقرب وقت ممكن!
            </p>
            <div className="info-content" dir="ltr">
              <i className="fa-solid fa-location-dot"></i>
              <span> Syria</span>
              <br />
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+963991070885" dir="ltr">
                +963991070885
              </a>
              <br />
              <i className="fa-solid fa-envelope"></i>{" "}
              <a href="mailto:info@icom-digital.com">info@icom-digital.com</a>
            </div>
            <div className="bottom-icons" dir="ltr">
              <a href="https://www.instagram.com/icom.digital/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/IcomDigitalAgency/">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://wa.me/+963991070885">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            <div className="squares">
              <div className="square-line">
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
              </div>
              <div className="square-line">
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
              </div>
              <div className="square-line">
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
              </div>
              <div className="square-line">
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
              </div>
            </div>
            <div className="squares2">
              <div className="square-line">
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
              </div>
              <div className="square-line">
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
              </div>
              <div className="square-line">
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
              </div>
              <div className="square-line">
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="labels">
              الاسم الكريم
            </label>
            <input
              type="text"
              placeholder="ادخل اسمك الكامل"
              onChange={handleChange}
              name="name"
              id="name"
              value={formData.name}
              required
            />
             
            <label htmlFor="email" className="labels">
              البريد الالكتروني
            </label>

            <input
              type="email"
              placeholder="ادخل بريدك الالكتروني"
              onChange={handleChange}
              name="email"
              id="email"
              value={formData.email}
            />
            <label htmlFor="select" className="labels">
              ادخل الخدمة المطلوبة
            </label>

            <select
              id="select"
              value={formData.service}
              onChange={handleChange}
              name="service"
              required
            >
              <option value="تصميم وبرمجة مواقع الويب">
تصميم وبرمجة مواقع الويب
  </option>
              <option value="تصميم وبرمجة تطبيقات الهاتف المحمول">
                تصميم وبرمجة تطبيقات الهاتف المحمول
              </option>
              <option value="التسويق عبر منصات التواصل الاجتماعي">
                التسويق عبر منصات التواصل الاجتماعي
              </option>
              <option value="تصميم العلامة التجارية والهوية البصرية">
                تصميم العلامة التجارية والهوية البصرية
              </option>
              <option value="تهيئة محركات البحث">تهيئة محركات البحث</option>
              <option value="تصميم داخلي">تصميم داخلي</option>
              <option value="الدعم الفني">الدعم الفني</option>
            </select>
            <label htmlFor="phone" className="labels">
              رقم الجوال
            </label>
            <PhoneInput value={value} onChange={setvalue}/>
           
            <span className="enter-number">  </span>
            <label htmlFor="message" className="labels">
              الرسالة
            </label>
            <textarea
              value={formData.message}
              placeholder="ادخل نبذة عن مشروعك"
              onChange={handleChange}
              id="message"
              name="message"
            />
            <button type="submit" id="s" onClick={check}>ارسال</button>
          </form>
        </div>
        <img
          src={require("./assets/landing-image.png")}
          alt="contact"
          className="landing-image"
          
        />
      </section>
    </div>
  );
  
 


}

