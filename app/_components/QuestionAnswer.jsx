function QuestionAnswer({ question, answer, examples, className = '' }) {
  return (
    <div
      className={`flex-center text-center p-button min-h-[50px] rounded-2xl ${className}`}
    >
      {question && <div className='text-lg font-bold'>{question}</div>}
      {answer && <div>{answer}</div>}
      {examples && <div className='italic'>Example: {examples}</div>}
    </div>
  );
}

export default QuestionAnswer;
