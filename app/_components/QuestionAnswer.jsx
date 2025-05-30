import Container from './containers/Container';

function QuestionAnswer({ question, answer, examples, className = '' }) {
  return (
    <Container
      className={`flex-center text-center p-button min-h-[50px] ${className}`}
    >
      {question && <div>{question}</div>}
      {answer && <div>{answer}</div>}
      {examples && <div className='italic'>Example: {examples}</div>}
    </Container>
  );
}

export default QuestionAnswer;
