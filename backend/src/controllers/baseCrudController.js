const { catchAsync } = require("../utils/catchAsync");

function createCrudController(service) {
  return {
    list: catchAsync(async (req, res) => {
      const data = await service.list({ query: req.query });
      res.status(200).json(data);
    }),
    getById: catchAsync(async (req, res) => {
      const item = await service.getById(req.params.id);
      res.status(200).json(item);
    }),
    create: catchAsync(async (req, res) => {
      const item = await service.create(req.body);
      res.status(201).json(item);
    }),
    update: catchAsync(async (req, res) => {
      const item = await service.update(req.params.id, req.body);
      res.status(200).json(item);
    }),
    remove: catchAsync(async (req, res) => {
      await service.remove(req.params.id);
      res.status(204).send();
    }),
  };
}

module.exports = { createCrudController };
