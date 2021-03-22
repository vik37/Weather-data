
    let dataService = {
        getData : function(){
            fetch('https://api.openweathermap.org/data/2.5/forecast?q=Skopje&units=metric&APPID=bd9ff6e118b619c29cb1cdce2de6c7aa')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                uiService.loadData(res);
                })
            .catch(err => console.log(err));
        }
        
    }
    let uiService = {
        icon : document.querySelector('.icon'),
        time : document.querySelector('.time'),
        windDirection : document.querySelector('.direction'),
        temperature : document.querySelector('.temperature'),
        windSpeed : document.querySelector('.speed'),
        detailsRow : document.querySelector('.detailsRow'),
        loadData: function(data){
            for(const item of data.list){
                console.log(item);
                this.icon.innerHTML += `               
                                    <img src="http://openweathermap.org/img/w/${item.weather[0].icon}.png" alt="logo" />
                                    `;
                this.time.innerHTML += `
                                    <p style="height: 50px;">${new Date(item.dt * 1000).toUTCString()}</p>
                                    `;
                this.temperature.innerHTML += `<p style="height: 50px">${item.main.temp}C</p>`;
                this.windDirection.innerHTML += `<p>${item.wind.deg} deg</p>
                                                <p style="transform: rotate(${item.wind.deg}deg);
                                                font-size:28px;">&#8592;</p>    
                                            `;
                this.windSpeed.innerHTML += `<p style="height: 50px">${item.wind.speed} km/h</p> 
                                            `;
                this.detailsRow.innerHTML += `
                                                <button class="btn btn__Detail" type="button">DETAIL</button>
                                            `;
            }
        }
    }
    dataService.getData();