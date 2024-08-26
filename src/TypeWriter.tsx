import { useEffect, useState } from "react";

interface TypeWriterProps {
  children: string;
}

const LETTER_APPEAR_DELAY = 500;

const TypeWriter = ({ children }: TypeWriterProps) => {
  const [index, setIndex] = useState(0);
  const letters = children.split("");

  useEffect(() => {
    if (index < letters.length) {
      const intervalId = setInterval(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, LETTER_APPEAR_DELAY);

      return () => clearInterval(intervalId);
    }
  }, [letters]);

  return (
    <ul style={{ listStyleType: "none" }}>
      {letters.map((letter, letterIndex) =>
        index > letterIndex ? (
          <li key={letter} style={{ display: "inline" }}>
            {letter}
          </li>
        ) : null,
      )}
    </ul>
  );
};

export default TypeWriter;
