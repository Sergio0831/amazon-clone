import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import ProductModel from "../../../models/Product";
import { Product } from "../../../types/Data.types";
import db from "../../../utils/db";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (req, res) => {
  await db.connect();
  const products: Product[] = await ProductModel.find({});
  await db.disconnect();
  res.send(products);
});

export default handler;
