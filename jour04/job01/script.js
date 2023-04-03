document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector("#button");
    btn.addEventListener("click", () => {
      fetch("expression.txt")
        .then((response) => response.text())
        .then((data) => {
          const p = document.createElement("p");
          p.textContent = data;
          document.body.appendChild(p);
        });
    });
  });



//   $("#button").on("click", function () {
//     fetch('expression.txt')
//         .then((response) => response.text())
//         .then((data) => {
//             // let p = $("p")
//             let p = document.querySelector('p');
//             p.textContent = data;
//             console.log(p)
//         })
// })




