import React from 'react'

// 1. functional component의 경우
const PartTimeJob = (props) => (
    <div>
        <h1>이름은 {props.name} 나이는 {props.age}</h1>
        <h2>여기는{props.children}</h2>
    </div>
)
// class PartTimeJob extends React.Component{
//     render(){
//         const {name,age} = this.props
//         return(
//             <div>
//                 <h1>이름은 {name} 이고 연령은 {age} 이므니다</h1>
//             </div>
//         )
//     }
// }

export {PartTimeJob};