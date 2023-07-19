import React, { useEffect, useState } from 'react'

import UserCard from './UserCard'



const Index = () => {
    
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = () => {
            //url for fetching the data and store into the json format
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(json => {
                    setData(json)
                    console.log(setData(json))
                })
        }
        fetchData()
    }, [])
    return (
        <div>
            <h1>This is a index component</h1>
            <div className='ant-row flex'>
               
                {
                    data.map(item => {
                        console.log('item: ', item);
                        return (
                            <UserCard item={item}/>
                        //     <div className='ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-8 ant-col-lg-8 ant-col-xl-6'>
                        //     <div className='ant-card ant-card-bordered' style={{ margin: 15 }}>
                        //         <div className='ant-card-cover'>
                        //             <div className='cardHeadImage'>
                        //                 <img src='https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][image.id]=happy' alt='Avatar' style={{ width: 200, height: 200 }} />
                        //             </div>
                        //         </div>
                        //         <div className='ant-card-body'>
                                    
                        //             <h3>{item.name}</h3>
                        //             <div style={{ display: 'flex', flexDirection: 'row' }}>
                        //                 <i aria-label="icon: mail" class="anticon anticon-mail" style={{ fontSize: 18 }}>
                        //                     <svg viewBox="64 64 896 896" class="" data-icon="mail" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        //                         <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z">
                        //                         </path>
                        //                     </svg>
                        //                 </i>
                        //                 <p style={{ marginLeft: 10 }}>{item.email}</p>
                        //             </div>
                        //             <div style={{ display: 'flex', flexDirection: 'row' }}><i aria-label="icon: phone" class="anticon anticon-phone" style={{ fontSize: 18 }}>
                        //                 <svg viewBox="64 64 896 896" class="" data-icon="phone" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        //                     <path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z">
                        //                     </path>
                        //                 </svg>
                        //             </i>
                        //                 <p style={{ marginLeft: 10 }}>{item.phone}</p></div>
                        //                 <div style={{ display: 'flex', flexDirection: 'row' }}>
                        //             <i aria-label="icon: global" class="anticon anticon-global" style={{ fontSize: 18 }}>
                        //                 <svg viewBox="64 64 896 896" class="" data-icon="global" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        //                     <path d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0 0 10-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 0 0 3.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 0 0-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 0 1 887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 0 1-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 0 1 115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 0 1 540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 0 0 540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 0 1-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 0 0-81.5 55.9A373.86 373.86 0 0 1 137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 0 1-107.6 69.2z">
                        //                     </path>
                        //                 </svg>
                        //             </i>
                        //                 <p style={{ marginLeft: '10px' }}>http:{item.website}
                        //                 </p>
                        //         </div>
                        //         </div>
                               
                        //     </div>
                        //     <ul class="ant-card-actions">
                        //         <li style={{width: '33.33px'}}>
                        //            <button onClick={handleClick}>
                        //                 {
                        //                   like ? <icon><AiFillHeart size={36} className="text-danger"/></icon>: 
                        //                       <icon>
                        //                             <AiOutlineHeart size={36} />
                        //                       </icon>
                        //                 }
                        //            </button>
                        //         </li>
                        //         <li>
                        //             <span>
                        //                 <button style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}>
                        //                     <i aria-label="icon: edit" class="anticon anticon-edit" style={{ fontSize: 18 }}>
                        //                         <svg viewBox="64 64 896 896" class="" data-icon="edit" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        //                             <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z">
                        //                             </path>
                        //                         </svg>
                        //                     </i>
                        //                 </button>
                        //             </span>
                        //         </li>
                        //         <li>
                        //             <span>
                        //                 <button style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}>
                        //                     <i aria-label="icon: delete" class="anticon anticon-delete" style={{ fontSize: 18 }}>
                        //                         <svg viewBox="64 64 896 896" class="" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        //                             <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z">
                        //                             </path>
                        //                         </svg>
                        //                     </i>
                        //                 </button>
                        //             </span>
                        //         </li>
                        //     </ul>
                        // </div>
                        )
                    })
                }   
            </div>
            {/* <table border={1}>
              <th>Id</th>
              <th>title</th>
              <th>body</th>
             
                {
                    data.map(item => {
                        return (
                            <tr>
                               
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                              
                            </tr>
                        )
                    })
                }
            </table> */}
        </div>
    )
}

export default Index
