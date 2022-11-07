const { AuthModel } = require("../../db/models/auth");
const { ProductModel } = require("../../db/models/product");
const { ShoppingModel } = require("../../db/models/shopping");

export const initialData = async (req: any, res: any) => {
   try {
      const users = await AuthModel.findAll();
      const products = await ProductModel.findAll();
      const purchases = await ShoppingModel.findAll();

      res.status(200).json({
         users,
         products,
         purchases,
      });
   } catch (error) {
      console.log(error);
   }
};
