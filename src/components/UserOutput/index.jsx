import Card from "../Card";
import "./style.css";

const UserOutput = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.name}>
              <Card>
                {user.name} {user.age}
              </Card>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserOutput;
