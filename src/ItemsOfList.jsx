import React from 'react';

const ItemsOfList = (props) => {
    return <li> <button className= "del-button" onClick= { () => {
        props.onSelect(props.id) } } > x </button> {props.value} </li>
}

export default ItemsOfList;