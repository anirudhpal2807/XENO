import { MongoClient } from "mongodb";

const uri = process.env.NEXT_PUBLIC_BASE_URL as string;
const options = {};

if (!uri) {
  throw new Error("Please add your MongoDB URI to .env (NEXT_PUBLIC_BASE_URL)");
}

let client;
let clientPromise: Promise<MongoClient>;

client = new MongoClient(uri, options);
clientPromise = client.connect();

export default clientPromise; 