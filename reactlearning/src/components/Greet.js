import React from 'react';

// const Hello = ({naame, work}) => {
//     return (
//         <div>
//             <h1>My name is {naame} and I work as {work}.</h1>
//             </div>
//     )
// }
const Hello = props => {
    const {naame,work} = props
    return (
        <div>
            <h1>My name is {naame} and I work as {work}.</h1>
            </div>
    )
}
export default Hello;