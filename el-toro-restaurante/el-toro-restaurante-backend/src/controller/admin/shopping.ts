const { ShoppingModel } = require("../../db/models/shopping.js");
import { Request, Response } from "express";

export const getAllPurchases = async (req: Request, res: Response) => {
   try {
      const purchases = await ShoppingModel.findAll();
      if (purchases) {
         //console.log(activities);
         res.status(200).json([...purchases]);
      }
   } catch (error) {
      console.log(error);
      res.status(400).json({
         message: "Algo salio mal",
         data: error,
      });
   }
};

export const getPurchase = (req: Request, res: Response) => {
   res.status(200).json({ message: "Holaaaaaaaaa" });
};

export const createPurchase = async (req: Request, res: Response) => {
   try {
      const { email, name, ci, price, cellphone, products } = req.body;
      let sendPurchase = await ShoppingModel.create({
         email,
         name,
         ci,
         total: price,
         cellphone,
         products: JSON.stringify(products),
      });
      if (sendPurchase) {
         //console.log(sendPurchase);
         return res.status(200).json("Compra realizada correctamente");
      }
   } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Algo salio mal", error });
   }
};

export const editPurchase = async (req: Request, res: Response) => {
   try {
      const { id } = req.params;

      /* if (!category)
         return res
            .json(406)
            .status({ message: "La categoria es obligatoria" }); */

      const purchaseUpdated = await ShoppingModel.update(
         {
            ...req.body,
            verified: true,
         },
         {
            where: { id: id },
         }
      );
      if (purchaseUpdated) {
         console.log(purchaseUpdated);
         return res.status(200).json(purchaseUpdated);
      }
      if (purchaseUpdated && purchaseUpdated.length === 0) {
         //console.log(activities);
         return res.status(400).json({
            message: "No se encontro el usuario ",
         });
      }
   } catch (error) {
      console.log(error);
      return res.status(400).json({
         message: "Algo salio mal",
         error: error,
      });
   }
};

export const deletePurchase = async (req: Request, res: Response) => {
   try {
      const { id } = req.params;
      console.log(id);
      const purchase = await ShoppingModel.destroy({
         where: { id: id },
      });
      if (purchase) {
         res.status(200).json({ message: "Compra eliminada correctamente" });
      }
   } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
   }
};
