export default function AnswerOption({ option, index, isSelected, onSelect }) {
  const letter = String.fromCharCode(65 + index);

  return (
    <button
      type="button"
      className={`answer-option ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
      aria-pressed={isSelected}
    >
      <span className="option-letter">{letter}</span>
      <span className="option-text">{option}</span>
    </button>
  );
}
