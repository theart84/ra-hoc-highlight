import React, {useState} from 'react';
import {fakeData} from "./fakeData/fakeData";
import List from "./components/List/List";


export default function App() {
  const [list, setList] = useState(fakeData);

  return (
    <List list={list}/>
  );
}
