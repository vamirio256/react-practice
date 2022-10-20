import './style.css'

const UserOutput = (props) =>{
    return(
        <div>
            <p>{props.username}+{props.age}+ years old</p>
        </div>
    )
}

export default UserOutput;