const prisma = require('../models/prismaClient');

exports.criar = async (req, res) => {

    try {

        const usuario = await prisma.usuario.create({

            data: req.body

        });

        res.status(201).json(usuario);

    } catch (error) {

        res.status(500).json(error);

    }

}

exports.listar = async (req, res) => {

    const usuarios = await prisma.usuario.findMany();

    res.json(usuarios);

}