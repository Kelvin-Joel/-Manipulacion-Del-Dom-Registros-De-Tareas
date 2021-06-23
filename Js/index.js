const conte_registers = document.getElementById("conte_registers");
const btn_register = document.getElementById("btn_register");
const txt_text = document.getElementById("txt_text");
const form = document.querySelector("form");
const txt_verification = document.getElementById("txt_verification");

//agregando registro
const AddTask = () => {
  if (txt_text.value === "") {
    alert("llene los datos para registrar :S");
  } else {
    conte_registers.innerHTML += `
    <div class="container border mb-3 d-flex justify-content-around align-items-center">
    <p class="w-50">${txt_text.value}</p>
    <span class="btn btn-warning text-white">Edit</span>
    <span class="btn btn-danger">Delete</span>
    </div>
    `;
  }
};

let ParentElement;

//llenando los datos al input text
const FillData = (e) => {
  let valor = e.target.classList.contains("btn-warning");

  if (valor) {
    ParentElement = e.target.parentElement;
    const texto = e.target.parentElement.children[0].textContent;
    txt_text.value = texto;
    txt_verification.value = texto;
  }
};


///editando los datos
const edit = () => {
  ParentElement.children[0].textContent = txt_text.value;
  form.reset();
};


//eliminando registros
const delet = (e) => {
  let value = e.target.classList.contains("btn-danger");

  if (value) {
    let dato = e.target.parentElement;
    conte_registers.removeChild(dato);
    form.reset();
  }
};

//aplicamos el evento al contenedor que contendra los registros
conte_registers.addEventListener("click", (e) => {
  delet(e);
  FillData(e);
});

btn_register.addEventListener("click", () => {
  if (txt_verification.value !== "") {
    edit();
  } else {
    AddTask();
  }

  form.reset();
});
