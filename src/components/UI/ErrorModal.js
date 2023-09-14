import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return (
        <>
            <div className={classes.backdrop} onClick={props.onConfirm}></div>
            <Card className={classes.modal}>
                <div className={classes.header}>
                    <h2>{props.title}</h2>
                </div>
                <div className={classes.content}>
                    <p>{props.content}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Confirm</Button>
                </footer>
            </Card>
        </>
    );
};

export default ErrorModal;