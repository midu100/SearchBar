// DOM
let mainDiv = document.querySelector('.mainDiv')
let InputUser = document.querySelector('.InputUser')
let resultUser = document.querySelector('.resultUser')
let handleUser = document.querySelector('.handleUser')
let not = document.querySelector('.not')
let errorUser = document.querySelector('.errorUser')
let alldata

// API
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
        alldata = data
        allUsers(alldata)
    })

let allUsers = (users) => {
    mainDiv.innerHTML = ''
    users.map((item) => {
        // create tagsAdd commentMore actions
        let user = document.createElement('div')
        let userImg = document.createElement('div')
        let Name = document.createElement('h1')
        let UserName = document.createElement('h2')
        let Email = document.createElement('p')
        let Phone = document.createElement('p')
        let city = document.createElement('p')

        // appendChild / kothay bosbe tag gulo
        mainDiv.appendChild(user)
        user.appendChild(userImg)
        user.appendChild(Name)
        user.appendChild(UserName)
        user.appendChild(Email)
        user.appendChild(Phone)
        user.appendChild(city)


        // add ClassName 
        user.classList.add('user')
        userImg.classList.add('userImg')

        // add content
        Name.innerHTML = `Name : ${item.name}`
        UserName.innerHTML = `User-Name : ${item.username}`
        Email.innerHTML = `Email : ${item.email}`
        Phone.innerHTML = `Phone : ${item.phone}`
        city.innerHTML = `City : ${item.address.city}`
    })
}



//handleUsers 
handleUser.addEventListener('click', () => {
    if (!InputUser.value) {
        errorUser.innerHTML = 'Please Enter Your Name'
    } else {
        errorUser.innerHTML = ''

        let filterUser = alldata.filter((items) => {
            return items.username == InputUser.value
        })
        if (filterUser.length == 0) {
            not.innerHTML = 'User Not Found'
            mainDiv.innerHTML = ''
        } else {
            allUsers(filterUser)
        }
    }
})