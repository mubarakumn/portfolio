import {useState} from 'react';
import "./display.css"
import laptopImg from '/Laptop-screen.png'
import mypic from '/mypic.jpg'

function Display(props){
 const [visible, setvisible] = useState(false);

   function changeVisibility(){
     return setvisible(!visible)
   }

    return(
   <>
  {/* Display */}
  <div className="display" onMouseEnter={changeVisibility} onMouseLeave={changeVisibility}>
      {/* Display laptop img */}
      <div className="laptop">
         <img src={laptopImg} alt="laptop image background" />
      </div>
      {/* End of Display laptop img */}
      {/* Display Content */}
      <div className="display-Content">
            <div className="inner-content">
                  <h1>{props.heading}</h1>
                  <p>{props.p}</p>
            </div>
            <div className="inner-arrow">
               <img src={mypic} alt='my picture' id='ShowImg' className={visible ? "visible" : "notVisible"} />
               <p>Click the Below </p>
               <p>Icons</p>
               <div className="inner-arrows-arrow">
               <i ><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.886,5.536C21.713,5.207,21.372,5,21,5H3C2.628,5,2.287,5.207,2.114,5.536C1.941,5.865,1.966,6.263,2.178,6.569l9,13 C11.364,19.839,11.672,20,12,20s0.636-0.161,0.822-0.431l9-13C22.034,6.263,22.059,5.865,21.886,5.536z M12,17.243L4.908,7h14.184 L12,17.243z"></path></svg></i>
               <i ><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.886,5.536C21.713,5.207,21.372,5,21,5H3C2.628,5,2.287,5.207,2.114,5.536C1.941,5.865,1.966,6.263,2.178,6.569l9,13 C11.364,19.839,11.672,20,12,20s0.636-0.161,0.822-0.431l9-13C22.034,6.263,22.059,5.865,21.886,5.536z M12,17.243L4.908,7h14.184 L12,17.243z"></path></svg></i>
               <i ><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.886,5.536C21.713,5.207,21.372,5,21,5H3C2.628,5,2.287,5.207,2.114,5.536C1.941,5.865,1.966,6.263,2.178,6.569l9,13 C11.364,19.839,11.672,20,12,20s0.636-0.161,0.822-0.431l9-13C22.034,6.263,22.059,5.865,21.886,5.536z M12,17.243L4.908,7h14.184 L12,17.243z"></path></svg></i>
               </div>
            </div>
            <div className="inner-icons">
               <a href="https://github.com/mubarakumn" target="blank"><i className="icon-1"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1em" width="1em" {...props}><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" /></svg></i></a>
               <a href="https://wa.link/8fjzdh" target="blank"><i className="icon-2"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg></i></a>
               <a href="https://www.linkedin.com/in/mubarak-usman-9b7784252/" target="blank"><i className="icon-3"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></i></a>  
            </div>
      </div>
      {/* End of Display Content */}
  </div>
  {/* End of Display */}
   </>
    )
}
export default Display;