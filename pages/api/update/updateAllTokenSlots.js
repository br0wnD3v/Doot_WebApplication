const {
  TOKEN_TO_CACHE,
  ORACLE_PUBLIC_KEY,
} = require("../../../utils/constants/info");
const { redis } = require("../../../utils/helper/InitRedis");
const appendSignatureToSlot = require("../../../utils/helper/AppendSignatureToSlot");

export default async function handler(req, res) {
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    res.status(401).json("Unauthorized");
    return;
  }

  const keys = Object.keys(TOKEN_TO_CACHE);

  for (const token in keys) {
    const cachedData = await redis.get(TOKEN_TO_CACHE[token]);

    await appendSignatureToSlot(
      token,
      cachedData,
      cachedData.signature,
      ORACLE_PUBLIC_KEY
    );
  }
  res.status(201).json({ status: 1 });
}
