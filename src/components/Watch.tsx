import React from 'react'

export default function Watch({sortedData, loading}) {
  if(loading) {
    return <h2>Loading</h2>
  }

  return (
    <>
        {sortedData().map((crypto) => {
            return (
                <tr key={crypto[0]}>
                  <td><strong>{crypto[1].baseSymbol}</strong> {crypto[1].baseId}</td>
                  <td>{crypto[1].exchangeId}</td>
                  <td>{crypto[1].priceUsd}</td>
                  <td>{crypto[1].volumeUsd24Hr}</td>
                  <td>{crypto[1].tradesCount24Hr}</td>
                  <td>{crypto[1].rank}</td>
                </tr>
            )
        })}
    </>
)
}
