import React, { useEffect, useState } from 'react';
import CardShow from '../components/HomePage/CardShow';
import style from 'bootstrap/dist/css/bootstrap.css';
import "../styles/HomePage.css"
import axios from 'axios';
import closeicon from "../images/close-icon.svg"
function HomePage() {
  const [data, setData] = useState([])
  const [bookName, setBookName] = useState("")
  const [authorName, setAuthorName] = useState("")
  const [price, setPrice] = useState("")
  const [createdAt, setCreatedAt] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await axios.get('https://62125283f43692c9c6e7c136.mockapi.io/api/v1/books');
        setData(response.data);

      } catch (error) {
      }

    }
    fetchData();
  });

  const addBook = async (bookName, authorName, price, imageUrl, createdAt) => {

    axios.post('https://62125283f43692c9c6e7c136.mockapi.io/api/v1/books', {
      name: `${bookName}`,
      author: `${authorName}`,
      price: `${price}`,
      image: `${imageUrl}`,
      createdAt: `${createdAt}`
    });
  }




  return (
    <div className="page-top ">
      <a class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" href="#portfolioModal1"><i class="fas fa-book text-light"></i>&nbsp;Yeni Kitap</a>


      <section class="page-section" id="services">
        <div class="container">
          <div class="text-center">
            <h2 class="headerText section-heading text-uppercase">Rea Books</h2>
          </div>
          <div class="row text-center">

            {
              data.map(
                item => <CardShow
                  id={item.id}
                  name={item.name}
                  author={item.author}
                  price={item.price}
                  imageUrl={item.image}
                  createdAt={item.createdAt}
                />
              )
            }


            <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="close-modal" data-bs-dismiss="modal"><img src={closeicon} alt="Close modal" /></div>
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-lg-8">
                        <div class="modal-body">
                          <img class="img-fluid d-block mx-auto" src="https://icons.iconarchive.com/icons/chrisl21/minecraft/128/Book-icon.png" alt="..." />

                          <h2 class="textHomePageHeader text-uppercase">Kitap Ekle</h2>



                          <form>
                            <div class="form-group">
                              <input onChange={(e) => setBookName(e.target.value)} type="text" class="textHomePage form-control" placeholder="Name" />
                              <input onChange={(e) => setAuthorName(e.target.value)} type="text" class="textHomePage form-control" placeholder="Author" />
                              <input onChange={(e) => setPrice(e.target.value)} type="text" class="textHomePage form-control" placeholder="Price" />
                              <input onChange={(e) => setImageUrl(e.target.value)} type="text" class="textHomePage form-control" placeholder="Image" />
                              <input onChange={(e) => setCreatedAt(e.target.value)} type="text" class="textHomePage form-control" placeholder="Created At" />


                            </div>

                          </form>
                          <button data-bs-dismiss="modal" class="btn btn-primary btn-xl text-uppercase" type="button" onClick={() => addBook(bookName, authorName, price, imageUrl, createdAt)}>
                            <i class="fas fa-check me-1"></i>
                            Ekle
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





    </div>
  )
}

export default HomePage