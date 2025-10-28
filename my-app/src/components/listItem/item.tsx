import type { FC } from "react";
import type { ListItemProps } from "../../types";
import classes from "./item.module.css";

const ListItem: FC<ListItemProps> = ({ item }) => {
  return (
    <li className={classes.item}>
      <span>{item.id}.</span>
      <div>
        <p className={classes.itemTitle}>{item.title}</p>
        <p>price: ${item.price}</p>
        <p>category: {item.category}</p>
      </div>
    </li>
  );
};

export default ListItem;
