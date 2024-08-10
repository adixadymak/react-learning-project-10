import React from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

export default function Question({
  questionText,
  answers,
  onSelectedAnswer,
  selectedAnswers,
  answerState,
  onSkipAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswers={selectedAnswers}
        answerState={answerState}
        onSelect={onSelectedAnswer}
      />
    </div>
  );
}
