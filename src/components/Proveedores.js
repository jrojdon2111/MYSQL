

function Proveedores({ children, proveedores }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <p><strong>{proveedores.nombre}</strong></p>
            <p>{proveedores.telefono}</p>
            {children}
        </div>
    )
}

export default Proveedores