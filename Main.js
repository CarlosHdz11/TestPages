let plantilla="";

//  function getCity() {

//         let getCity = document.getElementById("getCity").value;
//         console.log(getCity)
createCard()
    
//     }
 
    
    async function createCard() {
        fetchOne = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=san salvador&lang=sp&appid=40553e6dba61311d589a3aa4da37c88d`)
        let data = await fetchOne.json();

        

    
            // .then(response => response.json())
            // .then((data) => {
                
                let totalData=data;
                console.log(totalData);
                let humidity = totalData.main.humidity;
                let pressure = totalData.main.pressure;
                let name = totalData.name;
                let feelsLikeUndecimal = totalData.main.feels_like-(232);
                let feelsLike= feelsLikeUndecimal.toFixed(2);
                //let feelsLike = totalData.main.feels_like;
                let wind=totalData.wind.speed;
                let temperatureUndecimal = totalData.main.temp-(232);
                let temperature=temperatureUndecimal.toFixed(2);
                // let temperature = totalData.main.temp;
                // console.log(temperature);
                

                
                let country=totalData.sys.country;
                console.log(country);

                let dataWeather=data.weather;
              const mapResult =Object.keys(dataWeather).map(async key=>{
                const value = dataWeather[key]

                let ide=value.icon;
                let description = value.description;
                

                fetchIde = await fetch(` https://openweathermap.org/img/wn/${ide}@2x.png`);
                let useIcon= fetchIde.url;
                let imgIcon=`<img src="${useIcon}" class="img-fluid" style="width: 300px; height: 300px; border-radius: 50%;">`
               
                
                plantilla = `
<div class="row"  >
            <div class="w-100 " style="height:690px; background-color: #1a1b2e;">
                <div class="d-flex justify-content-center mt-5"  style="height:38rem" >
                <div  id="hide">
                    <div class="card d-flex justify-content-center mt-1">
                        <div  style="width: 35rem; height: 150px;" class="d-flex justify-content-center ">
                          ${imgIcon}
                        </div>
                        <div class="card-body mt-5">
                        <div class="d-flex justify-content-center">
                        <div d-block>
                         <div class="d-flex justify-content-center">
                         <h1 class="fw-bold" style="font-size: 30px;">${`${temperature} C°`}</h1>
                         </div>
                         <div class="d-flex justify-content-center">
                         <h4 class="card-title fst-italic"> &nbsp ${description}</h4>
                         </div>
                         <div class="d-flex justify-content-center">
                         <h5 class="card-title fw-lighter"> &nbsp &nbsp ${name}</h5>
                         </div>
                           
                        </div>
                    </div>
                            <div class="d-flex justify-content-around">
                                <div class="d-flex m-1">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                                            fill="currentColor" class="bi bi-browser-safari" viewBox="0 0 16 16">
                                            <path
                                                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm.25-14.75v1.5a.25.25 0 0 1-.5 0v-1.5a.25.25 0 0 1 .5 0Zm0 12v1.5a.25.25 0 1 1-.5 0v-1.5a.25.25 0 1 1 .5 0ZM4.5 1.938a.25.25 0 0 1 .342.091l.75 1.3a.25.25 0 0 1-.434.25l-.75-1.3a.25.25 0 0 1 .092-.341Zm6 10.392a.25.25 0 0 1 .341.092l.75 1.299a.25.25 0 1 1-.432.25l-.75-1.3a.25.25 0 0 1 .091-.34ZM2.28 4.408l1.298.75a.25.25 0 0 1-.25.434l-1.299-.75a.25.25 0 0 1 .25-.434Zm10.392 6 1.299.75a.25.25 0 1 1-.25.434l-1.3-.75a.25.25 0 0 1 .25-.434ZM1 8a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 0 .5h-1.5A.25.25 0 0 1 1 8Zm12 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 1 1 0 .5h-1.5A.25.25 0 0 1 13 8ZM2.03 11.159l1.298-.75a.25.25 0 0 1 .25.432l-1.299.75a.25.25 0 0 1-.25-.432Zm10.392-6 1.299-.75a.25.25 0 1 1 .25.433l-1.3.75a.25.25 0 0 1-.25-.434ZM4.5 14.061a.25.25 0 0 1-.092-.341l.75-1.3a.25.25 0 0 1 .434.25l-.75 1.3a.25.25 0 0 1-.342.091Zm6-10.392a.25.25 0 0 1-.091-.342l.75-1.299a.25.25 0 1 1 .432.25l-.75 1.3a.25.25 0 0 1-.341.09ZM6.494 1.415l.13.483a.25.25 0 1 1-.483.13l-.13-.483a.25.25 0 0 1 .483-.13ZM9.86 13.972l.13.483a.25.25 0 1 1-.483.13l-.13-.483a.25.25 0 0 1 .483-.13ZM3.05 3.05a.25.25 0 0 1 .354 0l.353.354a.25.25 0 0 1-.353.353l-.354-.353a.25.25 0 0 1 0-.354Zm9.193 9.193a.25.25 0 0 1 .353 0l.354.353a.25.25 0 1 1-.354.354l-.353-.354a.25.25 0 0 1 0-.353ZM1.545 6.01l.483.13a.25.25 0 1 1-.13.483l-.483-.13a.25.25 0 1 1 .13-.482Zm12.557 3.365.483.13a.25.25 0 1 1-.13.483l-.483-.13a.25.25 0 1 1 .13-.483Zm-12.863.436a.25.25 0 0 1 .176-.306l.483-.13a.25.25 0 1 1 .13.483l-.483.13a.25.25 0 0 1-.306-.177Zm12.557-3.365a.25.25 0 0 1 .176-.306l.483-.13a.25.25 0 1 1 .13.483l-.483.13a.25.25 0 0 1-.306-.177ZM3.045 12.944a.299.299 0 0 1-.029-.376l3.898-5.592a.25.25 0 0 1 .062-.062l5.602-3.884a.278.278 0 0 1 .392.392L9.086 9.024a.25.25 0 0 1-.062.062l-5.592 3.898a.299.299 0 0 1-.382-.034l-.005-.006Zm3.143 1.817a.25.25 0 0 1-.176-.306l.129-.483a.25.25 0 0 1 .483.13l-.13.483a.25.25 0 0 1-.306.176ZM9.553 2.204a.25.25 0 0 1-.177-.306l.13-.483a.25.25 0 1 1 .483.13l-.13.483a.25.25 0 0 1-.306.176Z" />
                                        </svg>
                                    </div>
                                    <div class="ml-2">
                                        <div class="">Presión</div>
                                        <div>${`${pressure} hPa`}</div>
                                    </div>
                                </div>
                                <div class="d-flex m-1">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                                            fill="currentColor" class="bi bi-moisture" viewBox="0 0 16 16">
                                            <path
                                                d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z" />
                                        </svg>
                                    </div>
                                    <div class="ml-2">
                                        <div class="">Humedad</div>
                                        <div>${`${humidity}%`}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-around mt-3 mb-3">
                                <div class="d-flex m-1">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                                            fill="currentColor" class="bi bi-universal-access" viewBox="0 0 16 16">
                                            <path
                                                d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9V5.5Z" />
                                        </svg>
                                    </div>
                                    <div class="ml-2">
                                        <div class="">Sensación real</div>
                                        <div>${`${feelsLike} C°`}</div>
                                    </div>
                                </div>
                                <div class="d-flex m-1">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                                            fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                                            <path
                                                d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
                                        </svg>
                                    </div>
                                    <div class="ml-2">
                                        <div class="">Viento</div>
                                        <div>${`${wind}m/s`}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><i>
                                        <ion-icon name="cloud-circle-outline"></ion-icon>
                                    </i></span>
                                <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                                    aria-describedby="basic-addon1" id="getCity">
                            </div>
                            <div class="d-flex justify-content-center mt-1 ">
                                <a href="#" class="btn btn-primary" onclick="getCity()">Search City</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

`

let container= document.getElementById('container')
container.innerHTML=plantilla;



            
    
            
           
            })

           
    
    }

async function getCity() {
    plantillaTWO=" ";
    document.getElementById('hide').style.display="none";
    let getCity = document.getElementById("getCity").value;
    console.log(getCity);

    fetchSecond = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getCity}&lang=sp&appid=40553e6dba61311d589a3aa4da37c88d`)
    let dataTwo = await fetchSecond.json();

    console.log(dataTwo);

    let totalData=dataTwo;
    console.log(totalData);
    let humidity = totalData.main.humidity;
    let name = totalData.name;
    let pressure = totalData.main.pressure;
    let feelsLikeUndecimal = totalData.main.feels_like;
    let feelsLike= feelsLikeUndecimal.toFixed(2)-232;
    let wind=totalData.wind.speed;
    let temperatureUndecimal = totalData.main.temp-232;
    let temperature=temperatureUndecimal.toFixed(2);
    
    

    
    let country=totalData.sys.country;
    console.log(country);

    let dataWeather=dataTwo.weather;
  const mapResult =Object.keys(dataWeather).map(async key=>{
    const value = dataWeather[key]

    let ide=value.icon;
    let description = value.description;
    

    fetchIde = await fetch(` https://openweathermap.org/img/wn/${ide}@2x.png`);
    let useIcon= fetchIde.url;
    let imgIcon=`<img src="${useIcon}" class="img-fluid" style="width: 300px; height: 300px; border-radius: 50%;">`
   
    
 let   plantillaTWO = `
<div class="row"  >
<div class="w-100 " style="height:690px; background-color: #1a1b2e;">
    <div class="d-flex justify-content-center mt-5"  style="height:38rem" >
    <div  id="hide">
        <div class="card d-flex justify-content-center">
            <div  style="width: 35rem; height: 150px;" class="d-flex justify-content-center ">
              ${imgIcon}
            </div>
            <div class="card-body mt-5">
                <div class="d-flex justify-content-center">
                    <div d-block>
                     <div class="d-flex justify-content-center">
                     <h1 class="fw-bold" style="font-size: 30px;">${`${temperature} C°`}</h1>
                     </div>
                     <div class="d-flex justify-content-center">
                     <h4 class="card-title fst-italic"> &nbsp ${description}</h4>
                     </div>
                     <div class="d-flex justify-content-center">
                     <h5 class="card-title fw-lighter"> &nbsp &nbsp ${name}</h5>
                     </div>
                       
                    </div>
                </div>
                <div class="d-flex justify-content-around">
                    <div class="d-flex m-1">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                                fill="currentColor" class="bi bi-browser-safari" viewBox="0 0 16 16">
                                <path
                                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm.25-14.75v1.5a.25.25 0 0 1-.5 0v-1.5a.25.25 0 0 1 .5 0Zm0 12v1.5a.25.25 0 1 1-.5 0v-1.5a.25.25 0 1 1 .5 0ZM4.5 1.938a.25.25 0 0 1 .342.091l.75 1.3a.25.25 0 0 1-.434.25l-.75-1.3a.25.25 0 0 1 .092-.341Zm6 10.392a.25.25 0 0 1 .341.092l.75 1.299a.25.25 0 1 1-.432.25l-.75-1.3a.25.25 0 0 1 .091-.34ZM2.28 4.408l1.298.75a.25.25 0 0 1-.25.434l-1.299-.75a.25.25 0 0 1 .25-.434Zm10.392 6 1.299.75a.25.25 0 1 1-.25.434l-1.3-.75a.25.25 0 0 1 .25-.434ZM1 8a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 0 .5h-1.5A.25.25 0 0 1 1 8Zm12 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 1 1 0 .5h-1.5A.25.25 0 0 1 13 8ZM2.03 11.159l1.298-.75a.25.25 0 0 1 .25.432l-1.299.75a.25.25 0 0 1-.25-.432Zm10.392-6 1.299-.75a.25.25 0 1 1 .25.433l-1.3.75a.25.25 0 0 1-.25-.434ZM4.5 14.061a.25.25 0 0 1-.092-.341l.75-1.3a.25.25 0 0 1 .434.25l-.75 1.3a.25.25 0 0 1-.342.091Zm6-10.392a.25.25 0 0 1-.091-.342l.75-1.299a.25.25 0 1 1 .432.25l-.75 1.3a.25.25 0 0 1-.341.09ZM6.494 1.415l.13.483a.25.25 0 1 1-.483.13l-.13-.483a.25.25 0 0 1 .483-.13ZM9.86 13.972l.13.483a.25.25 0 1 1-.483.13l-.13-.483a.25.25 0 0 1 .483-.13ZM3.05 3.05a.25.25 0 0 1 .354 0l.353.354a.25.25 0 0 1-.353.353l-.354-.353a.25.25 0 0 1 0-.354Zm9.193 9.193a.25.25 0 0 1 .353 0l.354.353a.25.25 0 1 1-.354.354l-.353-.354a.25.25 0 0 1 0-.353ZM1.545 6.01l.483.13a.25.25 0 1 1-.13.483l-.483-.13a.25.25 0 1 1 .13-.482Zm12.557 3.365.483.13a.25.25 0 1 1-.13.483l-.483-.13a.25.25 0 1 1 .13-.483Zm-12.863.436a.25.25 0 0 1 .176-.306l.483-.13a.25.25 0 1 1 .13.483l-.483.13a.25.25 0 0 1-.306-.177Zm12.557-3.365a.25.25 0 0 1 .176-.306l.483-.13a.25.25 0 1 1 .13.483l-.483.13a.25.25 0 0 1-.306-.177ZM3.045 12.944a.299.299 0 0 1-.029-.376l3.898-5.592a.25.25 0 0 1 .062-.062l5.602-3.884a.278.278 0 0 1 .392.392L9.086 9.024a.25.25 0 0 1-.062.062l-5.592 3.898a.299.299 0 0 1-.382-.034l-.005-.006Zm3.143 1.817a.25.25 0 0 1-.176-.306l.129-.483a.25.25 0 0 1 .483.13l-.13.483a.25.25 0 0 1-.306.176ZM9.553 2.204a.25.25 0 0 1-.177-.306l.13-.483a.25.25 0 1 1 .483.13l-.13.483a.25.25 0 0 1-.306.176Z" />
                            </svg>
                        </div>
                        <div class="ml-2">
                            <div class="">Presión</div>
                            <div>${`${pressure} hPa`}</div>
                        </div>
                    </div>
                    <div class="d-flex m-1">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                                fill="currentColor" class="bi bi-moisture" viewBox="0 0 16 16">
                                <path
                                    d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z" />
                            </svg>
                        </div>
                        <div class="ml-2">
                            <div class="">Humedad</div>
                            <div>${`${humidity}%`}</div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-around mt-3 mb-3">
                    <div class="d-flex m-1">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                                fill="currentColor" class="bi bi-universal-access" viewBox="0 0 16 16">
                                <path
                                    d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9V5.5Z" />
                            </svg>
                        </div>
                        <div class="ml-2">
                            <div class="">Sensación real</div>
                            <div>${`${feelsLike} C°`}</div>
                        </div>
                    </div>
                    <div class="d-flex m-1">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                                fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                                <path
                                    d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </div>
                        <div class="ml-2">
                            <div class="">Viento</div>
                            <div>${`${wind}m/s`}</div>
                        </div>
                    </div>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i>
                            <ion-icon name="cloud-circle-outline"></ion-icon>
                        </i></span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                        aria-describedby="basic-addon1" id="getCity">
                </div>
                <div class="d-flex justify-content-center mt-1 ">
                    <a href="#" class="btn btn-primary" onclick="getCity()">Search City</a>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
</div>

`

let container= document.getElementById('container')
container.innerHTML=plantillaTWO;







})


    
    







//     createCard(getCity)

 }

// function createCard(City) {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=40553e6dba61311d589a3aa4da37c88d`)
//         .then(response => response.json())
//         .then((data) => {
//             dataWeather=data.weather;
//             // console.log(dataWeather);
//           const mapResult =Object.keys(dataWeather).map(key=>{
//             const value = dataWeather[key]
//             console.log(value.icon)
               
//             })
            


       
//         })

// }


