import classes from './MeetupDetail.module.css'

function MeetupDetail (props) {
    return (
        <section className={classes.detail}>
            <img
            src={props.image}
            alt={props.title}
            />
            <h1 className={classes.title}>{props.title}</h1>
            <address className={classes.address}>{props.address}</address>
            <p className={classes.description}>{props.description}</p>
        </section>
        );
    };

export default MeetupDetail;