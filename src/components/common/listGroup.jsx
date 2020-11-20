import React from "react";
import PropTypes from "prop-types";

function ListGroup({ items, activeItem, onItemChange }) {
  return (
    <ul className="list-group clickable">
      {items.map((item) => (
        <li
          key={item._id}
          className={
            item === activeItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemChange(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

ListGroup.propTypes = {
  items: PropTypes.array.isRequired,
  activeItem: PropTypes.object,
  onItemChange: PropTypes.func.isRequired,
};

export default ListGroup;
