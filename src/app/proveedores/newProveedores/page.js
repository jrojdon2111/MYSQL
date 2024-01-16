import Form2 from "@/components/Form2"
import { newproveedores } from "@/lib/actions"

function page() {
  return (
    <div>
      <h3>Nuevo proveedor</h3>
      <Form2 action={newproveedores} title='Crear proveedor' proveedores={null} disabled={false} />
    </div>
  )
}

export default page