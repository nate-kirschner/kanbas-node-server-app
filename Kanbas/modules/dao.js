import model from "./model.js";

export const createModule = (module) => {
  delete module._id;
  return model.create(module);
};

export const findAllModules = () => model.find();

export const findModuleById = (cid) => model.find({ cid: cid });

export const updateModule = (moduleId, module) =>
  model.updateOne({ _id: moduleId }, { $set: module });

export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });
