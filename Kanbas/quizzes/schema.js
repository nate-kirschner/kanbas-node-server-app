import mongoose from "mongoose";
const quizzesSchema = new mongoose.Schema(
  {
    cid: String,
    title: String,
    instructions: String,
    availableDate: String,
    dueDate: String,
    untilDate: String,
    points: Number,
    numQuestions: Number,
    isPublished: Boolean,
    quizType: String,
    assignmentGroup: String,
    shuffleAnswers: Boolean,
    timeLimit: Number,
    multipleAttempts: Boolean,
    showCorrectAnswers: Boolean,
    accessCode: String,
    oneQuestionAtATime: Boolean,
    webcamRequired: Boolean,
    lockQuestions: Boolean,
    questions: [
      {
        title: String,
        points: Number,
        question: String,
        questionType: String,
        answer: [
          {
            isCorrect: Boolean,
            value: String,
          },
        ],
      },
    ],
  },
  { collection: "quizzes" }
);
export default quizzesSchema;
