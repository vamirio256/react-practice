import Button from "../Button";
import Card from "../Card";
import "./style.css";

function ErrorModal(props) {
  return (
    <div>
      <div className="backdrop" onClick={props.onHandleError}>
        <Card className="modal">
          <header>
            <h2>{props.title}</h2>
          </header>
          <div>
            <p>{props.message}</p>
          </div>
          <footer>
            <Button onClick={props.onHandleError}>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
}

export default ErrorModal;
