const CookiesTypeTable = ({ table }) => {
  return (
    <div className="mb-3.5">
      <p className="text-sm mb-0.5 text-black2">{table?.subtitle}</p>
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-black2 border border-black2">
              <thead className="bg-transparent">
                <tr className="divide-x divide-black2">
                  {table?.headers?.map((header) => (
                    <th
                      key={header}
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-black2"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-black2 bg-transparent">
                {table?.data?.map((item, index) => (
                  <tr key={index} className="divide-x divide-black2">
                    {item?.map((itemData, itemIndex) => (
                      <td
                        key={itemData}
                        className={`${
                          itemIndex === item?.length - 1 || itemIndex === 0
                            ? "whitespace-normal"
                            : "whitespace-nowrap"
                        }  p-4 text-sm text-black2 ${
                          itemIndex === 0 ? "w-[180px]" : "w-auto"
                        }`}
                      >
                        {itemData}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesTypeTable;
