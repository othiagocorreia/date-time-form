const btn = document.querySelector("#send")

btn.addEventListener("click", function(e){
	e.preventDefault()

	const name = document.querySelector("#name")
	const nameValue = name.value
	const email = document.querySelector("#email")
	const emailValue = email.value

	const nameAndEmail = JSON.stringify({name:nameValue, email:emailValue, date:dateTime().fullDate, time:dateTime().fullTime}, null, 4)

	document.getElementById("container").innerHTML ='<p class="json">'+ nameAndEmail +'</p>'
})

function dateTime(){
	date = new Date;
	
	const day = String(date.getDate()).padStart(2, '0')
	const month = String(date.getMonth()+1).padStart(2, '0')
	const year = date.getFullYear()
	const fullDate = day + "/" + month + "/" + year

	const hours = String(date.getHours()).padStart(2, '0')
	const minutes = String(date.getMinutes()).padStart(2, '0')
	const seconds = date.getSeconds()
	const fullTime = hours + ":" + minutes + ":" + seconds

	return {fullTime, fullDate}
}