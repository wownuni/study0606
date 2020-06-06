import React, { useState } from 'react'
import styled from 'styled-components'

const YellowBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #efefef;
  background-color: yellow;
`

/* width, height도 바꾸기 */
function Box() {
  const [color, setColor] = useState('#f00')
  const [width, setWidth] = useState('200px')
  const [height, setHeight] = useState('200px')
  const handleState = (e) => {
    setColor(e.target.value)
    setWidth(e.target.value)
    // setHeight(e.target.value)
  }
  // const handleWidth = (e) => {
  //   setWidth(e.target.value)
  // }
  const handleHeight = (e) => {
    setHeight(e.target.value)
  }
  // console.log('yy') // 개발자 모드 켜져 있으면 자동으로 2번 실행 됨.

  return (
    <div>
      <YellowBox full color="blue" />
      <input placeholder="색상값을 입력해주세요" onChange={handleState} />
      <input
        placeholder="width 값(px, %)을 입력해주세요"
        onChange={handleState}
      />
      <input placeholder="height 값을 입력해주세요" onChange={handleHeight} />
      <div
        style={{
          width: width,
          height: height,
          border: '1px solid #f00',
          background: color,
        }}
      >
        Box1
      </div>
    </div>
  )
}

export default Box

/*
// 선생님 전체 소스
import React, { useState } from 'react'

function Box() {
  const [color, setColor] = useState('yellow')

  

  const handleColor = (e) => {
    setColor(e.target.value)
  }

  return (
    <div>
      <input placeholder="색상 값을 입력해주세요" onChange={handleColor} />
      <div
        style={{
          width: 100,
          height: 100,
          border: '1px solid',
          backgroundColor: color,
        }}
      ></div>
    </div>
  )
}

export default Box


*/
