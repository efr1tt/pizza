import React from "react"

function Categories({ value, onChangeCategory }) {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ]

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            onClick={() => onChangeCategory(index)}
            className={value === index ? "active" : ""}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
