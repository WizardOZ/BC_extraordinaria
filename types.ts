import { ObjectId, type OptionalId } from "mongodb";

export type TestModel = OptionalId<{
	name: string;
	age: number;
	email: string;
}>;

export type Test = {
	id: string;
	name: string;
	age: number;
	email: string;
};
