
const allphone = () => {
      document.getElementById('phone-container').innerHTML = '';
      document.getElementById('details-container').innerHTML = '';

      const searchValue = document.getElementById('search-box').value;
      const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
      fetch(url)
            .then(res => res.json())
            .then(data => showPhoneDetails(data.data))
      // console.log(url)
}
const phoneSpinner = phoneDisplay => {
      document.getElementById('spinner').style.display = phoneDisplay;
}

// card section
const showPhoneDetails = (phones) => {
      for (const phone of phones) {
            phoneSpinner('block')

            const parent = document.getElementById('phone-container')
            const div = document.createElement('div')
            div.innerHTML = `<div class=""container>
            <div class="row m-2 text-center">
            <div class="col-md-4 ">
            <div class="card p-5 rounded-5">
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
            <div class="card p-5 rounded-5">
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
            <div class="card p-5 rounded-5">
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
            phoneSpinner('none')

      }

}


//details section

const details = (id) => {
      const url = `https://openapi.programming-hero.com/api/phone/${id}`;
      fetch(url)
            .then(res => res.json())
            .then(data => setdetails(data.data))
      // console.log(url)
};

//details container
const setdetails = (info) => {
      document.getElementById('details-container').innerHTML = `<div>
      <img class="w-25" src="${info.image}" alt="">
      <h3>Name: ${info.name}</h3>
      <h4>Brand: ${info.brand}</h4>
      <h4>ReleaseDate: ${info.releaseDate}</h4>
      <div><h3>mainFeatures</h3>
      <p><span class=" fs-5">DisplaySize:</span> ${info.mainFeatures['displaySize']}</p>
      <p><span class="fs-5">memory:</span> ${info.mainFeatures['memory']}</p>
      <p><span class="fs-5">storage:</span> ${info.mainFeatures['storage']}</p>
      <p><span class="fs-5">chipSet:</span> ${info.mainFeatures['chipSet']}</p>
      </div>
     
      

      </div>
      `;
      // console.log(info)
}


