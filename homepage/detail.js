fetch("eidcard.json")
.then(res => res.json())
.then(res => {

    var url = location.href
    var url_obj= new URL(url)

    var id= url_obj.searchParams.get("id")
    var img= url_obj.searchParams.get("img")
    var description= url_obj.searchParams.get("description")
    var title= url_obj.searchParams.get("title")
    var end= url_obj.searchParams.get("end")

    document.getElementById("image").src= img
    document.getElementById("title").innerHTML=title
    document.getElementById("description").innerHTML=description
    document.getElementById("heading").innerHTML=end


})

fetch("greetingcard.json")
.then(res => res.json())
.then(res => {

    var url = location.href
    var url_obj= new URL(url)

    var id= url_obj.searchParams.get("id")
    var img= url_obj.searchParams.get("img")
    var description= url_obj.searchParams.get("description")
    var title= url_obj.searchParams.get("title")
    var end= url_obj.searchParams.get("end")

    document.getElementById("image").src= img
    document.getElementById("title").innerHTML=title
    document.getElementById("description").innerHTML=description
    document.getElementById("heading").innerHTML=end


})





fetch("birthdaycard.json")
.then(res => res.json())
.then(res => {

    var url = location.href
    var url_obj= new URL(url)

    var id= url_obj.searchParams.get("id")
    var img= url_obj.searchParams.get("img")
    var description= url_obj.searchParams.get("description")
    var title= url_obj.searchParams.get("title")
    var end= url_obj.searchParams.get("end")

    document.getElementById("image").src= img
    document.getElementById("title").innerHTML=title
    document.getElementById("description").innerHTML=description
    document.getElementById("heading").innerHTML=end


})