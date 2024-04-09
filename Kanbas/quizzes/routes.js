import fs from "fs";

let quizzes = JSON.parse(
  fs.readFileSync("Kanbas/Database/quizzes.json", "utf8")
);

function QuizzesRoutes(app) {
  app.put("/api/courses/:cid/quizzes", async (req, res) => {
    const { cid } = req.params;
    const quizId = req.body._id;
    quizzes = quizzes.map((quiz) => {
      return quiz._id === quizId ? req.body : quiz;
    });
    res.send(quizzes);
  });

  app.post("/api/courses/:cid/quizzes", async (req, res) => {
    const { cid } = req.params;
    const newQuiz = {
      _id: Date.now().toString(),
      title: "Default Quiz Title",
      isPublished: false,
      courseNumber: cid,
    };
    quizzes.push(newQuiz);
    res.send(newQuiz);
  });

  app.get("/api/courses/:cid/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;

    const quiz = quizzes.find((quiz) => quiz._id === quizId);
    res.send(quiz);
  });

  app.get("/api/courses/:cid/quizzes", async (req, res) => {
    const { cid } = req.params;

    const courseQuizzes = quizzes.filter((quiz) => quiz.courseNumber === cid);
    res.send(courseQuizzes);
  });

  app.delete("/api/courses/:cid/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;

    quizzes = quizzes.filter((quiz) => quiz._id !== quizId);
    res.sendStatus(204);
  });
}

export default QuizzesRoutes;
