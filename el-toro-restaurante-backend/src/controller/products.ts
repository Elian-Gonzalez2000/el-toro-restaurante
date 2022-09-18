import slugify from "slugify";

const { ProductModel } = require("../db/models/product");

interface Body {
   name: string;
   price: string;
   quantity: number | undefined;
   description: string;
   category: string;
   productPicture: string | undefined;
   createdBy: string | undefined;
}

export const getAllProducts = async (req: any, res: any) => {
   try {
      const product = await ProductModel.findAll();
      if (product) {
         //console.log(activities);
         res.status(200).json([...product]);
      }
   } catch (error) {
      console.log(error);
      res.status(400).json({
         message: "Algo salio mal",
         data: error,
      });
   }
};

export const createProduct = async (req: any, res: any) => {
   try {
      //res.status(201).json({ message: "listoo" });
      const { name, price, quantity, description, category, createdBy }: Body =
         req.body;

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

      let productPictures = [];

      if (req.files && req.files.length > 0) {
         productPictures = req.files.map((file: any) => {
            return { img: file.filename };
         });
      } else {
         return res
            .status(406)
            .json({ message: "Debe ingresar imagenes de las actividades" });
      }

      //console.log("product", productPictures);
      let stringProductPictures = "";
      productPictures.forEach((el: any) => {
         return (stringProductPictures = `${stringProductPictures}${el.img};`);
      });

      const product = await ProductModel.create({
         name,
         slug: slugify(name).toLowerCase(),
         price,
         quantity,
         description,
         productPicture: stringProductPictures,
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
