function ListGroup () {
    const items = [
        'Nova Yorque',
        'Barueri',
        'Carapicuiba'
    ]

    return(
        <>
            <h1>Lista</h1>
            {items.length === 0 && <p>no item found</p>}
            <ul className="list-group">
              {items.map(item => <li onClick={() => console.log({item})} className="list-group-item" key={item}>{item}</li>)}
            </ul>
        </>
    )
}

export default ListGroup;