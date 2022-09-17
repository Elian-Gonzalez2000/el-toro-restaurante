const { AuthModel } = require("../../db/models/auth");

exports.getAllUsers = async (req: any, res: any) => {
   try {
      const users = await AuthModel.findAll();
      if (users) {
         //console.log(activities);
         res.status(200).json(users);
      }
   } catch (error) {
      console.log(error);
      res.status(400).json({
         message: "Algo salio mal",
         data: error,
      });
   }
};

exports.getUserByName = async (req: any, res: any) => {
   const { useremail } = req.params;
   try {
      const user = await AuthModel.findAll({
         where: {
            email: useremail,
         },
      });
      if (user && user.length === 0) {
         //console.log(activities);
         res.status(400).json({
            message: "No se encontro el usuario " + useremail,
         });
      }
      if (user) {
         //console.log(activities);
         res.status(200).json(user);
      }
   } catch (error) {
      console.log(error);
      res.status(400).json({
         message: "Algo salio mal",
         data: error,
      });
   }
};

export const signin = async (req: any, res: any) => {
   try {
      const { email, password, role } = req.body;
      //console.log(email, password);

      if (!email) {
         return res
            .status(406)
            .json({ message: "El correo electronico no puede ser vacío" });
      }

      if (!password) {
         return res
            .status(406)
            .json({ message: "La contraseña no puede ser vacío" });
      }
      if (role !== "admin") {
         return res.status(406).json({ message: "Esta cuenta no es de admin" });
      }

      const user = await AuthModel.findAll({
         where: {
            email: email,
            password,
            role: role,
         },
      });
      //console.log(user);
      if (user.length > 0) {
         console.log("Usuario ", user[0].dataValues);
         const {
            id,
            firstName,
            lastName,
            fullName,
            identificationCard,
            email,
            role,
            createdAt,
            updatedAt,
         } = user[0].dataValues;
         if (role === "admin") {
            res.status(200).json({
               id,
               firstName,
               lastName,
               fullName,
               identificationCard,
               email,
               role,
               createdAt,
               updatedAt,
            });
         } else {
            return res
               .status(406)
               .json({ message: "Esta cuenta no es de admin" });
         }
      } else {
         return res.status(406).json({ message: "Datos incorrectos" });
      }

      //console.log(user);
   } catch (error) {
      console.log(error);
      return res.status(400).json({
         message: "Algo salio mal",
         data: error,
      });
   }
};

export const signup = async (req: any, res: any) => {
   try {
      const { firstName, lastName, identificationCard, email, password, role } =
         req.body;

      const user = await AuthModel.findAll({
         where: {
            email: email,
            role: role,
         },
      });
      if (user.length > 0) {
         //console.log(user);
         return res.status(400).json({
            message: "Admin already registered",
         });
      }

      if (!firstName.trim()) {
         return res
            .status(406)
            .json({ message: "El nombre no puede ser vacío" });
      }
      if (!lastName.trim()) {
         return res
            .status(406)
            .json({ message: "El apellido no puede ser vacío" });
      }
      if (!identificationCard.trim()) {
         return res.status(406).json({
            message: "El numero de identificacion no puede ser vacío",
         });
      }
      if (!email.trim()) {
         return res
            .status(406)
            .json({ message: "El correo electronico no puede ser vacío" });
      }
      if (!password.trim()) {
         return res
            .status(406)
            .json({ message: "La contraseña no puede estar vacía" });
      }

      const userData = {
         firstName,
         lastName,
         identificationCard,
         fullName: `${firstName} ${lastName}`,
         email,
         password: password,
         role,
      };
      let newUser = await AuthModel.create(userData);
      if (newUser) {
         res.json({ message: "Usuario creado correctamente", data: newUser });
      }
   } catch (error) {
      console.log(error);
      res.status(400).json({
         message: "Algo salio mal",
         data: error,
      });
   }
};

exports.getUserByName = async (req: any, res: any) => {
   const { useremail } = req.params;
   try {
      const user = await AuthModel.findAll({
         where: {
            email: useremail,
         },
      });
      if (user && user.length === 0) {
         //console.log(activities);
         return res.status(400).json({
            message: "No se encontro el usuario " + useremail,
         });
      }
      if (user) {
         //console.log(activities);
         return res.status(200).json(user);
      }
   } catch (error) {
      console.log(error);
      return res.status(400).json({
         message: "Algo salio mal",
         data: error,
      });
   }
};

exports.editUserByEmail = async (req: any, res: any) => {
   const { useremail } = req.params;
   const {
      firstName,
      lastName,
      identificationCard,
      username,
      email,
      password,
      role,
   } = req.body;
   try {
      const userUpdated = await AuthModel.update(
         {
            firstName,
            lastName,
            identificationCard,
            username,
            email,
            hash_password: password,
            role,
         },
         {
            where: { email: useremail },
         }
      );
      if (userUpdated) {
         //console.log(activities);
         return res.status(200).json(userUpdated);
      }
      if (userUpdated && userUpdated.length === 0) {
         //console.log(activities);
         return res.status(400).json({
            message: "No se encontro el usuario " + useremail,
         });
      }
   } catch (error) {
      console.log(error);
      return res.status(400).json({
         message: "Algo salio mal",
         data: error,
      });
   }
};

exports.deleteUserByEmail = async (req: any, res: any) => {
   const { useremail } = req.params;

   try {
      const userDelete = await AuthModel.destroy({
         where: { email: useremail },
      });
      if (userDelete) {
         //console.log(activities);
         return res
            .status(200)
            .json({ message: "Usuario borrado", delete: userDelete });
      }
      if (!userDelete) {
         //console.log(activities);
         return res.status(400).json({
            message: "No se encontro el usuario " + useremail,
         });
      }
   } catch (error) {
      console.log(error);
      return res.status(400).json({
         message: "Algo salio mal",
         data: error,
      });
   }
};
