var nodemailer = require("nodemailer");
import { Request, Response } from "express";

export const sendEmail = (req: Request, res: Response) => {
   const { name, price, email, cellphone, ci, products } = req.body;

   var transporter = nodemailer.createTransport({
      service: "Gmail",
      // host: "smtp.ethereal.email",
      // post: 587,
      // secure: false,
      auth: {
         user: "eliancarlogm@gmail.com",
         pass: "ifgeyvrkdmeveyce",
      },
   });

   var mailOptions = {
      subject: "Pedido en espera de verificacion.",
      to: "eliancarlogm@gmail.com",
      attachDataUrls: true,
      form: "Thanks~.",
      html: `<img
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbbbKBW-C30PxbCgdAZr8k_nG-g4lJAeV07Q&usqp=CAU"
         alt="El toro logo"
         style="width: 120px; height: auto; text-align: center"
      />
         <h2>Pedido de compra</h2>
         <p><strong>Cliente: </strong>${name}</p>
         <p><strong>Cedula: </strong>${ci}</p>
         <p><strong>Correo Electronico: </strong>${email}</p>
         <p><strong>Numero de telefono: </strong>${cellphone}</p>
         <p><strong>El precio total de la compra fue: </strong>${price} dolares o ${(
         price * 8.2
      ).toFixed(2)} bolivares</p>
      <h3>Para verificar los productos, mire el pedido en la pagina de administrador</h3>

      `,
   };
   transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
         res.status(500).send(error.message);
         console.log(error.message);
      } else {
         res.status(200).json(req.body);
      }
   });
};
