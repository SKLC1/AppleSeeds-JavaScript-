

const checkbox = document.querySelector('.check')

const handleCheck =()=> {
  if (checkbox.checked) {
    let img = document.createElement('img')
    img.setAttribute('id','image')
    img.src = "http://www.google.com/intl/en_com/images/logo_plain.png"
    let cont = document.getElementById("cont");
    cont.appendChild(img);
  } else {
    let image1 = document.getElementById("image")
    image1.remove()
  }
}

checkbox.addEventListener('change',handleCheck)

