import { prismaClient } from "@prisma/client";

const prisma = globalThis.prisma || new prismaClient();
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export default prisma;
