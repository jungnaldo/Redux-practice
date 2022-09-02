import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";

function App() {
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };
  const decrease = () => {
    dispatch({ type: "DECREMENT" });
  };
  const Login = () => {
    dispatch({ type: "LOGIN", payload: { id: "noona", password: "123" } });
  };
  return (
    <div>
      <h1>
        {id},{password}
      </h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={Login}>login</button>
      <button onClick={decrease}>감소</button>
      <Box />
    </div>
  );
}

export default App;
