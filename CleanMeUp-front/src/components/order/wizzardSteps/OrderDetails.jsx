import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getPriceList } from "../../../api/priceListApi";
import { getServiceList } from "../../../api/serviceListApi";
import OrderCounter from "./OrderCounter";

const OrderDetails = (props) => {
  const history = useHistory();
  const fileInput = useRef();

  const [order, setOrder] = useState({});

  const [priceList, setPriceList] = useState([]);
  const [serviceList, setServiceList] = useState([]);

  const { items: priceListItems } = useSelector(state => state.priceListReducer);
  const { items: serviceListItems } = useSelector(state => state.serviceListReducer);

  const toBase64 = file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
  });

  const goBack = () => {
    history.push("/");
  }
  
  useEffect(()=> {
    getPriceList();
    getServiceList();
  },[]);

  useEffect(() => {
    if(priceListItems) {
      setPriceList(priceListItems);
    }
  }, [priceListItems]);

  useEffect(() => {
    if(serviceListItems) {
      setServiceList(serviceListItems);
    }
  }, [serviceListItems]);

  useEffect(() => {
    if(props.order) {
      setOrder(props.order);
    }
  }, [props.order]);

  return (
    <>
    <div className="container" id="form-button">
      <div className="row">
          <div className="col-11" id="header-btn">
              <button className="log-in" onClick={goBack}>Nazad</button>
          </div>
      </div>
      </div>
      <div className="container" id="form">
        <form action="" id="form-style">
          <div className="row" id="right-form">
            <div className="col-7 mb-5">
              <div className="right-header">
                  <h4>Detalji porudžbine</h4>
                  <h5 className="mt-5 font-weight-bold">Izaberite garderobu koja je potrebna da Vam se očisti</h5>
              </div>    
              <div className="right-form-data">
                  <div className="row justify-content-between">
                    {priceList.map(x => {
                      return (
                        <OrderCounter
                          key={x.id}
                          id={x.id}
                          name={x.clothesType}
                          setOrder={setOrder}
                          order={order}
                          price={x.price}
                        />
                      );
                    })}
                  </div>
                  <div className="mt-5">
                    <h5 className="font-weight-bold">Usluga koju želite</h5>
                    <div className="row mt-5">
                      <div className="col-12 d-flex justify-content-between">
                        {serviceList.map(service => {
                          return (
                          <label key={service.id} className="checkmark-container">{service.name}
                            <input type="checkbox" onChange={(e)=> {
                              if(e.target.checked) {
                                setOrder({...order, services: [...order.services, service]})
                              } else {
                                setOrder({...order, services: [...order.services.filter(x=> x.id !== service.id)]})
                              }
                            }}/>
                            <span className="checkmark"></span>
                          </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h5 className="font-weight-bold">Napomena</h5>
                    <div className="row mt-5">
                      <div className="col-12 d-flex justify-content-between">
                        <textarea className="form-control contact-tabs" placeholder="Ako imate napomenu, unesite je ovde" id="napomena-contact" onChange={(e)=> {
                          setOrder({...order, note: e.target.value})
                        }}></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h5 className="font-weight-bold">Na šta da obratimo pažnju? Dodajte fotografiju fleke/oštećenja</h5>
                    <div className="row mt-5">
                      <div className="col-4 d-flex justify-content-between">
                        <button type="button" className="btn btn-primary no-background white-button" onClick={() => {
                          if(fileInput.current) {
                            fileInput.current.click();
                          }
                        }}>Dodajte fotografiju</button>
                        <input className="d-none" type="file" ref={fileInput} onChange={async(e)=>{
                          if(e.target.files && e.target.files.length) {
                            const file = e.target.files[0];
                            const base64 = await toBase64(file);
                            setOrder({...order, fileInBytes: base64, fileName: file.name})
                          }
                        }}/>
                      </div>
                      <div className="col-4 d-flex justify-content-between">
                        {order && order.fileInBytes && (
                          <img className="img-fluid" src={order.fileInBytes}/>
                        )}
                      </div>
                    </div>
                  </div>

                  <Button disabled={!order || !order.items || !order.items.length || !order.services || !order.services.length}
                  onClick={() => {
                    props.setOrder(order);
                    props.nextStep();
                  }}>
                        Dalje
                  </Button>
                </div>
              </div>
            </div>
        </form>
      </div>
    </>
  );
};

export default OrderDetails;
