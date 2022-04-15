

export default function Pagination({cryptoPerPage, totalCryptos, paginate}) {
  const pageNumbers = []

  for(let i = 1; i <= Math.ceil(totalCryptos / cryptoPerPage); i++) {
      pageNumbers.push(i)
  }

  return (
    <div className="pagination">
      {pageNumbers.map(number => (
          <span key={number} onClick={() => paginate(number)}>
              {number}
          </span>
      ))}
    </div>
  )
}
