import styles from "../styles/homeBanner.module.css";
import { useState } from "react";

const HomeBanner = ({ items }: any) => {
    let [count, setCount] = useState(3);

    const handleCount = () => {
        if (count < 4) {
            setCount(count + 1);
        }
        else if (count === 4) setCount(0);
    }

  return ( items &&
    <div className={styles.container}>
        <img
          src={items[count].image}
          alt={items[count].title}
          className="m-auto h-[350px] w-3/5 object-scale-down sm:h-[450px]" 
        />
        <div
          onClick={() => handleCount()}
        > ➡️ </div>
    </div>
  )
}

export default HomeBanner;