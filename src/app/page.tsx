import Image from "next/image";
import styles from "./page.module.css";
import Radar from "./components/Radar";
import Typewriter from "./components/Typewriter";

export default function Home() {
  
  const frases = [
    "Lorem ipsum dolor",
    "Sit amet, consectetur",
    "Adipiscing elit",
  ];


  return (
    <main>
      <Typewriter frases={frases} />
      {/* <Radar /> */}
    </main>
  );
}
