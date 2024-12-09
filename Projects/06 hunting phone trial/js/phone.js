// load phone with api
const loadPhone = async (searchValue) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/phones?search=${searchValue}`,
    );
    const data = await res.json();
    const phone = data.data;
    displayPhone(phone);
  } catch (error) {
    console.error("Found some error");
  }
};

// display the phones
const displayPhone = (phone) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";
  const showAllContainer = document.getElementById("show-all-container");
  if (phone.length > 12) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }
  phone = phone.slice(0, 12);

  phone.forEach((phone) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-base-100 w-72 shadow-xl`;
    phoneCard.innerHTML = `
      <figure>
          <img
              src="${phone.image}"
              alt="Shoes"
          />
      </figure>
      <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>
              ${phone.slug}
          </p>
          <div class="card-actions justify-end">
              <button class="btn btn-success">Buy Now</button>
          </div>
      </div>

      `;

    phoneContainer.appendChild(phoneCard);
  });
};

// search
const search = () => {
  const searchField = document.getElementById("search-field");
  const searchValue = searchField.value;
  loadPhone(searchValue);
};

// loadPhone();
