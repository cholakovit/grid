import { useCallback, useState, useEffect } from "react"
import { sortData, SortButton, headers} from '../Helper'
import Pagination from '../components/Pagination'
import Crypto from "../components/Crypto"

const Cryptos = () => {

    const [data, setData] = useState(false)
    const [sortKey, setSortKey] = useState("priceUsd");
    const [sortOrder, setSortOrder] = useState("desc");

    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [cryptoPerPage] = useState(10)

    //Get current data
    const indexOfLastCrypto = currentPage * cryptoPerPage
    const indexOfFirstCrypto = indexOfLastCrypto - cryptoPerPage
    const currentCrypto = data && data.slice(indexOfFirstCrypto, indexOfLastCrypto)

    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        setLoading(true)

        fetch('https://api.coincap.io/v2/markets')
        .then(response => response.json())
        .then(_data => setData(Object.entries(_data.data)))

        setLoading(false)
    }, [])

    const sortedData = useCallback(
        () => sortData({ tableData: currentCrypto || [], sortKey, reverse: sortOrder === "desc" }),
        [currentCrypto, sortKey, sortOrder]
    )

    function changeSort(key) {
        setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");
    
        setSortKey(key);
    }

    //console.log('cryptos', data)
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td className="w-20"></td>
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
                    <Crypto sortedData={sortedData} loading={loading} />
                </tbody>
            </table>
            <Pagination cryptoPerPage={cryptoPerPage} totalCryptos={data.length} paginate={paginate} />
        </>
    )
}

export default Cryptos