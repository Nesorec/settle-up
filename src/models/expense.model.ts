import { IUser } from "./user.model";

export interface IExpense {
    payingUser: IUser,
    payedFor: IUser[],
    amount: number,
    description: string
}