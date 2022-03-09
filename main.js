const userName = document.querySelector('.user-name__item'),
      userOwner = document.querySelector('.user-owner__item'),  
      userEmail = document.querySelector('.user-email__item'),
      editBtn = document.querySelector('.edit'),
      modal = document.querySelector('.modal'),
      nameInput = document.querySelector('.input__name'),
      ownerInput = document.querySelector('.input__owner'),
      emailInput = document.querySelector('.input__email'),
      sendBtn = document.querySelector('.modal__sender'),
      modalCloserBtn = document.querySelector('.modal__closer');


async function getUser(url) {
    const res = await fetch(url)
    return res.json()
}

window.addEventListener('load', () => {
    getUser('http://109.236.74.74:9900/getdata').then(data => {
        setUserData(userName, data.Garage.Name)
        setUserData(userOwner, data.Garage.Owner)
        setUserData(userEmail, data.Garage.Email)
    })
})

function closeElem(elem) {
    return elem.classList.remove('active')
}

function showElem(elem) {
    return elem.classList.add('active')
}

function setUserData(elem, data) {
    console.log(data);
    elem.textContent = data
}

function changeUserData() {
    const name = nameInput.value,
          owner = ownerInput.value,
          email = emailInput.value;

    if (name && owner && email) {
        setUserData(userName, name)
        setUserData(userOwner, owner)
        setUserData(userEmail, email)

        closeElem(modal)
    }
}

editBtn.addEventListener('click', (e) => {
    const target = e.target

    if (target.classList.contains('edit')) {
        showElem(modal)
    } 

    window.addEventListener('keydown', (e) => {
        if (e.key == 'Escape') {
            closeElem(modal)
        }
    })
})

sendBtn.addEventListener('click', (e) => {
    changeUserData()
})

modalCloserBtn.addEventListener('click', () => {
    closeElem(modal)
})
 