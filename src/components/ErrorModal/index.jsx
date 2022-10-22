import ReactDOM from "react-dom";
import Button from "../Button";
import Card from "../Card";
import Wrapper from "../Helpers/Wrapper";
import "./style.css";

function Backdrop(props) {
  return <div className="backdrop" onClick={props.onHandleError} />;
}

function ModalOverlay(props) {
  return (
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
  );
}

function ErrorModal(props) {
  return (
    <Wrapper>
      {ReactDOM.createPortal(
        <Backdrop onHandleError={props.onHandleError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onHandleError={props.onHandleError}
        />,
        document.getElementById("overlay-root")
      )}
    </Wrapper>
  );
}

export default ErrorModal;
