require("dotenv").config();
const express = require('express');
const app = express();
const pg = require('pg');
const { Client } = pg;
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const shortId = require('shortid');

const port = process.env.PORT;
const db_url = process.env.DATABASE_URL;

const client = new Client(db_url)
client.connect()

app.use(express.json());

app.get('/api/shortlinks', async (req, res) => {
    try {
        const shortlinks = await prisma.shortlinks.findMany();
        console.log(shortlinks)
        res.json(shortlinks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
app.post('/api/shortlinks', async (req, res) => {
    try {
      const data = await prisma.shortlinks.create({
        data: {
            longUrl: req.body.longUrl,
            shortUrl: shortId.generate(),
            clicks: 0
        },
      });
  
      res.json(data);
      console.log(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

app.get('/api/:shortUrl', async (req, res) => {
    try {
      const shortUrl = await prisma.shortlinks.findFirst({
        where: {
          shortUrl: req.params.shortUrl
        }
      });
  
      if (!shortUrl) {
        return res.status(404).send("URL not found");
      }
  
      await prisma.shortlinks.update({
        where: { id: shortUrl.id },
        data: { clicks: shortUrl.clicks + 1 },
      });  
  
      res.redirect(shortUrl.longUrl);
      console.log(shortUrl.longUrl)
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});
  
  

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});