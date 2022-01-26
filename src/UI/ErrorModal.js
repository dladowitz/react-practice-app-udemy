import Button from "./Button";
import Card from "./Card";

import classes from "./ErrorModal.module.css";

const ErrorModal = props => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onDismiss} />
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
    </div>
  );
}

export default ErrorModal;