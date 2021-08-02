import { Stream } from "stream";

export type DbEntry = {
    id: number,
    name: string,
    dob:string
};

export interface Upload {
  filename: string;
  createReadStream: () => Stream;
}

