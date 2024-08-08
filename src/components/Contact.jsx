import img1 from "/ide-1.png"
import img2 from "/ide-2.png"
import React from "react"

function Contact(){

  const [formData, SetformData] = React.useState({
    
    firstName: "",
    surName: "",
    Phone: "",
    email: "",
    message:""

  })
  
  function handleChange(event){
     const {name, value} = event.target
     SetformData(PrevformData =>({
      ...PrevformData,
      [name] : value
     }))
  }
  function handleSubmit(event){
    event.preventDefault()
    const {firstName, email, message} = formData;
      if(!firstName == "" && !email == "" && !message == ""){
        alert("Message sent Successfully!")
      }else{
        alert("Required input hasn't been filled!...")
      }
  }
   
    return(
        <>
        <div className="section-4">
          <img className="img1" src={img1} alt="" />
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Contact me</h2>
                <div className="input-inline">  
                 <div>
                  <label>Firstname <span>*</span></label>
                  <input required
                   type="text" 
                   name="firstName"
                   onChange={handleChange}
                   value={formData.firstName}
                  />
                 </div>
                 <div>
                  <label>Surname  (Optional)</label>
                  <input 
                   type="text"
                   name="surName"
                   onChange={handleChange}
                   value={formData.surName}
                  />
                   </div>
                </div>
                  <label>Phone no
                  . (Optional)</label>
                <div > 
                  <input 
                  type="text" 
                  name="Phone"
                  onChange={handleChange}
                  value={formData.Phone}                  
                  />
                </div>
                <label>E-mail <span>*</span></label>
                <div >
                  <input  required 
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}                  
                  />
                </div>
                <label htmlFor="textarea">Message <span>*</span></label>
                <div>
                   <textarea required 
                   name="message" 
                   cols="30" 
                   rows="10"
                   onChange={handleChange}
                   value={formData.message} 
                   />
                </div>
                <button >Send</button>
            </form>
            <img className="img2" src={img2} alt="" />
          </div>
        </>
    )
}
export default Contact;