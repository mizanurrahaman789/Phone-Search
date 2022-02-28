const allphone = () => {
      const searchValue = document.getElementById('search-box').value;
      const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
      fetch(url)
            .then(res => res.json())
            .then(data => showPhoneDetails(data.data))
      // console.log(url)
}

const showPhoneDetails = (phones) => {
      for (const phone of phones) {
            const parent = document.getElementById('phone-container')
            const div = document.createElement('div')
            div.innerHTML = `<div class="card p-5">
      <div class="pro-img">
            <img class="w-25" src="${phone.image}" alt="">

      </div>
      <h5>Phone Name:${phone.phone_name} </h5>
      <h5>Release Date: </h5>
      <h5>Main Features: </h5>
      <div class="allbutton">
            <button class="btn btn-success">Details</button>
      </div>
</div>
      
      `;
            parent.appendChild(div)
            console.log(phone)
      }

}