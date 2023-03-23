import React from "react";
import './styles.css'

const List = () => {
    return (
        <ul className="sidebar_list">
            <li className="sidebar_list_item">
                <a href="https://www.google.com.ua/">Google</a>
            </li>
            <li className="sidebar_list_item">
                <a href="https://uk.reactjs.org/">React</a>
            </li>
            <li className="sidebar_list_item">
                <a href="https://rozetka.com.ua/ua/">Rozetka</a>
            </li>
            <li className="sidebar_list_item">
                <a href="https://www.facebook.com/">Facebook</a>
            </li>
            <li className="sidebar_list_item">
                <a href="https://www.instagram.com/">Instagram</a>
            </li>
        </ul>
    )
}

export default List;