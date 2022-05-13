import { IBase } from "./base.model";

export interface IWine extends IBase{
    country:string;
    location:string;
    grape:string;
}