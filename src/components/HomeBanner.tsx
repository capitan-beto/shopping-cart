import styles from "../styles/homeBanner.module.css";
import { useState } from "react";
import { ProductType } from "../services/items";
import { Link } from "react-router-dom";

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
          className={"m-auto h-[70%] object-scale-down"}
        />
        <div
          onClick={() => handleCount()}
        >
          <span className="material-symbols-outlined text-black text-[3em]">
          navigate_next
          </span>
        </div>
        <Link to={`Products/${items[count].id}`} className={loader ? styles.loading : styles.loaded}>
          <></>
        </Link>
    </div>
  )
}

export default HomeBanner;