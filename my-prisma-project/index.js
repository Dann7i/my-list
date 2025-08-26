//index.js

import prisma from "./lib/client.js";

async function main() {
  const users = await prisma.user.findMany();
  console.log(users);
}

main();
