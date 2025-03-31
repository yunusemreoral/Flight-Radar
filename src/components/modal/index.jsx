
import { useDispatch, useSelector } from 'react-redux'
import { close } from "../../redux/slices/detailSlice"
import { useEffect } from 'react';
import { getDetail } from '../../redux/actions';
import Head from './head';
import Gallery from './gallery';
import Time from './time';
import Aircraft from './aircraft';
import Airport from "../modal/airport";
import Error from "../../components/error";
import Loader from "../../components/loader";

const Modal = () => {
    const dispatch = useDispatch();
    const {flightId,isLoading,error,info} = useSelector((store) => store.detail);
    

    useEffect(() => {
dispatch(getDetail(flightId));
    }, [flightId]);

  return (
    flightId && (
  
  <div className="detail-modal">
    <div className='modal-inner'>
    <Head info={info} />

    {isLoading ? 
    ( <Loader/>

     ) : error ? (
       <Error message={error} />
       ) : (
    info && (
    <div className='info-wrapper'>
      <div className='info-box'>
        <div>
        <Gallery data={info.aircraft.images} />
        <Airport data={info.airport} />
        <Time data={info.time} />
        </div>
        <Aircraft data={info.aircraft} />
      </div>
      </div>
    )
  )}
  </div>
  </div>
  )
  );
};

export default Modal
