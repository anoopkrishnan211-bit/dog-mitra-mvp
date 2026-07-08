const { BaseRepository } = require("../repositories/baseRepository");
const { BaseCrudService } = require("../services/baseCrudService");
const { createCrudController } = require("../controllers/baseCrudController");
const { createResourceRouter } = require("../routes/createResourceRouter");

function createResourceModule(model, roles) {
  const repository = new BaseRepository(model);
  const service = new BaseCrudService(repository);
  const controller = createCrudController(service);
  const router = createResourceRouter(controller, roles);
  return { repository, service, controller, router };
}

module.exports = { createResourceModule };
