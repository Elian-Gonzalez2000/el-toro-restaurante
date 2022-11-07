import React from "react";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import Container from "../../components/UI/Container";

function HomePage() {
   const auth = useSelector((state: any): any => state.auth);
   return (
      <main>
         <Layout>
            <Container className={"homepage"}>
               <h1>
                  Bienvenido{" "}
                  {auth.user?.fullName ? auth.user.fullName : "Desconocido"} a
                  la pagina de administrador
               </h1>
               <p>
                  Aqui podras visualizar la informacion que se encuentra en la
                  pagina principal como los productos, pero ademas podras crear
                  usuarios para manejar esta pagina o eliminarlos, pero esto
                  solo lo puede hacer alguien con los permisos necesarios.
               </p>
               <br />
               <p>
                  Los productos ademas de crearlos tambien podras eliminarlos o
                  editarlos, ten en cuenta que la informacion que cambies aqui
                  se reflejara en la pagina principal que observa el cliente.
               </p>
            </Container>
         </Layout>
      </main>
   );
}

export default HomePage;
