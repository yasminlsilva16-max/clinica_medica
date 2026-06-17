const prisma = require('../models/prismaClient');

exports.criar = async (req, res) => {

    try {

        const especialidade = await prisma.especialidade.create({

            data: req.body

        });

        res.status(201).json(especialidade);

    } catch (error) {

        res.status(500).json(error);

    }

}

exports.listar = async (req, res) => {

    const especialidades = await prisma.especialidade.findMany();

    res.json(especialidades);

}