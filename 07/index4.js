
'use strict'

const QUIZ = [
  {
    question: 'Сколько хромосом у здорового человека?',
    answer: '46',
    type: getAnswerString,
  },
  {
    question: 'Путин - хуйло?',
    answer: true,
    type: getAnswerBoolean,
  },
  {
    question: 'Сколько хромосом у Путина?',
    answer: '47',
    type: getAnswerString,
  },
]

const score = runQuiz(QUIZ)

alert(score)

function runQuiz (quizItems) {
  let score = 0

  for (const { question, answer, ...rest } of quizItems) {
    if (rest.type(question) === answer) {
      score += 10
    }
  }

  return score
}

function getAnswerBoolean (question) {
  return confirm(question)
}

function getAnswerString (question) {
  return prompt(question)
}