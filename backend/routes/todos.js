const express = require('express');
const todosRouter = express.Router();
const faker = require('faker');

const generateItemObject = () => ({
  id: faker.random.uuid(),
  title: faker.lorem.words()
});
const generateItems = count => {
  const generateItem = (items, currStep) => {
    const nextStep = currStep + 1;

    if (nextStep <= count) {
      return generateItem([...items, generateItemObject()], nextStep)
    } else {
      return items;
    }
  }

  return generateItem([], 0);
};

const dbMock = generateItems(4);

todosRouter.get('/', (req, res) => {
  res.send(dbMock);
});

todosRouter.post('/', (req, res) => {

});

module.exports = todosRouter;
