$(document).ready(function () {
  console.log("jquery funcionando correctamente");

  url = "http://localhost:8000/app/controllers/cliente.php";
  getAll();

  function getAll() {
    $.ajax({
      url: url,
      method: "GET",
      success: function (response) {
        clientes = JSON.parse(response);
        console.log(response);
        template = "";
        clientes.forEach((cliente) => {
          template += `
                  <tr>
                  <th scope="row">${cliente.id}</th>
                  <td>${cliente.nombre}</td>
                  <td>${cliente.apellido}</td>
                  <td>${cliente.email}</td>
                  <td>
                  <button class="btn btn-success edit" data-id="${cliente.id}" data-nombre="${cliente.nombre}" data-apellido="${cliente.apellido}" data-email="${cliente.email}">Edit</button>
                  <button class="btn btn-danger delete" data-id="${cliente.id}">Delete</button>
                  </td>
                  </tr>
                  `;
        });
        $("#clientes__table").html(template);
      },
    });
  }

  $("#cliente__form").submit(function (e) {
    e.preventDefault();
    let id = $("#id").val();
    let nombre = $("#nombre").val();
    let apellido = $("#apellido").val();
    let email = $("#email").val();

    const client = {
      id,
      nombre,
      apellido,
      email,
    };

    let method = id ? "PUT" : "POST";

    console.log(method);
    console.log(client);

    $.ajax({
      url: url,
      method: method,
      data: JSON.stringify(client),
      contentType: "application/json",
      success: function (response) {
        alert(response);
        getAll();
        $("#cliente__form").trigger("reset");
        $("#id").val("");
      },
    });
  });

  $(document).on("click", ".delete", function () {
    let id = $(this).data("id");
    if (confirm("seguro que quieres eliminar el registro?")) {
      $.ajax({
        url: url,
        method: "DELETE",
        data: JSON.stringify({ id }),
        contentType: "application/json",
        success: function (response) {
          alert(response);
          getAll();
          $("#cliente__form").trigger("reset");
          $("#id").val("");
        },
      });
    }
  });

  $(document).on("click", ".edit", function () {
    let id = $(this).data("id");
    let nombre = $(this).data("nombre");
    let apellido = $(this).data("apellido");
    let email = $(this).data("email");

    $("#id").val(id);
    $("#nombre").val(nombre);
    $("#apellido").val(apellido);
    $("#email").val(email);
  });
});


$("#registro__form").submit(function (e) {
    e.preventDefault();
    let username = $("#username").val();
    let password = $("#password").val();

    const user = {
      username,
      password,
    };



    $.ajax({
      url: 'http://localhost:8000/app/controllers/login.php',
      method: 'POST',
      data: JSON.stringify(user),
      contentType: "application/json",
      success: function (response) {
        alert(response);

        $("#registro__form").trigger("reset");
        $("#username").val("");
      },
    });
  });