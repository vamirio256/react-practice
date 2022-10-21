import Card from "../Card";
import "./style.css";

const UserOutput = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user) => {
          return <Card>{user.name}</Card>;
        })}
      </ul>
    </Card>
  );
};

export default UserOutput;
