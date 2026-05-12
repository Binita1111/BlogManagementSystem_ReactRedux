import React from 'react'

const Title = () => {
  console.log("I am from title")
  return (
    <div>learning callback</div>
  )
}

export default React.memo (Title)