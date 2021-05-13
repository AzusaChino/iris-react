import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import * as constants from "./store/constants";
import { Button, Input } from "antd";

const { Search } = Input;

const demoSelect = (state: RootState) => state.demo;

function Demo() {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0); //   function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];

  // local state
  const [fruta, setFruta] = useState("banana");

  // global state
  const demo = useSelector(demoSelect);

  const { count, fruit } = demo;

  const dispatch = useDispatch();

  const setCount = () => {
    dispatch({
      type: constants.COUNT,
      payload: {
        count: count + 1,
      },
    });
  };

  const setFruit = (fruit: string) => {
    dispatch({
      type: constants.FRUIT,
      payload: {
        fruit,
      },
    });
  };

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`;
  // });

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount()}>Click me</Button>

      <div>
        <p>今天该吃 {fruit} 了</p>
        <div style={{ width: 360, margin: "auto" }}>
          <Search
            placeholder="吃什么呢"
            enterButton="吃这个"
            onChange={(e) => setFruta(e.target.value)}
            onSearch={() => setFruit(fruta)}
          />
        </div>
      </div>
    </div>
  );
}

export default Demo;
