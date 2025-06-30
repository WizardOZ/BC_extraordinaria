import { MongoClient, ObjectId } from "mongodb";
import { TestModel } from "./types.ts";

const MONGO_URL = Deno.env.get("MONGO_URL");
if (!MONGO_URL) {
	console.error("MONGO_URL is not set");
	Deno.exit(1);
}

const client = new MongoClient(MONGO_URL);
await client.connect();
console.info("Connected to MongoDB");

const db = client.db("testDB");

const TestCollection = db.collection<TestModel>("test");

const handler = async (req: Request): Promise<Response> => {
	const method = req.method;
	const url = new URL(req.url);
	const path = url.pathname;

	if (method === "GET") {
		return new Response("Working");
	}

	return new Response("endpoint not found", { status: 404 });
};

Deno.serve({ port: 4000 }, handler);
