import { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { sortData, SortButton, headers} from '../Helper'
import Watch from "../components/Watch"
import Pagination from "../components/Pagination"

const Watchlist = () => {
  const data = useSelector(state => state.watchCrypto)
  const [sortKey, setSortKey] = useState("priceUsd")
  const [sortOrder, setSortOrder] = useState("desc")

  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [cryptoPerPage] = useState(3)

  //Get current data
  const indexOfLastCrypto = currentPage * cryptoPerPage
  const indexOfFirstCrypto = indexOfLastCrypto - cryptoPerPage
  const currentCrypto = data && data.slice(indexOfFirstCrypto, indexOfLastCrypto)

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const sortedData = useCallback(
    () => sortData({ tableData: currentCrypto || [], sortKey, reverse: sortOrder === "desc" }),
    [currentCrypto, sortKey, sortOrder]
  )

  function changeSort(key) {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");

    setSortKey(key);
  }

  console.log('watch',currentCrypto)


  return (
    <>
      <h1>Watchlist</h1>
      <table>
          <thead>
              <tr>
                  {headers.map((row) => {
                      return (
                          <td key={row.key}>
                              {row.label}{" "}
                              <SortButton columnKey={row.key} onClick={() => changeSort(row.key)} {...{sortOrder, sortKey}} />
                          </td>
                      );
                  })}
              </tr>
          </thead>

          <tbody>
              <Watch sortedData={sortedData} loading={loading} />
          </tbody>
      </table>
      <Pagination cryptoPerPage={cryptoPerPage} totalCryptos={data.length} paginate={paginate} />
    </>
  )
}

export default Watchlist