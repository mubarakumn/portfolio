import img1 from "/mypic.jpg"
function About(){
    return(
        <>
            <div className="section-2" id="about">
               <h2>About</h2>
               <div className="about-container">
                    <div className="about-content-1">
                        <img src={img1} alt="" />
                        <div >
                           <p></p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque error saepe dolor modi magnam veritatis doloribus ipsa iusto dolorem cum.</p>
                            <button>Get my Resume</button>
                        </div>
                    </div> 
                    <div className="about-content-2">
                       <div className="experience">
                         <h2>Skills</h2>
                         <ul>
                            <li>html</li>
                            <li>css</li>
                            <li>javascript</li>
                            <li>reactjs</li>
                            <li>css</li>
                            <li>javascript</li>
                            <li>reactjs</li>
                            <li>php</li>
                            <li>firebase</li>
                            <li>git/github</li>
                            <li>nodejs</li>
                         </ul>
                       </div>
                        <div className="skills" >
                            <h2>Another Thing</h2>
                            <ul>
                                <li>css css</li>
                                <li>css css</li>
                                <li>css css</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
}
export default About;