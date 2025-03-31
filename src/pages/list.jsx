import { useDispatch, useSelector } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css";
import c from "../utils/nullCheck"
import open from "../redux/slices/detailSlice"
import ReactPaginate from "react-paginate";
import { useState } from "react";

const List = () => {
  const dispatch = useDispatch();
  const {isLoading,error,flights} =  useSelector((store) => store.flight);
  

// kaçıncı elemandan itibaren gösterilecek
const [start,setStart] = useState(0);

// sayfa başona eleman sayısı
const perPage = 10;

// kaçıncı elemanıa kadar gösterilecek
const end = start + perPage;

// slice methodu ile ekrana basılacak aralıktaki elemanları al
const currentFlights = flights.slice(start, end); 

// yeni sayfa seçilince start değerini güncelle
const handlePage = (e) => {
setStart(e.selected * 10);
};

  return (
    <div className="list-container">
      <table class="table table-hover table-responsive">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Kod</th>
      <th scope="col">Enlem</th>
      <th scope="col">Boylam</th>
      <th scope="col">Derece</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {currentFlights.map((flight) => (
    <tr>
      <th scope="row">{c(flight.id)} </th>
      <td>{c(flight.code)}</td>
      <td>{c(flight.lat)}</td>
      <td>{c(flight.lng)}</td>
      <td>{c(flight.deg)}</td>
      <td>
      <button onClick={() => dispatch(open(flight.id))}>Detay</button>
      </td>
    </tr>
  ))}
   
  </tbody>
</table>

<div className="pagination-wrapper">
<ReactPaginate
        breakLabel="..."
        nextLabel="ileri >"
        onPageChange={handlePage}
        className="pagination"
        pageRangeDisplayed={3}
        pageCount={Math.ceil(flights.length / perPage)}
        previousLabel="< geri"
        renderOnZeroPageCount={null}
      />
</div>
    </div>
  )
}

export default List
