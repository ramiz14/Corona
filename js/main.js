let load=document.querySelector('.load')
let ready=document.querySelector('.ready')
window.addEventListener("load",function(){
	console.log('salam');
	load.classList.add('d-none')
	ready.classList.remove('d-none')
})
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
	.then(response =>
		{
			console.log(response);
			let totalcase=document.querySelector('#total_case h4')
			let active_cases=document.querySelector('#active_cases h4')
			let deaths=document.querySelector('#deaths h4')
			let recovered=document.querySelector('#recovered h4')
			active_cases.innerHTML=response.world_total.active_cases
			totalcase.innerHTML=response.world_total.total_cases
			deaths.innerHTML=response.world_total.total_deaths
			recovered.innerHTML=response.world_total.total_recovered
			response.countries_stat.forEach(country => {	
				document.querySelector('.dropdown ul').innerHTML+=`
				<li class='d-none'>${country.country_name}</li>
			`
		  }),
			searchInput. addEventListener("input", e => {
				const value = e. target. value
				
			  let lists=document.querySelectorAll('.dropdown ul li')
				for(let list of lists){
					if (value.length>0) {
						if (list.innerHTML.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
							list.classList.remove('d-none')
						}
						else{
							list.classList.add('d-none')
						}
					}
					else{
						list.classList.add('d-none')
					}
					list.onclick=function(){
						let totalcase=document.querySelector('#total_case h4')
						let active_cases=document.querySelector('#active_cases h4')
						let deaths=document.querySelector('#deaths h4')
						let recovered=document.querySelector('#recovered h4')
						let h1=document.querySelector('#total_case h3')
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
								response.countries_stat.forEach(country=>{
							if (country.country_name===list.innerHTML) {
								totalcase.innerHTML=country.cases
								active_cases.innerHTML=country.active_cases
								deaths.innerHTML=country.deaths
								recovered.innerHTML=country.total_recovered
								h1.innerHTML=country.country_name
								document.querySelectorAll('li').forEach(li=>{
									li.classList.add('d-none')
								})
							}
							
						})
							})
						
					}
				}
			}) 	
		}
		
	)

	
	

    