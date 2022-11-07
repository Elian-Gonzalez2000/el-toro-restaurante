import React, { useState, useEffect } from "react";
import { useTable, useRowSelect } from "react-table";
import useRows from "../../hooks/useRows";
import useColumns from "../../hooks/useColumns";
import Layout from "../../components/Layout";
import axios from "../../helpers/axios";
import Button from "../../components/UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { getInitialData, isUserLoggedIn } from "../../actions";
import Swal from "sweetalert2";

import "./index.css";
import Container from "../../components/UI/Container";
import { getAllUsers } from "../../actions";

const IndeterminateCheckbox = React.forwardRef(
   ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef: any = ref || defaultRef;

      //console.log(resolvedRef);
      React.useEffect(() => {
         resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
         <>
            <input type="checkbox" ref={resolvedRef} {...rest} />
         </>
      );
   }
);

function Users() {
   const [usersData, setUsersData] = useState([]);
   const columns = useColumns();
   const users = useSelector((state: any) => state.user);
   const userLogin = useSelector((state: any) => state.auth);
   const dispatch = useDispatch();

   //console.log(users);
   //let data = useRows([]);
   useEffect(() => {
      dispatch(getAllUsers());
   }, []);
   useEffect(() => {
      if (users.users) {
         setUsersData(
            users.users.map((user: any) => {
               return {
                  nombre: user.firstName,
                  apellido: user.lastName,
                  cedula: user.identificationCard,
                  email: user.email,
                  role: user.role,
               };
            })
         );
      }
      //console.log(usersData);
   }, [users.users]);

   const table = useTable(
      { columns, data: usersData && usersData },
      useRowSelect,
      (hooks: any) => {
         hooks.visibleColumns.push((columns: any) => [
            // Let's make a column for selection
            userLogin.user?.role === "superadmin"
               ? {
                    id: "selection",
                    // The header can use the table's getToggleAllRowsSelectedProps method
                    // to render a checkbox

                    // The cell can use the individual row's getToggleRowSelectedProps method
                    // to the render a checkbox
                    Cell: ({ row }: any) => {
                       //console.log(row);
                       return (
                          <div>
                             <IndeterminateCheckbox
                                {...row.getToggleRowSelectedProps()}
                             />
                          </div>
                       );
                    },
                 }
               : {},
            ...columns,
         ]);
      }
   );
   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      selectedFlatRows,
   } = table;

   if (selectedFlatRows.length > 1) {
      Swal.fire({
         title: "Error!",
         text: "Solo debes seleccionar un usuario a la vez",
         icon: "info",
         confirmButtonText: "Entendido",
      });
   }

   if (selectedFlatRows && selectedFlatRows.length === 1) {
      console.log(selectedFlatRows);
   }

   const userDelete = (e: any) => {
      const useremail = selectedFlatRows[0].original.email;
      //console.log(useremail);
      axios
         .delete(`/admin/user/${useremail}`)
         .then((res) => {
            console.log(res.data);
            axios
               .get("/admin/getallusers")
               .then((users) => {
                  //console.log(res.data);
                  setUsersData(
                     users.data.map((user: any) => {
                        return {
                           nombre: user.firstName,
                           apellido: user.lastName,
                           cedula: user.identificationCard,
                           email: user.email,
                           role: user.role,
                        };
                     })
                  );
                  Swal.fire({
                     icon: "success",
                     title: `Usuario eliminado`,
                  });
               })
               .catch((error) => {
                  console.log(error.response.data);
               });
         })
         .catch((error) => {
            console.log(error.response.data);
         });
   };

   return (
      <Layout>
         <Container className="users">
            <h2 style={{ textAlign: "center", margin: "2rem auto" }}>
               Usuarios Registrados
            </h2>
            {userLogin.user?.role === "superadmin" ? (
               <Button
                  url={"/usuarios/crear-usuario"}
                  type={undefined}
                  onClick={undefined}
                  className={""}
               >
                  Crear usuario
               </Button>
            ) : null}

            {userLogin.user?.role === "superadmin" &&
            selectedFlatRows &&
            selectedFlatRows.length === 1 ? (
               <Button
                  url={`/usuarios/editar/${selectedFlatRows[0].original.email}`}
                  type={undefined}
                  onClick={undefined}
                  className={""}
               >
                  Editar usuario
               </Button>
            ) : null}
            {userLogin.user?.role === "superadmin" &&
            selectedFlatRows &&
            selectedFlatRows.length === 1 ? (
               <Button
                  url={``}
                  onClick={userDelete}
                  className={"userdelete"}
                  type={undefined}
               >
                  Eliminar usuario
               </Button>
            ) : null}
            {/* Añadimos las propiedades a nuestra tabla nativa */}
            <table {...getTableProps()}>
               <thead>
                  {
                     // Recorremos las columnas que previamente definimos
                     headerGroups.map((headerGroup: any) => (
                        // Añadimos las propiedades al conjunto de columnas
                        <tr {...headerGroup.getHeaderGroupProps()}>
                           {
                              // Recorremos cada columna del conjunto para acceder a su información
                              headerGroup.headers.map((column: any) => (
                                 // Añadimos las propiedades a cada celda de la cabecera
                                 <th {...column.getHeaderProps()}>
                                    {
                                       // Pintamos el título de nuestra columna (propiedad "Header")
                                       column.render("Header")
                                    }
                                 </th>
                              ))
                           }
                        </tr>
                     ))
                  }
               </thead>
               {/* Añadimos las propiedades al cuerpo de la tabla */}
               <tbody {...getTableBodyProps()}>
                  {
                     // Recorremos las filas
                     rows.map((row: any) => {
                        // Llamamos a la función que prepara la fila previo renderizado
                        prepareRow(row);
                        return (
                           // Añadimos las propiedades a la fila
                           <tr {...row.getRowProps()}>
                              {
                                 // Recorremos cada celda de la fila
                                 row.cells.map((cell: any) => {
                                    // Añadimos las propiedades a cada celda de la fila
                                    return (
                                       <td {...cell.getCellProps()}>
                                          {
                                             // Pintamos el contenido de la celda
                                             cell.render("Cell")
                                          }
                                       </td>
                                    );
                                 })
                              }
                           </tr>
                        );
                     })
                  }
               </tbody>
            </table>
         </Container>
      </Layout>
   );
}

export default Users;
