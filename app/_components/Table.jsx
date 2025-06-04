function Table({ table }) {
  if (!table) return null;

  const { tableStyles, tableHeadings, tableRows } = table;

  return (
    <div className={`overflow-x-auto rounded-2xl shadow-subtle`}>
      <table className='w-full border-collapse'>
        <thead className={`${tableStyles.heading}`}>
          <tr>
            {tableHeadings?.map((th) => (
              <th
                key={th}
                className='px-4 py-3 font-semibold text-xl text-left'
              >
                {th}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className='text-slate-800'>
          {tableRows.map((row, i) => (
            <tr
              key={row.id}
              className={`${i % 2 === 0 ? 'bg-violet-50' : 'bg-violet-100'}`}
            >
              {row.cells.map((cell) => (
                <td key={cell.id} className='px-4 py-3 first:font-bold'>
                  {cell.text}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
