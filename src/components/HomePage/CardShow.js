import React, { useEffect, useState, useCallback } from 'react';
import style from 'bootstrap/dist/css/bootstrap.css';
import { Card, Button } from 'react-bootstrap';
import resim from "../../images/homepagetopimage.jpg";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "../../styles/HomePage.css";
import closeicon from "../../images/close-icon.svg"


export default function CardShow(props) {

  const modalHref = "#a" + props.id
  const modalHref2 = "a" + props.id;
  const modalHref3 = "#b" + props.id
  const modalHref4 = "b" + props.id;
  const [veri, setVeri] = useState("");
  const [bookName, setBookName] = useState(props.name)
  const [authorName, setAuthorName] = useState(props.author)
  const [price, setPrice] = useState(props.price)
  const [createdAt, setCreatedAt] = useState(props.createdAt)
  const [imageUrl, setImageUrl] = useState(props.imageUrl)
  // const handleClick = useCallback(async () => {

  //  await axios.delete(` https://62125283f43692c9c6e7c136.mockapi.io/api/v1/books/${props.id}`)
  //   .then(() =>console.log("Silindi")); }, []);




  const deleteBookInfo = async (deger) => {
    await axios.delete(` https://62125283f43692c9c6e7c136.mockapi.io/api/v1/books/${deger}`)

  }

  const editBook = async (id) => {

    const allBook = {
      name: `${bookName}`,
      author: `${authorName}`,
      price: `${price}`,
      image: `${imageUrl}`,
      createdAt: `${createdAt}`
    };
    axios.put(`https://62125283f43692c9c6e7c136.mockapi.io/api/v1/books/${id}`, allBook)
  }

  return (

    <div class="cards col-md-4 text-dark"    >
      <span class="fa-stack fa-4x">
        <i class="fas fa-circle fa-stack-2x text-primary"></i>
        <i class="fas fa-book fa-stack-1x fa-inverse"></i>
      </span>
      <h4 class="my-3">{props.name}</h4>


      <button data-bs-toggle="modal" href={modalHref} type="button" class="btn btn-primary" style={{ marginRight: 4 }}>
        <i class="fas fa-file text-light"></i>
      </button>

      <button data-bs-toggle="modal" href={modalHref3} type="button" class="btn btn-success" style={{ marginRight: 4 }}>
        <i class="fas fa-pencil text-light"></i>
      </button>

      <button onClick={() => deleteBookInfo(props.id)} type="button" class="btn btn-danger">
        <i class="fas fa-xmark text-light"></i>
      </button>

      <div class="portfolio-modal modal fade" id={modalHref2} tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-bs-dismiss="modal"><img src={closeicon} alt="Close modal" /></div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <img class="img-fluid d-block mx-auto" src="https://icons.iconarchive.com/icons/hopstarter/soft-scraps/128/Document-Copy-icon.png" alt="..." />

                    <p> <strong>Name: </strong> {props.name}</p>
                    <p><strong>Author: </strong> {props.author} </p>
                    <p><strong>Price: </strong> {props.price}</p>
                    <p><strong>Image: </strong> {props.imageUrl}</p>
                    <p><strong>Created At: </strong> {props.createdAt}</p>



                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="portfolio-modal modal fade" id={modalHref4} tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-bs-dismiss="modal"><img src={closeicon} alt="Close modal" /></div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <img class="img-fluid d-block mx-auto" src="https://icons.iconarchive.com/icons/chrisl21/minecraft/128/Book-icon.png" alt="..." />

                    <h2 class="textHomePageHeader text-uppercase">Düzenle</h2>



                    <form>
                      <div class="form-group">
                        <input onChange={(e) => setBookName(e.target.value)} defaultValue={props.name} type="text" class="textHomePage form-control" placeholder="Name" />
                        <input onChange={(e) => setAuthorName(e.target.value)} defaultValue={props.author} type="text" class="textHomePage form-control" placeholder="Author" />
                        <input onChange={(e) => setPrice(e.target.value)} defaultValue={props.price} type="text" class="textHomePage form-control" placeholder="Price" />
                        <input onChange={(e) => setImageUrl(e.target.value)} defaultValue={props.imageUrl} type="text" class="textHomePage form-control" placeholder="Image" />
                        <input onChange={(e) => setCreatedAt(e.target.value)} defaultValue={props.createdAt} type="text" class="textHomePage form-control" placeholder="Created At" />


                      </div>

                    </form>
                    <button data-bs-dismiss="modal" onClick={() => { editBook(props.id) }} class="btn btn-primary btn-xl text-uppercase" type="button" >
                      <i class="fas fa-check me-1"></i>
                      Düzenle
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}
