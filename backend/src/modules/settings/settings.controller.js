const { z } = require("zod");
const { catchAsync } = require("../../utils/catchAsync");
const { getPublicSettings, updateSettings } = require("./settings.service");

const settingsSchema = z.object({
  contact: z.record(z.any()).optional(),
  site: z.record(z.any()).optional(),
});

const settingsController = {
  public: catchAsync(async (_req, res) => {
    const data = await getPublicSettings();
    res.status(200).json(data);
  }),
  update: catchAsync(async (req, res) => {
    const body = settingsSchema.parse(req.body);
    const data = await updateSettings(body);
    res.status(200).json(data);
  }),
};

module.exports = { settingsController };
