import Link from 'next/link'
import Proveedores from '@/components/Proveedores'
import { getproveedores } from '@/lib/actions'

export default async function Home() {
    const proveedores = await getproveedores()
    // console.log(articulos);

    return (
        <div>
            <Link className='enlace' href="/proveedores/newProveedores"> Nuevo proveedor </Link>
            {
                proveedores.map((proveedores) => (
                    <Proveedores key={proveedores.id} proveedores={proveedores} >
                        <Link
                            className='enlace'
                            href={{ pathname: '/proveedores/editProveedores', query: { id: proveedores.id } }}>
                            Editar proveedor
                        </Link>
                        <Link
                            className='enlace'
                            href={{ pathname: '/proveedores/deleteProveedores', query: { id: proveedores.id } }}>
                            Eliminar proveedor
                        </Link>
                    </Proveedores>
                ))
            }
        </div>
    )
}
