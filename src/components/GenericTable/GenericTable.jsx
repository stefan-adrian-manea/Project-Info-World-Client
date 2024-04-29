function GenericTable({ items, headers, RowComponent }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <RowComponent key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GenericTable;
