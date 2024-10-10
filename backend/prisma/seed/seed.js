const { PrismaClient } = require("@prisma/client");
const seedShortlinks = require("./shortlinks");

const prisma = new PrismaClient();

const seedDatabase = async () => {
  try {
    await seedShortlinks(prisma);
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
};

seedDatabase();