function Form2({ action, title, proveedores, disabled }) {

    return (
        <form action={action} >
            <input type='hidden' name='id' value={proveedores?.id} />
            <fieldset disabled={disabled}>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' id='nombre' name='nombre'
                    placeholder='Nombre'
                    defaultValue={proveedores?.nombre} autoFocus ></input>
                <label htmlFor='telefono'>Telefono</label>
                <input type='text' id='telefono' name='telefono'
                    placeholder='Telefono'
                    defaultValue={proveedores?.telefono} />
            </fieldset>
            <button type='submit'>{title}</button>
        </form>
    )
}

export default Form2