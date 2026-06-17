const prisma = require('../models/prismaClient');

exports.criar = async (req, res) => {

    try {

        const consulta = await prisma.consulta.create({

            data: req.body

        });

        res.status(201).json(consulta);

    } catch (error) {

        res.status(500).json(error);

    }

}

exports.listar = async (req, res) => {

    const consultas = await prisma.consulta.findMany({

        include: {

            paciente: true,

            medico: true,

            usuario: true

        }

    });

    res.json(consultas);

}

exports.finalizar = async (req, res) => {

    const consulta = await prisma.consulta.update({

        where: {

            id: Number(req.params.id)

        },

        data: {

            status: "FINALIZADA"

        }

    });

    res.json(consulta);

}

exports.cancelar = async (req, res) => {

    const consulta = await prisma.consulta.update({

        where: {

            id: Number(req.params.id)

        },

        data: {

            status: "CANCELADA"

        }

    });

    res.json(consulta);

}