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
      //console.log(JSON.parse(req.body));

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
            .json({ message: "Debe ingresar imagenes de los productos" });
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
         quantity: Number(quantity),
         description,
         productPicture: stringProductPictures,
         category,
         createdBy,
      });
      //console.log(Product);

      if (product) {
         return res.status(201).json({
            message: "Producto creado satisfactoriamente",
            data: product,
         });
      } else {
         res.status(400).json({ message: "mal" });
      }
   } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "algo salio mal", error });
   }
};

export const getProductById = async (req: any, res: any) => {
   try {
      const { id } = req.params;
      const product = await ProductModel.findByPk(id);
      if (product) {
         res.status(200).json(product);
      }
   } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Algo salio mal", error });
   }
};

export const editProductById = async (req: any, res: any) => {
   try {
      const { id } = req.params;
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
      } else if (!req.body.productPictures) {
         return res
            .status(406)
            .json({ message: "Debe ingresar imagenes de los productos" });
      }

      //console.log("product", productPictures);
      let stringProductPictures = "";
      productPictures.forEach((el: any) => {
         return (stringProductPictures = `${stringProductPictures}${el.img};`);
      });
      const productUpdated = await ProductModel.update(
         {
            name,
            slug: slugify(name).toLowerCase(),
            price,
            quantity: Number(quantity),
            description,
            productPicture: stringProductPictures,
            category,
            createdBy,
         },
         {
            where: { id: id },
         }
      );
      if (productUpdated) {
         //console.log(activities);
         return res.status(200).json(productUpdated);
      }
      if (productUpdated && productUpdated.length === 0) {
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

export const deleteProduct = async (req: any, res: any) => {
   try {
      const { id } = req.params;
      console.log(id);
      const product = await ProductModel.destroy({
         where: { id: id },
      });
      if (product) {
         res.status(200).json({ message: "Producto eliminado correctamente" });
      }
   } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
   }
};
