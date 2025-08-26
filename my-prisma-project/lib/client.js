import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export default prisma;
