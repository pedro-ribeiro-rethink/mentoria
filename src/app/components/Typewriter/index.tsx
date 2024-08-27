'use client';
import { useEffect, useState } from "react";
import styles from "./style.module.css";

type Props = {
  frases: string[];
};

export default function Typewriter({ frases }: Props) {
  const [texto, setTexto] = useState("");
  const [estado, setEstado] = useState<'digitando' | 'aguardando' | 'apagando'>('digitando');
  const [fraseAtual, setFraseAtual] = useState(0);

  useEffect(() => {
    const frase = frases[fraseAtual];
    let timeout: NodeJS.Timeout | undefined = undefined;
    switch (estado) {
      case 'digitando':
        if (texto === frase)
          setEstado('aguardando');
        else
          timeout = setTimeout(() => {
            setTexto(old => old + frase[old.length]);
          }, 100);
        break;
      case "aguardando":
        timeout = setTimeout(() => {
          setEstado("apagando");
        }, 2000);
        break;
      case "apagando":
        if (texto.length === 0) {
          setEstado("digitando");
          setFraseAtual(old => (old + 1) % frases.length);
        } else {
          timeout = setTimeout(() => {
            setTexto(old => old.substring(0, old.length - 1));
          }, 20);
        }
        break;
      }
      if (timeout != undefined) {
        return () => clearTimeout(timeout);
      }
  }, [estado, fraseAtual, texto]);

  return (
    <>
      <div className={styles.texto}>{texto}_</div>
      {estado}
    </>
  );
};
