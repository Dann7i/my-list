import { prismaClient } from "@prisma/client";

const prisma = globalThis.prisma || new prismaClient();
