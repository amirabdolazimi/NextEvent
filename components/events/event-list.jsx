import { Fragment } from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";
const EventList = (props) => {
  const { items } = props;
  return (
    <Fragment>
      <ul className={classes.list}>
        {items.map((item) => (
          <EventItem
            key={item.id}
            title={item.title}
            location={item.location}
            image={item.image}
            date={item.date}
            id={item.id}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default EventList;
