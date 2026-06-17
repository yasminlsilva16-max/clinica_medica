const prisma = require('../models/prismaClient.js');

exports.criar = async (req, res) => {

    try {

        const paciente = await prisma.paciente.create({

            data: req.body

        });

        res.status(201).json(paciente);

    } catch (error) {

        res.status(500).json(error);

    }

}

exports.listar = async (req, res) => {

    const pacientes = await prisma.paciente.findMany();

    res.json(pacientes);

}