import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from "./component.module.scss";
import Link from 'next/link'

const Nav = () => {
  const [menuData, setData] = useState([])

  // Get menu links and set to menuData as an array
  useEffect(() => {
    axios.get('https://api.mocki.io/v1/86d95ec1')
    // axios.get('mockData.json')
    .then(res => {
      setData(res.data)
    }).catch(error => console.log(error))
  }, [])

  return (
    <nav aria-label="Main navigation">
      <ul className={styles.nav}>
        {menuData.map((item,index) => {
          return (
            <li key={index}>
              <Link href={item.url}>
                <a>
                  {item.label}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default Nav