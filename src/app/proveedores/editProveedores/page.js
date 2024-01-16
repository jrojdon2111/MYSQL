import Form2 from "@/components/Form2"
import { db } from "@/lib/mysql"
import { editproveedores } from "@/lib/actions"

async function page({ searchParams }) {
  const [proveedores] = await db.query('select * from proveedores where id = ?', [searchParams.id]);

  return (
    <div>
      <h3>Editar proveedor {searchParams.id}</h3>
      <Form2 action={editproveedores} title='Editar proveedore' proveedores={proveedores} disabled={false} />
    </div>
  )
}


export default page