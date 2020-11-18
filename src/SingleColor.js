  
import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, weight, index, hexCol }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hexval = `#${hexCol}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 2000)
    return ()=>clearTimeout(timeout)
  },[alert])
  return <article className={`color ${index > 15 && 'color-light'}`}
    style={{
      backgroundColor: `rgb(${bcg})`
    }}
    onClick={()=> {
      setAlert(true)
      navigator.clipboard.writeText(hexval)
    }}
  >
    <p className="content">{weight}%</p>
    <p className="content">{hexval}</p>
    {alert && <p className="alert">copy to clipboard</p>}
    </article>
}

export default SingleColor