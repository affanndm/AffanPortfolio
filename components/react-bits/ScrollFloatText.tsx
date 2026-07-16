// Adapted from React Bits ScrollFloat with semantic text and reduced-motion support.
export function ScrollFloatText({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");

  return (
    <p className={`scroll-float-text ${className}`} data-scroll-float>
      <span className="scroll-float-accessible">{text}</span>
      <span aria-hidden="true">
        {words.map((word, wordIndex) => (
          <span className="scroll-float-word" key={`${word}-${wordIndex}`}>
            {word.split("").map((character, characterIndex) => (
              <span data-float-char key={`${character}-${characterIndex}`}>
                {character}
              </span>
            ))}
            {wordIndex < words.length - 1 ? "\u00A0" : null}
          </span>
        ))}
      </span>
    </p>
  );
}
