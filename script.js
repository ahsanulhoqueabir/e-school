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

const coursesDiv = document.querySelector("#courses");

const createStudent = (course) => {
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
        class="px-4 py-2 w-fit bg-[#21B573] rounded-3xl text-white"
      >
        Buy Course
      </button>
      <div class="flex justify-between pt-4">
        <div><i class="fa-regular fa-calendar-days"></i> Start ${course.time}</div>
        <div>
          <i class="fa-solid fa-users"></i>
          ${course.seats} seats
        </div>
      </div>
    </div>
    `;
  return student;
};
// Rendering the first course in array by default
courses
  .slice(0, 3)
  .map((course) => coursesDiv.appendChild(createStudent(course)));
