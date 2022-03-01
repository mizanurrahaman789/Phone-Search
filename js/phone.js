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
            <img class="w-50" src="${phone.image}" alt="">

      </div>
      <h3>Phone Name: ${phone.phone_name} </h3>
      <h5>Brand: ${phone.brand} </h5>
      
      
      <div class="allbutton">
            <button onclick="details('${phone.slug}')" class="btn btn-success">Details</button>
      </div>
</div>
      
      `;
            parent.appendChild(div)
            // console.log(phone)
      }

}

const details = (id) => {
      const url = `https://openapi.programming-hero.com/api/phone/${id}`;
      fetch(url)
            .then(res => res.json())
            .then(data => setdetails(data.data.mainFeatures))
      // console.log(url)
};

const setdetails = (info) => {
      document.getElementById('details-container').innerHTML = `<div>
      // <img src="" alt="">
      <h5>name: ${info.phone_name}</h5>
      <h5>releaseDate: ${info.releaseDate}</h5>
      
      </div>
      `;
      console.log(info)
}