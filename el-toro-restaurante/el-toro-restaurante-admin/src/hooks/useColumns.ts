import { useMemo } from "react";

export default function useColumns() {
   const columns = useMemo(
      () => [
         {
            Header: "Nombre",
            accessor: "nombre",
         },
         {
            Header: "Apellido",
            accessor: "apellido",
         },
         {
            Header: "Cedula",
            accessor: "cedula",
         },
         {
            Header: "Email",
            accessor: "email",
         },
         {
            Header: "Role",
            accessor: "role",
         },
      ],
      []
   );

   return columns;
}
