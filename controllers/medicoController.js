const prisma = require('../models/prismaClient');

exports.criar = async (req, res) => {

    try {

        const medico = await prisma.medico.create({
            data: req.body
        });

        res.status(201).json(medico);

    } catch (error) {

        res.status(500).json(error);

    }

}

exports.listar = async (req, res) => {

    const medicos = await prisma.medico.findMany({
        include: {
            especialidade: true
        }
    });

    res.json(medicos);

}