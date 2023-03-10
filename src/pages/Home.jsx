import React, { useState, useEffect, useContext } from "react"
import { useSelector, useDispatch } from "react-redux"

import Categories from "../components/Categories"
import Sort from "../components/Sort"
import PizzaBlock from "../components/PizzaBlock"
import Skeleton from "../components/PizzaBlock/Skeleton"
import Pagination from "../components/Pagination"
import { SearchContext } from "../App"
import { setCategoryId } from "../redux/slices/filterSlice"

export const Home = () => {
  const dispatch = useDispatch()
  const { categoryId, sort } = useSelector((state) => state.filter)
  const sortType = sort.sortProperty

  const { searchValue } = useContext(SearchContext)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const onChangeCategoryId = (id) => {
    dispatch(setCategoryId(id))
  }

  useEffect(() => {
    setIsLoading(true)

    const sortBy = sortType.replace("-", "")
    const order = sortType.includes("-") ? "asc" : "desc"
    const category = categoryId > 0 ? `category=${categoryId}` : ""
    const search = searchValue ? `&search=${searchValue}` : ""

    fetch(
      `https://63bebf9b585bedcb36b5c7c6.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr)
        setIsLoading(false)
      })
    window.scrollTo(0, 0)
  }, [categoryId, sortType, searchValue, currentPage])

  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true
      }

      return false
    })
    .map((item, index) => <PizzaBlock {...item} key={item.id} />)
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ))

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategoryId} />
        <Sort />
      </div>
      <h2 className="content__title">?????? ??????????</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  )
}
