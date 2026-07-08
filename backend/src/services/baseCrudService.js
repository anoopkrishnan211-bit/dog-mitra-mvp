const { ApiError } = require("../utils/apiError");

class BaseCrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async list({ filter = {}, query = {}, sort = "-createdAt" } = {}) {
    const page = Math.max(Number(query.page || 1), 1);
    const limit = Math.min(Math.max(Number(query.limit || 20), 1), 100);
    const skip = (page - 1) * limit;
    const [items, total] = await Promise.all([
      this.repository.find(filter).sort(sort).skip(skip).limit(limit).lean(),
      this.repository.model.countDocuments(filter),
    ]);
    return { items, meta: { page, limit, total, pages: Math.ceil(total / limit) } };
  }

  async getById(id) {
    const item = await this.repository.findById(id).lean();
    if (!item) throw new ApiError(404, "Resource not found");
    return item;
  }

  async create(payload) {
    return this.repository.create(payload);
  }

  async update(id, payload) {
    const item = await this.repository.updateById(id, payload);
    if (!item) throw new ApiError(404, "Resource not found");
    return item;
  }

  async remove(id) {
    const item = await this.repository.deleteById(id);
    if (!item) throw new ApiError(404, "Resource not found");
    return item;
  }
}

module.exports = { BaseCrudService };
