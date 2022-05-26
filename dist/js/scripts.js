const mainEl = document.querySelector(".main");
const underWorkEl = document.querySelector(".under-work");
const serviceBtn = document.querySelector("#services");
const InventoryBtn = document.querySelector("#inventory-short");
const otherRouteBtns = document.querySelectorAll(".under-maintenance");
const togglerBtn = document.querySelector(".toggler");
const navsEl = document.querySelectorAll(".navs");
const addModalData = document.querySelector(".input-data");
const addBtn = document.querySelector(".add-btn");
const tableBodyEl = document.querySelector(".table-content");
const updateModalData = document.querySelector(".update-data");
const updateBtn = document.querySelector(".update-btn");
let updateContent = {};
let data = [
  {
    id: "1",
    service: "AI Patch",
    createdDate: new Date(),
    modifiedDate: new Date(),
    createdBy: "Evan Flores",
    modifiedBy: "Evan Flores",
  },
  {
    id: "2",
    service: "Holter",
    createdDate: new Date(),
    modifiedDate: new Date(),
    createdBy: "Arlene Wilson",
    modifiedBy: "John Doe",
  },
  {
    id: "3",
    service: "12 Lead ECG",
    createdDate: new Date(),
    modifiedDate: new Date(),
    createdBy: "Evan Flores",
    modifiedBy: "Evan Flores",
  },
  {
    id: "4",
    service: "BeatX",
    createdDate: new Date(),
    modifiedDate: new Date(),
    createdBy: "Arlene",
    modifiedBy: "John Doe",
  },
  {
    id: "5",
    service: "BeatY",
    createdDate: new Date(),
    modifiedDate: new Date(),
    createdBy: "John Doe",
    modifiedBy: "Evan Flores",
  },
];

const renderTable = () => {
  var child = tableBodyEl.lastElementChild;
  while (child) {
    tableBodyEl.removeChild(child);
    child = tableBodyEl.lastElementChild;
  }
  data.forEach(
    ({ id, service, createdBy, createdDate, modifiedDate, modifiedBy }) => {
      let row = document.createElement("tr");
      let data1 = document.createElement("td");
      data1.innerHTML = service;
      data1.setAttribute("id", id);
      data1.setAttribute("data-bs-toggle", "modal");
      data1.classList.add("update-btn");
      data1.addEventListener("click", () => {
        let updateData = data.filter((val) => val.id === id);
        updateContent = updateData[0];
        updateModalData.value = updateContent.service;
      });
      data1.setAttribute("data-bs-target", "#updateDeviceModal");
      let data2 = document.createElement("td");
      data2.innerHTML = createdDate.toLocaleString();
      data2.setAttribute("id", id);
      let data3 = document.createElement("td");
      data3.innerHTML = modifiedDate.toLocaleString();
      data3.setAttribute("id", id);
      let data4 = document.createElement("td");
      data4.innerHTML = createdBy;
      data4.setAttribute("id", id);
      let data5 = document.createElement("td");
      data5.innerHTML = modifiedBy;
      data5.setAttribute("id", id);
      let data6 = document.createElement("td");
      data6.setAttribute("data-bs-toggle", "modal");
      data6.classList.add("action");
      data6.setAttribute("data-bs-target", "#updateDeviceModal");
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", "dist/images/pen.svg");
      data6.addEventListener("click", () => {
        let updateData = data.filter((val) => val.id === id);
        updateContent = updateData[0];
        updateModalData.value = updateContent.service;
      });
      data6.appendChild(imgEl);
      row.appendChild(data1);
      row.appendChild(data2);
      row.appendChild(data3);
      row.appendChild(data4);
      row.appendChild(data5);
      row.appendChild(data6);
      tableBodyEl.appendChild(row);
    }
  );
};

renderTable();
addBtn.addEventListener("click", () => {
  let payload = {
    id: data.length + 1,
    service: addModalData.value,
    createdDate: new Date(),
    modifiedDate: new Date(),
    createdBy: "John Doe",
    modifiedBy: "John Doe",
  };
  data.push(payload);
  addModalData.value = "";
  let closeBtn = document.querySelector(".btn-close");
  closeBtn.click();
  renderTable();
});

updateBtn.addEventListener("click", () => {
  updateContent.service = updateModalData.value;
  updateContent.modifiedBy = "John Doe";
  updateContent.modifiedDate = new Date();
  data = data.map((el) => {
    if (el.id === updateContent.id) {
      return updateContent;
    }
    return el;
  });
  updateModalData.value = "";
  updateContent = {};
  let closeBtn = document.querySelectorAll(".btn-close")[1];
  closeBtn.click();
  renderTable();
});

InventoryBtn.addEventListener("click", () => {
  mainEl.classList.remove("hidden");
  underWorkEl.classList.add("hidden");
});
serviceBtn.addEventListener("click", () => {
  mainEl.classList.remove("hidden");
  underWorkEl.classList.add("hidden");
});
togglerBtn.addEventListener("click", () => {
  navsEl.forEach((el) => {
    el.classList.toggle("hidden");
  });
});
otherRouteBtns.forEach((el) => {
  el.addEventListener("click", () => {
    mainEl.classList.add("hidden");
    underWorkEl.classList.remove("hidden");
  });
});
