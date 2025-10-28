import type { FC } from "react";
import type { ListItemsProps } from "../../types";
import { ListItem } from "../index";
import classes from "./listItems.module.css";

const ListItems: FC<ListItemsProps> = ({ data }) => {
  return (
    <ul className={classes.list}>
      {data.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ListItems;
