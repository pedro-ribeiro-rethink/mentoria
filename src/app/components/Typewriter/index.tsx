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
    switch (estado) {
      case 'digitando':
        if (texto === frase)
          setEstado('aguardando');
        else
          setTimeout(() => {
            setTexto(old => old + frase[old.length]);
          }, 100);
        break;
      case "aguardando":
        break;
      case "apagando":
        break;
    }
  }, [estado, fraseAtual, texto]);

  return (
    <div className={styles.texto}>{texto}</div>
  );
};
