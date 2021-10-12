import axios from "axios";
import React, { useEffect, useState } from "react";
import './style.css'

export const Weather = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Pune")

    useEffect(() => {

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=690c7958f444871eb29819bf031b5b86`).then((ele => {
            setCity(ele.data)
        }))
    }, [search])

    return (
        <>
            <br></br>
            <br></br>
            <div>
                <div className="container" style={{ textAlign: "center", color: "white", border: "2px solid #e5e4e2", borderRadius: "17px", width: "320px", height: "500px", backgroundImage: `url("https://images.unsplash.com/photo-1603411951734-23ae414fe112?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBuYXR1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")` }}>
                    <div>
                        <br></br>
                        <input style={{ padding: "15px", borderRadius: "20px" }} type="search" onChange={(event) => { setSearch(event.target.value) }} placeholder="Search City Here..."></input>
                    </div>
                    {
                        !city ? (<p>City Not Found</p>): 
                        <>
                                <br></br>
                                <br></br>
                                <h1 ><i className="fas fa-street-view"></i> {search}</h1>
                                <br></br>
                                <h1><i className="fas fa-temperature-high"></i> {city.main.temp}° Cel</h1>
                                <br></br>
                                <h6>Min :{city.main.temp_min}° Cel | Max :{city.main.temp_max}° Cel</h6>
                                <br></br>
                            </>
                    }
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div style={{ fontFamily: "Times New Roman', Times, serif", fontWeight: "600" }}>© 2021 COPYRIGHT</div>
                </div>
            </div>
        </>
    )
}