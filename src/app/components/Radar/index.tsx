'use client';
import { useState } from "react";
import styles from "./style.module.css";
export default function Radar() {
  const [page, setPage] = useState(0);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.circle1}>
          <div className={styles.circle2}>
            <div className={styles.triangle} style={{ transform: `rotate(${45 + page * 90}deg)`, backgroundColor: page % 4 == 0 ? 'red' : 'blue' }}></div>
            <div className={styles.circle3}>

            </div>
          </div>
        </div>
      </div>
      <button onClick={() => setPage(p => p - 1)}>Anterior</button>
      <button onClick={() => setPage(p => p + 1)}>Próximo</button>
    </>
  )
};
