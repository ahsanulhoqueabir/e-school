const courses = [
  {
    img: "https://i.ibb.co/MMr59M4/Rectangle-25.png",
    title: "Modern Psychology",
    fee: 1300,
    time: " 20 April,2024",
    seats: 60,
  },
  {
    img: "https://i.ibb.co/5rFd0M4/Rectangle-26.png",
    title: "Modern Psychology",
    fee: 1300,
    time: " 20 April,2024",
    seats: 60,
  },
  {
    img: "https://i.ibb.co/pXjD0m3/Rectangle-27.png",
    title: "Modern Psychology",
    fee: 1300,
    time: " 20 April,2024",
    seats: 60,
  },
  {
    img: "https://i.ibb.co/kGqH02q/Rectangle-33.png",
    title: "Modern Psychology",
    fee: 1300,
    time: " 20 April,2024",
    seats: 60,
  },
  {
    img: "https://i.ibb.co/Xtb1pt6/Rectangle-30.png",
    title: "Modern Psychology",
    fee: 1300,
    time: " 20 April,2024",
    seats: 60,
  },
  {
    img: "https://i.ibb.co/6Z2TVTW/Rectangle-34.png",
    title: "Modern Psychology",
    fee: 1300,
    time: " 20 April,2024",
    seats: 60,
  },
];

// adding data in course section
const AllCourses = document.querySelector("#AllCourses");

const createCourse = (course) => {
  const student = document.createElement("div");
  student.classList.add("card", "w-full", "shadow-xl", "bg-blue-100");
  student.innerHTML = `
      <figure class="px-10 pt-10">
        <img
          src=${course.img}
          alt=${course.title}
          class="rounded-xl img"
        />
      </figure>
      <div class="card-body space-y-2">
        <h2 class="card-title">${course.title}</h2>
        <p> <span class="fee">${course.fee}</span> TK</p>
        <button
        id="BTN"
          class="BTN px-4 py-2 w-fit bg-[#21B573] rounded-3xl text-white"
        >
          Buy Course
        </button>
        <div class="flex justify-between pt-4">
          <div><i class="fa-regular fa-calendar-days"></i> Start ${course.time}</div>
          <div>
            <i class="fa-solid fa-users"></i>
            <span>${course.seats}</span> seats
          </div>
        </div>
      </div>
      `;
  return student;
};

courses.forEach((course) => {
  AllCourses.appendChild(createCourse(course));
});

// handling cart section-------------------------
let TotalFee = 0;
let totalItems = 0;
let Enrolled;
const allCard = document.querySelectorAll(".BTN");
for (let card of allCard) {
  card.addEventListener("click", (e) => {
    const Title = title(e);
    const Img = img(e);
    const Fee = fee(e);
    TotalFee = TotalFee + parseInt(Fee);
    totalItems++;
    const Seats = seats(e);
    handleSeat(e);
    display(Title, Img, Fee, Seats);
    displayCheckout(TotalFee, totalItems);
    Enrolled = document.querySelectorAll(".deleteBTN");
    for (let enroll of Enrolled) {
      enroll.addEventListener("click", (e) => {
        const fee =
          e.target.parentElement.parentElement.parentElement.children[0]
            .children[2].children[0].innerText;
        TotalFee = parseInt(TotalFee) - parseInt(fee);
        totalItems--;
        displayCheckout(TotalFee, totalItems);
        enroll.parentElement.parentElement.parentElement.remove();
      });
    }
  });
}

// useful function

const title = (e) => {
  return e.target.parentElement.parentElement.children[1].children[0].innerText;
};
const img = (e) => {
  return e.target.parentElement.parentElement.children[0].children[0].src;
};
const fee = (e) => {
  return e.target.parentElement.parentElement.children[1].children[1]
    .children[0].innerText;
};
const seats = (e) => {
  return e.target.parentElement.parentElement.children[1].children[3]
    .children[1].children[1].innerText;
};
const handleSeat = (e) => {
  const Seats = seats(e);
  let available = Seats - 1;
  e.target.parentElement.parentElement.children[1].children[3].children[1].children[1].innerText =
    available;
};

const display = (title, img, fee, seats) => {
  const Cart = document.querySelector("#Cart");
  const div = document.createElement("div");
  div.classList.add("flex", "items-center", "gap-3", "w-full", "Enrolled");
  div.innerHTML = `
    <img class="h-20 rounded object-cover"
        src=${img}
        alt=""/>
    <div class="navbar items-center">
      <div class="flex flex-col w-full items-start">
        <h1 class="tex-xl  text-[#413960] font-semibold">
          ${title}
        </h1>
        <p class="text-[#585859] hidden"> <span>${seats}</span> seats</p>
        <p class="text-[#585859]"> <span>${fee}</span> TK</p>
      </div>
      <div class="navbar-end">
        <button class="deleteBTN text-4xl">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
    
    `;
  Cart.appendChild(div);
};

const displayCheckout = (TotalFee, totalItems) => {
  const checkout = document.querySelector("#checkout");
  checkout.innerHTML = `
    <hr class="border-[1px] border-black" />
    <div class="flex justify-between px-10 py-5">
      <div>
        <h2 class="text-2xl font-bold">Sub-Total</h2>
        <p class="text-gray-500 font-bold">
          <span id="totalItems">${totalItems} </span> Items
        </p>
      </div>
      <div>
        <h2><span id="TotalFee">${TotalFee}</span> TK</h2>
      </div>
    </div>
    <div class="flex justify-end">
      <button 
    
      id="checkoutBTN" class="px-4 py-2 w-fit bg-[#21B573] rounded-3xl text-white">
        Checkout
      </button>
    </div>
    `;
};

// checkoutBTN.addEventListener("click", () => {
//   Enrolled.forEach((enrolled) => {
//     enrolled.style.display = "none";
//   });
//   const checkout = document.querySelector("#checkout");
//   checkout.innerHTML = `
//     <div class="flex justify-center items-center">
//       <h1 class="text-3xl font-bold text-[#413960]">Thank You</h1>
//     </div>
//     `;
// });
