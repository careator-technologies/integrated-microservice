
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateExcelInput {
    exampleField?: Nullable<number>;
}

export interface UpdateExcelInput {
    id: number;
}

export interface Excel {
    exampleField?: Nullable<number>;
}

export interface IQuery {
    excel(): Nullable<Excel>[] | Promise<Nullable<Excel>[]>;
}

export interface IMutation {
    createExcel(createExcelInput: CreateExcelInput): Excel | Promise<Excel>;
    updateExcel(updateExcelInput: UpdateExcelInput): Excel | Promise<Excel>;
    removeExcel(id: number): Nullable<Excel> | Promise<Nullable<Excel>>;
    uploadFile(file: Upload): boolean | Promise<boolean>;
}

export type Upload = any;
type Nullable<T> = T | null;
