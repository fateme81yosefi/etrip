import * as React from 'react';
import Dropdown from 'rsuite/Dropdown';
import ReactDOM from 'react-dom';
import "./drop.css";
export function Drop(props) {
  return (
    <Dropdown title={props.title}>
    <Dropdown.Item>{props.item1}</Dropdown.Item>
    <Dropdown.Item>{props.item2}</Dropdown.Item>
    <Dropdown.Item>{props.item3}</Dropdown.Item>
    <Dropdown.Item>{props.item4}</Dropdown.Item>

   
  </Dropdown>
  );
}
export default Drop;
