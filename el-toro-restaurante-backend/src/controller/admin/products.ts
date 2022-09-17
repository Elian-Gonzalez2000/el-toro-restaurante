import slugify from "slugify";

const { ProductModel } = require("../../db/models/product");

interface Body {
   name: string;
   price: string;
   quantity: number | undefined;
   description: string;
   category: string;
   productPicture: string | undefined;
   createdBy: string | undefined;
}
export const createProduct = async (req: any, res: any) => {
   try {
      //res.status(201).json({ message: "listoo" });
      const {
         name,
         price,
         quantity,
         description,
         category,
         productPicture,
         createdBy,
      }: Body = req.body;

      if (!name)
         return res.json(406).status({ message: "El nombre es obligatorio" });

      if (!price)
         return res.json(406).status({ message: "El precio es obligatorio" });

      if (!description)
         return res
            .json(406)
            .status({ message: "La descripcion es obligatoria" });

      if (!category)
         return res
            .json(406)
            .status({ message: "La categoria es obligatoria" });

      const product = await ProductModel.create({
         name,
         slug: slugify(name).toLowerCase(),
         price,
         quantity,
         description,
         productPicture,
         category,
         createdBy,
      });
      //console.log(Product);

      if (product)
         return res.status(201).json({
            message: "Producto creado satisfactoriamente",
            data: product,
         });
   } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "algo salio mal", error });
   }
};
