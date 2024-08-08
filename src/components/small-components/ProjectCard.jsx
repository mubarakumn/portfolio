import "./projectCard.css"
function ProjectCard(props){
    return(
        <>
        <div className="projectCard">
            <img src={props.img} alt="Project" />
            <h4>
                <a href="#">{props.name}</a>
            </h4>    
            <p>{props.desc}</p>
        </div>
        </>
    )
}
export default ProjectCard;