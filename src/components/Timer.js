import { useEffect, useState } from "react";

const Timer = ({ initTime, cookingTime, ...props }) => {
    const calculateTime = (cookingTime, initTime) => {
    return Math.round(
      cookingTime / 1000 - Math.floor(new Date() - initTime) / 1000
    );
  };
  const [count, setCount] = useState(calculateTime(cookingTime, initTime));

  useEffect(() => {
    const timer =
      count > 0 &&
      setTimeout(() => {
        setCount(calculateTime(cookingTime, initTime));
      }, 1000);
    return () => clearTimeout(timer);
  });
  return <span>{`${count} sec`}</span>;
};

export default Timer;
