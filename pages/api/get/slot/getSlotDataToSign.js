const { redis } = require("../../../../utils/helper/init/InitRedis");
const {
  TOKEN_TO_CACHE,
  TOKEN_TO_SYMBOL,
} = require("../../../../utils/constants/info");

export default async function handler(req, res) {
  let { token } = req.query;
  token = token.toLowerCase();

  if (!TOKEN_TO_SYMBOL[token])
    return res
      .status(400)
      .json({ status: 400, message: "ERR! Invalid token." });

  const cachedData = await redis.get(TOKEN_TO_CACHE[token.toLowerCase()]);

  if (cachedData) {
    return res.status(200).json({
      status: true,
      data: cachedData,
      asset: token,
      message: "Slot data found.",
    });
  } else {
    return res.status(404).json({
      status: false,
      data: null,
      asset: token,
      message: "Slot data not found.",
    });
  }
}
