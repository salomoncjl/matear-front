import React, { useRef, useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import productAction from '../../Store/ProductOne/actions';
import './details.css';
import { AiFillEdit } from "react-icons/ai"
import categoriesActions from '../../Store/Categories/actions'

const { get_one_product } = productAction;
const { read_all_categories } = categoriesActions

export default function Details() {
  const { id } = useParams();
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();
  const [cantidad, setCantidad] = useState(0);
  let token = localStorage.getItem('token')
  let user = JSON.parse(localStorage.getItem('user'))
  const productoSimple = useSelector((store) => store?.producto?.producto);
  
 
  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const disminuirCantidad = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }

  };



  useEffect(() => {
    dispatch(get_one_product({ id, token }));
    dispatch(read_all_categories({}))

  }, [reload]);

  const handleClick = (index) => {
    document.getElementById('main-img').src = productoSimple.photo[index];
  };

  function getCategoryName(value) {
    switch (value) {
      case '642eeb2e9872d9f2ccaf55b3':
        return 'mates';
      case '642eeb2e9872d9f2ccaf55b4':
        return 'thermos';
      case '642eeb2e9872d9f2ccaf55b5':
        return 'strawbulbs';
      case '642eeb2e9872d9f2ccaf55b6':
        return 'accessories';
      case '642eeb2e9872d9f2ccaf55b7':
        return 'mate carriers';
      default:
        return '';
    }
  }
  // console.log(productoSimple.product_id.category_id);
  // console.log(getCategoryName(productoSimple.product_id.category_id))
  return (
    <div className="detail">
      <div className="main-img-container">
        <div className="img-zoom-container">
          <img className="main-img" id="main-img" src={productoSimple?.photo?.[0]} alt="Main product" />
          <div className="img-zoom" id="img-zoom" />
        </div>
      </div>

      <div className="gallery-container">
        {productoSimple.photo &&
          productoSimple.photo.map((photo, index) => (
            <div className="gallery-img" key={index} onClick={() => handleClick(index)}>
              <img src={photo} alt={`imagen ${index}`} className="gallery-img" />
            </div>
          ))}
      </div>
      <div className="info-detail">
  <h1>{productoSimple?.product_id?.title}</h1>
  <p>{productoSimple?.product_id?.description}</p>
  <p>Stock: <span style={{color: productoSimple?.product_id?.stock < 3 ? 'red' : 'green'}}>{productoSimple?.product_id?.stock}</span></p>
  <p>Precio: ${productoSimple?.product_id?.price}</p>
  <p>
    Cantidad: {cantidad}
    <button onClick={disminuirCantidad} className="cantidad-btn">-</button>
    <button onClick={incrementarCantidad} className="cantidad-btn">+</button>
    <button className="btn-detail">Agregar al carrito</button>
  </p>
  <p>Categorias: <span>{productoSimple?.product_id && getCategoryName(productoSimple?.product_id?.category_id)}</span></p>
</div>

    </div>
  );
}
