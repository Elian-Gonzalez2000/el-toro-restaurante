const { AuthModel } = require("../../db/models/auth");
const { ProductModel } = require("../../db/models/product");

export const initialData = async (req: any, res: any) => {
   try {
      const users = await AuthModel.findAll();
      const products = await ProductModel.findAll();

      res.status(200).json({
         users,
         products,
      });
   } catch (error) {
      console.log(error);
   }
};
