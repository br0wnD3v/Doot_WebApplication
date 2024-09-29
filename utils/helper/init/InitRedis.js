const HOST = process.env.REDIS_REST_HOST;
const PASSWORD = process.env.REDIS_REST_TOKEN;

import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const redis = new Redis({
  url: HOST,
  token: PASSWORD,
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(6, "60s"),
  prefix: "@upstash/ratelimit",
});

module.exports = { redis, ratelimit };
