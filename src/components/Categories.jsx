import React, { useState } from "react"

function Categories() {
  const [activityIndex, setActivityIndex] = useState(0)

  const onClickActivity = (index) => {
    setActivityIndex(index)
  }

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
            onClick={() => onClickActivity(index)}
            className={activityIndex === index ? "active" : ""}
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
