import Form2 from "@/components/Form2"
import { db } from "@/lib/mysql"
import { deleteproveedores } from "@/lib/actions"

async function page({ searchParams }) {
  const [proveedores] = await db.query('select * from proveedores where id = ?', [searchParams.id]);
  return (
    <div>
      <h3>Eliminar proveedor {searchParams.id}</h3>
      <Form2 action={deleteproveedores} title='Eliminar proveedor' proveedores={proveedores} disabled={true} />
    </div>
  )
}

export default page
