import { PrismaClient } from "@prisma/client";
import { PrismaService } from "src/service/prisma.service";

const prisma = new PrismaClient();

export default class AppRepository {
    _prisma = null;
    _model = "List";
    private prisma: PrismaService = PrismaService.get();

    constructor () {
        this._prisma = this.prisma;
    }

    create = async (data: any) => {
        return await this._prisma[this._model].create({data: data});
    }

    find = async (where: any, options: any, include = undefined) => {
        return await this._prisma[this._model].findMany({
            skip: options.skip,
            take: options.take,
            orderBy: options.orderBy,
            where,
            include: include
        });
    }

    update = async (id: number, data: any, include = undefined) => {
        return await this._prisma[this._model].update({
            where: {
                id: id
            },
            data: data,
            include: include
        })
    }
}