import React, { useState, useEffect } from "react";
import Header from './components/Header'
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import Skeleton from "./components/PizzaBlock/Skeleton";

import './scss/app.scss'


function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://63bebf9b585bedcb36b5c7c6.mockapi.io/items')
      .then(res => res.json())
      .then(arr => {
        setItems(arr)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) : items.map((item, index) => (
                <PizzaBlock {...item} key={item.id} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
