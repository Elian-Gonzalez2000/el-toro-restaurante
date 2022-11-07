import { useMemo } from "react";

export default function useRows(data: any) {
   const rows = useMemo(
      () =>
         data.map((el: object, index: number) => {
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
