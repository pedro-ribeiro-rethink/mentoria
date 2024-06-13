import Image from "next/image";
import styles from "./page.module.css";
import Radar from "./components/Radar";

export default function Home() {
  return (
    <main>
      <Radar />
    </main>
  );
}
