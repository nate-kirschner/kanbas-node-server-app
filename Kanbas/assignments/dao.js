import model from "./model.js";

export const findAssignmentsById = (cid) => model.find({ cid: cid });
