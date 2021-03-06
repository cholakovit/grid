import React from 'react'
import { useDispatch } from 'react-redux'
import { selectCrypto } from '../store/actions'

const Crypto = ({sortedData, loading}) => {
    if(loading) {
        return <h2>Loading</h2>
    }

    const dispatch = useDispatch()

    var watchListData = []
    const setWatchList = (crypto) => {
        //localStorage.clear();
        //console.log(crypto)
        // watchListData.push(crypto)
        // localStorage.setItem('crypto', JSON.stringify(watchListData))
        dispatch(selectCrypto(crypto))

    }

    return (
        <>
            {sortedData().map((crypto) => {
                return (
                    <tr key={crypto[0]}>
                        <td className='w-20'><input type='checkbox' onChange={() => setWatchList(crypto)} /></td>
                        <td><strong>{crypto[1].baseSymbol}</strong> {crypto[1].baseId}</td>
                        <td>{crypto[1].exchangeId}</td>
                        <td className='right-aligned'>{crypto[1].priceUsd}</td>
                        <td className='right-aligned'>{crypto[1].volumeUsd24Hr}</td>
                        <td className='right-aligned'>{crypto[1].tradesCount24Hr}</td>
                        <td className='right-aligned'>{crypto[1].rank}</td>
                    </tr>
                )
            })}
        </>
    )
}

export default Crypto