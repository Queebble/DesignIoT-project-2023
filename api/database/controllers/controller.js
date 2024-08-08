const db = require("../models");
const movements = db.movements;
const Op = db.Sequelize.Op;

// Retrieve all movements from the database.
const getAllMovements = async (req, res) => {
  try {
    const movementList = await movements.findAll();
    return res.status(200).json({ movementList });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Retrieve oncology room 1 movements from the database.
const getOncoR1 = async (req, res) => {
  try {
    const oncoR1Moves = await movements.findAll({ where: { room_id: 1 }, order: [['entering', 'DESC']] });
    return res.status(200).json({ oncoR1Moves });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Retrieve oncology room 1 movements from the database.
const getOncoR1Enter = async (req, res) => {
  try {
    const oncoR1Moves = await movements.findAll({ where: { room_id: 1, entering: true, [Op.not]: { role_id: 5 } }, order: [['time', 'DESC']] });
    return res.status(200).json({ oncoR1Moves });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Retrieve oncology room 1 movements from the database.
const getOncoR1Spec = async (req, res) => {
  try {
    const oncoR1Spec = await movements.findAll({ where: { room_id: 1, entering: true, [Op.not]: { role_id: 5 } }, order: [['time', 'DESC']] });
    return res.status(200).json({ oncoR1Spec });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Retrieve oncology room 1 movements from the database.
const getOncoR1Time = async (req, res) => {
  try {
    const oncoR1Time = await movements.findAll({ where: { room_id: 1 }, order: [['booking_id', 'ASC'], ['time', 'ASC']] });
    return res.status(200).json({ oncoR1Time });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Retrieve neurology room 1 movements from the database.
const getNeuroR1 = async (req, res) => {
  try {
    const neuroR1Moves = await movements.findAll({ where: { room_id: 2 }, order: [['entering', 'DESC']]  });
    return res.status(200).json({ neuroR1Moves });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Retrieve neurology room 1 movements from the database.
const getNeuroR1Enter = async (req, res) => {
  try {
    const neuroR1Moves = await movements.findAll({ where: { room_id: 2, entering: true, [Op.not]: { role_id: 5 } }, order: [['time', 'DESC']] });
    return res.status(200).json({ neuroR1Moves });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Retrieve oncology room 1 movements from the database.
const getNeuroR1Time = async (req, res) => {
  try {
    const neuroR1Time = await movements.findAll({ where: { room_id: 2 }, order: [['booking_id', 'ASC'], ['time', 'ASC']] });
    return res.status(200).json({ neuroR1Time });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Retrieve gastrology room 1 movements from the database.
const getGastroR1 = async (req, res) => {
  try {
    const gastroR1Moves = await movements.findAll({ where: { room_id: 3 }, order: [['entering', 'DESC']]  });
    return res.status(200).json({ gastroR1Moves });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Retrieve gastrology room 1 movements from the database.
const getGastroR1Enter = async (req, res) => {
  try {
    const gastroR1Moves = await movements.findAll({ where: { room_id: 3, entering: true, [Op.not]: { role_id: 5 } }, order: [['time', 'DESC']] });
    return res.status(200).json({ gastroR1Moves });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Retrieve oncology room 1 movements from the database.
const getGastroR1Time = async (req, res) => {
  try {
    const gastroR1Time = await movements.findAll({ where: { room_id: 3 }, order: [['booking_id', 'ASC'], ['time', 'ASC']] });
    return res.status(200).json({ gastroR1Time });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Retrieve radiology room 1 movements from the database.
const getRadioR1Moves = async (req, res) => {
  try {
    const radioR1Moves = await movements.findAll({ where: { room_id: 4 }, order: [['entering', 'DESC']]  });
    return res.status(200).json({ radioR1Moves });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


// Retrieve radiology room 1 movements from the database.
const getRadioR1Enter = async (req, res) => {
  try {
    const radioR1Moves = await movements.findAll({ where: { room_id: 4, entering: true, [Op.not]: { role_id: 5 } }, order: [['time', 'DESC']] });
    return res.status(200).json({ radioR1Moves });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Retrieve oncology room 1 movements from the database.
const getRadioR1Time = async (req, res) => {
  try {
    const radioR1Time = await movements.findAll({ where: { room_id: 4 }, order: [['booking_id', 'ASC'], ['time', 'ASC']] });
    return res.status(200).json({ radioR1Time });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Retrieve radiology room 2 movements from the database.
const getRadioR2Moves = async (req, res) => {
  try {
    const radioR2Moves = await movements.findAll({ where: { room_id: 5 }, order: [['entering', 'DESC']]  });
    return res.status(200).json({ radioR2Moves });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Retrieve radiology room 2 movements from the database.
const getRadioR2Enter = async (req, res) => {
  try {
    const radioR2Moves = await movements.findAll({ where: { room_id: 5, entering: true, [Op.not]: { role_id: 5 } }, order: [['time', 'DESC']] });
    return res.status(200).json({ radioR2Moves });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Retrieve oncology room 1 movements from the database.
const getRadioR2Time = async (req, res) => {
  try {
    const radioR2Time = await movements.findAll({ where: { room_id: 5 }, order: [['booking_id', 'ASC'], ['time', 'ASC']] });
    return res.status(200).json({ radioR2Time });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllMovements,
  getOncoR1,
  getNeuroR1,
  getGastroR1,
  getRadioR1Moves,
  getRadioR2Moves,
  getOncoR1Enter,
  getNeuroR1Enter,
  getGastroR1Enter,
  getRadioR1Enter,
  getRadioR2Enter,
  getOncoR1Spec,
  getOncoR1Time,
  getNeuroR1Time,
  getGastroR1Time,
  getRadioR1Time,
  getRadioR2Time
}