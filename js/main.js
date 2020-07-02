function fetchData() {
  const tbody = document.querySelector("#tbody");
  let json = "./json/list.json";
  fetch(json)
    .then((res) => res.json())
    .then((data) => {
      return data.map(function (type) {
        const tdTitle = document.createElement("td");
        const tdHref = document.createElement("td");
        const tdActions = document.createElement("td");
        tdTitle.innerText = type.title;
        tdHref.innerText = type.href;
        tdActions.innerHTML = "Remove";
        const tr = document.createElement("tr");

        const hrefLink = document.createElement("a");

        tdHref.appendChild(hrefLink);
        tr.appendChild(tdTitle);
        tr.appendChild(tdHref);
        tr.appendChild(tdActions);
        tbody.appendChild(tr);
      });
    });
}
fetchData();
