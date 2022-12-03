const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6decf113bdmsh3af736bdcedc688p11e0c7jsnea14d05e2f5f',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
}
const searchInput = document.querySelector("[data-search]")
fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
	.then(response => response.json())
	.then(response =>{
		let str=''
		let tbdy=document.querySelector('.table tbody')
		response.countries_stat.forEach(country=>{
			for (let i = 0; i < country.deaths.length; i++) {
				if (isNaN(country.deaths[i])) {
					if (i>1) {
						str+=`
				<tr>
				<th scope="row"></th>
				<td>${country.country_name}</td>
				<td>${country.cases}</td>
				<td>${country.deaths}</td>
				<td>${country.total_recovered}</td>
			  </tr>
				`
					}
				}
			}
			
			
		})
		tbdy.innerHTML=str
	})



	let load=document.querySelector('.load')
	let ready=document.querySelector('.ready')
	window.addEventListener("load",function(){
		load.classList.add('d-none')
		ready.classList.remove('d-none')
	})