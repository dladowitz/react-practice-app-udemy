import ReactDOM from "react-dom";

import Button from "./Button";
import Card from "./Card";

import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onDismiss} />;
};

const ModalOverlay = (props) => {
  return (
    <>   
      <Card className={classes.modal}>
        <div> 
          <header className={classes.header}>
            <h2>Error</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.onDismiss}>Dismiss</Button>
          </footer>
        </div>        
      </Card>
    </>
  )
};

const ErrorModal = props => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onDismiss={props.onDismiss}/>, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<ModalOverlay message={props.message} onDismiss={props.onDismiss}/>, document.getElementById("overlay-root"))}
    </>
  );
};

export default ErrorModal;