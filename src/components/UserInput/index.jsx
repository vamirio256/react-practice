import Card from "../Card";
import "./style.css";

const UserInput = (props) => {
    const addUserHandler = (e) => {
        e.preventDefault();
    }

    return (
        <Card>
            <form onSubmit={addUserHandler} class="user-input">
                <div class="input-group">
                    <label>Username</label>
                    <input></input>
                </div>
                <div class="input-group">
                    <label>Age (Years)</label>
                    <input></input>
                </div>
                <button type="submit">Add User</button>
            </form>
        </Card>
    )
}

export default UserInput;