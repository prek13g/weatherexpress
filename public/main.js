const cityname = document.getElementById('cityname');
const submitbtn = document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const data_hide = document.querySelector('.middle_layer');

const getinfo= async(event)=>{
    event.preventDefault();
let cityval = cityname.value;
     if(cityval===""){
        city_name.innerText = `Please write the name before you search`;
        data_hide.classList.add('data_hide');
     }else{
       try{ let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=60f9d25828e1f596d42f706427e0a138`;
        const response = await fetch(url);
        const data = await response.json();
        const arr = [data];
        city_name.innerText = `${arr[0].name}, ${arr[0].sys.country}`;
        temp_real_val.innerText = arr[0].main.temp;
        
        const tempmood = arr[0].weather[0].main;

        if(tempmood == 'Sunny'){
            temp_status.innerHTML='<i class="fas fa-sun" style="color:#f1c40f ;"></i>'
        }
        else if(tempmood == 'Clouds'){
            temp_status.innerHTML='<i class="fas fa-cloud" style="color:cornsilk;"></i>'
        }
        else if(tempmood == 'Rainy'){
            temp_status.innerHTML='<i class="fas fa-rain" style="color:cornsilk ;"></i>'
        }
        else{
           temp_status.innerHTML='<i class="fas fa-sun" style="color:#f1c40f ;"></i>'
        }
        data_hide.classList.remove('data_hide');
    }
        catch{city_name.innerText = `Please write the name before you search`;
        data_hide.classList.add('data_hide');
    }
       
    }
}

submitbtn.addEventListener('click',getinfo);

