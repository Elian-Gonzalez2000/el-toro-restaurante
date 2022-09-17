import { useMemo } from "react";

export default function useRows(data) {
   const rows = useMemo(
      () =>
         data.map((el, index) => {
            return {
               nombre: el.nombre,
               apellido: el.apellido,
               cedula: el.cedula,
               email: el.email,
               role: el.role,
            };
         }),
      []
   );

   return rows;
}
