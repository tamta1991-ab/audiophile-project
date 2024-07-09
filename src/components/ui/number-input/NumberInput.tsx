import { Dispatch } from "react";
import "./number-input.css";

type Props = {
  num: number;
  setNum: Dispatch<React.SetStateAction<number>> | ((num: number) => void);
  minNum?: number;
};

const NumberInput = ({ num, setNum, minNum = -9999999 }: Props) => {
  return (
    <div className="number-input-wrapper">
      <button onClick={() => setNum(num === minNum ? num : num - 1)}>-</button>
      <b>{num}</b>
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  );
};

export default NumberInput;