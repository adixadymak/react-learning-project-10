import { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

import QUESTIONS from "../questions.js";

export default function Question({
  questionIndex,
  onSelectedAnswer,

  onSkipAnswer,
}) {
  const [answer, setAnser] = useState({
    selectedAnswers: "",
    isCorrect: null,
  });

  function handleSelectAnswer(answer) {
    setAnser({
      selectedAnswers: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnser({
        selectedAnswers: answer,
        isCorrect: QUESTIONS[questionIndex].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectedAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswers && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswers) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{QUESTIONS[questionIndex].text}</h2>
      <Answers
        answers={QUESTIONS[questionIndex].answers}
        selectedAnswers={answer.selectedAnswers}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
