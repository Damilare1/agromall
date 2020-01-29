import React, {useState, useEffect} from 'react';

const AgroMall = () => {

    return (
        <table style={{ width: "40%" }}>
            <tr>
                <th style={{width: "5%"}}></th>
                <th style={{width: "55%"}}>Name</th>
                <th style={{width: "20%"}}>Age</th>
                <th style={{width: "20%"}}>Sex</th>
            </tr>
            <tbody>
                <tr>
                    <td><img style={{borderRadius: "100%", maxWidth: "4px"}} src="" alt="user-profile"/></td>
                    <td>Damilare Adedoyin</td>
                    <td>24</td>
                    <td>M</td>
                </tr>
            </tbody>
        </table>
    )
}

export default AgroMall;