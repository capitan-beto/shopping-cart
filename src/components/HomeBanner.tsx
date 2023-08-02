import styles from "../styles/homeBanner.module.css";
import { useState } from "react";
import { ProductType } from "../services/items";

type Props = {
  items: ProductType[]
}

const HomeBanner = ({ items }: Props) => {
  let [count, setCount] = useState<number>(0);
  let [loader, setLoader] = useState<boolean>(true);

  const handleCount = () => {
    setLoader(true);
    if (count < 4) {
      setCount(count + 1);
    }
    else if (count === 4) setCount(0);

  }


  return (
    <div className={styles.container}>
        <img
          onLoad={() => setLoader(false)}
          src={items[count].image}
          alt={items[count].title}
          className={"m-auto h-[350px] w-3/5 object-scale-down sm:h-[450px]"} 
        />
        <div
          onClick={() => handleCount()
        }
        > ➡️ </div>
        <p className={loader ? styles.loading : styles.loaded}></p>
    </div>
  )
}

export default HomeBanner;