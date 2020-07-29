let btn = document.getElementById("btn");

        btn.addEventListener("click",()=>{
        let text = document.getElementById("getText").value;

            fetch('https://api.covid19api.com/summary')
            .then((covidData)=>{
                return covidData.json();
            })
            .then((getData)=>{
                console.log(getData);
                var content = document.querySelector(".data");

                var box = content.lastElementChild;
                while (box) {
                    content.removeChild(box);
                    box = content.lastElementChild;
                }

                var index = 0;
                for(var i=0;i<185;i++){
                    if(getData.Countries[i].Country.toLowerCase() == text.toLowerCase()){
                        index = i;
                        break;
                    }
                }
                let data = document.querySelector(".data");
                data.innerHTML = `<font color="yellow" size="10px" align="center"><p><b>Stay Home Stay Safe!!</b></p></font>
                                <div class="boxed"><div class="box">
                                <div class="head">
                                    <span><b>Covid-19 Cases in ${getData.Countries[index].Country}</b></span>
                                </div>
                                <div class="total">
                                    <div><p>Total Confirmed</p> ${getData.Countries[index].TotalConfirmed}</div>
                                    <div><p>Total Deaths</p> ${getData.Countries[index].TotalDeaths}</div>
                                    <div><p>Total Recovered</p> ${getData.Countries[index].TotalRecovered}</div>
                                </div>
                                <div class="new">
                                    <div><p>New Confirmed</p> ${getData.Countries[index].NewConfirmed}</div>
                                    <div><p>New Deaths</p> ${getData.Countries[index].NewDeaths}</div>
                                    <div><p>New Recovered</p> ${getData.Countries[index].NewRecovered}</div>
                                    </div></div>
                                <div class="details">
                                      <div><p>Active Cases</p> ${getData.Countries[index].TotalConfirmed-getData.Countries[index].TotalRecovered - getData.Countries[index].TotalDeaths}</div>
                                      <div><p>Recovery Rate </p>${((getData.Countries[index].TotalRecovered / getData.Countries[index].TotalConfirmed) * 100).toPrecision([4]) } %</div>
                                      <div><p>Death Rate </p>${((getData.Countries[index].TotalDeaths / getData.Countries[index].TotalConfirmed) * 100).toPrecision([4]) } %</div>
                                </div></div>`;
            })
        })

        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
          })
