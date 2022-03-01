const allphone = () => {
      const searchValue = document.getElementById('search-box').value;
      const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
      fetch(url)
            .then(res => res.json())
            .then(data => showPhoneDetails(data.data))
      // console.log(url)
}

// card section
const showPhoneDetails = (phones) => {
      for (const phone of phones) {
            const parent = document.getElementById('phone-container')
            const div = document.createElement('div')
            div.innerHTML = `<div class=""container>
            <div class="row m-2 text-center">
            <div class="col-md-4 ">
            <div class="card p-5 ">
      <div class="pro-img">
            <img class="w-50" src="${phone.image}" alt="">

      </div>
      <h4>Phone Name: ${phone.phone_name} </h4>
      <h5>Brand: ${phone.brand} </h5>
      
      
      <div class="allbutton">
            <button onclick="details('${phone.slug}')" class="btn btn-success">Details</button>
      </div>
</div>

            </div>


            <div class="col-md-4">
            <div class="card p-5 ">
      <div class="pro-img">
            <img class="w-50" src="${phone.image}" alt="">

      </div>
      <h4>Phone Name: ${phone.phone_name} </h4>
      <h5>Brand: ${phone.brand} </h5>
      
      
      <div class="allbutton">
            <button onclick="details('${phone.slug}')" class="btn btn-success">Details</button>
      </div>
</div>

            </div>


            <div class="col-md-4 ">
            <div class="card p-5 ">
      <div class="pro-img">
            <img class="w-50" src="${phone.image}" alt="">

      </div>
      <h4>Phone Name: ${phone.phone_name} </h4>
      <h5>Brand: ${phone.brand} </h5>
      
      
      <div class="allbutton">
            <button onclick="details('${phone.slug}')" class="btn btn-success">Details</button>
      </div>
</div>

            </div>

            </div>
            
            </div>
      
      `;
            parent.appendChild(div)
            // console.log(phone)
      }

}
//second 

const details = (id) => {
      const url = `https://openapi.programming-hero.com/api/phone/${id}`;
      fetch(url)
            .then(res => res.json())
            .then(data => setdetails(data.data))
      console.log(url)
};

const setdetails = (info) => {
      document.getElementById('details-container').innerHTML = `<div>
      <img class="w-25" src="${info.image}" alt="">
      <h3>Name: ${info.name}</h3>
      <h4>Brand: ${info.brand}</h4>
      <h5>ReleaseDate: ${info.releaseDate}</h5>
      <h5>Storage: ${info.mainFeatures.storage}</h5>
      <h5>Storage: ${info.mainFeatures.displaySize}</h5>

      </div>
      `;
      console.log(info)
}