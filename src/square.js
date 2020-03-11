// import React from 'react'

// export default function Square({ black, children }) {
//   const fill = black ? 'black' : 'white'
//   const stroke = black ? 'white' : 'black'

//   return (
//     <div
//       style={{
//         backgroundColor: fill,
//         color: stroke,
//         width: '100%',
//         height: '100%',
//       }}
//     >
//       {children}
//     </div>
//   )
// }

import React from 'react'
const squareStyle = {
  width: '100%',
  height: '100%',
}
export const Square = ({ black, children }) => {
  const backgroundColor = black ? 'black' : 'white'
  const color = black ? 'white' : 'black'
  return (
    <div
      style={{
        ...squareStyle,
        color,
        backgroundColor,
      }}
    >
      {children}
    </div>
  )
}

export default Square;