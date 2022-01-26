import Button from "./Button";

import classes from "./ErrorModal.module.css";

const ErrorModal = props => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div className={classes.header}>
          <h2>Error</h2>
        </div>
        <div className={classes.content}>
          {props.message}
        </div>
        <div className={classes.actions}>
          <Button onClick={props.onDismiss}>Dismiss</Button>
        </div>
      </div>
    </div>
  );
}

export default ErrorModal;