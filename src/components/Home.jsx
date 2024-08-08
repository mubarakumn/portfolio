import Display from "./small-components/Display";
import img1 from "/ide-1.png"

function Home(){
    return(
        <div className="section-1">
            <img className="home-img" src={img1} alt="coding-fact-img" />
            <div className="home-content">
                <Display  heading={`Hi I'm Mubarak`}  p={" Frontend developer / Software Engineer"}/>
            </div>
        </div>
    )
}
export default Home;