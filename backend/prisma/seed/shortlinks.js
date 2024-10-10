const seedShortlinks = async (prisma) => {
    await prisma.shortlinks.createMany({
      data,
    });
  
    console.log("Shortlinks seeded successfully");
  };
  
const data = [
    {
      longUrl: "tes",
      shortUrl: "tes",
      clicks: 0
    },
    {
        longUrl: "tes tes",
        shortUrl: "tes tes",
        clicks: 0
      },
  ];
  
module.exports = seedShortlinks;