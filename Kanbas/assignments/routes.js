import * as dao from "./dao.js";

export default function AssignmentsRoutes(app) {
  app.get("/api/assignments/:cid", async (req, res) => {
    const { cid } = req.params;
    const course = await dao.findAssignmentsById(cid);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
  });
}
