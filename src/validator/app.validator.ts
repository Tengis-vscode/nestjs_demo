import { Type } from "class-transformer";

export class AppGetListWhere {
    id: number;
    name: string;
    priority: string;
}

export class AppGetListOptions {
    skip: number;
    take: number;
    orderBy: any;
}

export class AppGetListDto {
    @Type(() => AppGetListWhere)
    where: AppGetListWhere;
    @Type(() => AppGetListOptions)
    options: AppGetListOptions;
}

export class AppCreateListDto {
    name: string;
    description: string;
    dueDate: Date;
    priority: number;
}

export class AppUpdateListDto {
    id: number;
    name: string;
    description: string;
    dueDate: Date;
    priority: number;
    status: number;
}