import * as dao from "./dao.js";

function QuizzesRoutes(app) {
  app.put("/api/courses/:cid/quizzes", async (req, res) => {
    const quizId = req.body._id;

    const status = await dao.updateQuiz(quizId, req.body);

    res.json(status);
  });

  app.post("/api/courses/:cid/quizzes", async (req, res) => {
    const { cid } = req.params;
    const newQuiz = {
      title: "Default Quiz Title",
      cid: cid,
      instructions: "",
      availableDate: new Date().toString(),
      dueDate: new Date().toString(),
      untilDate: new Date().toString(),
      points: 0,
      numQuestions: 0,
      isPublished: false,
      quizType: "Graded Quiz",
      assignmentGroup: "Quizzes",
      shuffleAnswers: true,
      timeLimit: 20,
      multipleAttempts: false,
      showCorrectAnswers: false,
      accessCode: "",
      oneQuestionAtATime: true,
      webcamRequired: false,
      lockQuestions: false,
      questions: [],
    };
    const quiz = await dao.createQuiz(newQuiz);

    res.send(quiz);
  });

  app.get("/api/courses/:cid/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;

    const quiz = await dao.findQuizByQuizId(quizId);
    res.send(quiz);
  });

  app.get("/api/courses/:cid/quizzes", async (req, res) => {
    const { cid } = req.params;

    const courseQuizzes = await dao.findQuizByCourseId(cid);
    res.send(courseQuizzes);
  });

  app.delete("/api/courses/:cid/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;

    const status = await dao.deleteQuiz(quizId);
    res.json(status);
  });
}

export default QuizzesRoutes;
