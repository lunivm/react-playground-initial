const express = require('express');
const featuredRouter = express.Router();
const faker = require('faker');

featuredRouter.get('/', function(req, res) {
  const items = new Array(12).fill({}).map(() => ({
    id: faker.random.uuid(),
    image: faker.image.image(),
    title: faker.commerce.productName(),
    vendorImage: faker.image.avatar()
  }));

  const resp = {
    items
  };

  res.send(resp);
});

module.exports = featuredRouter;
