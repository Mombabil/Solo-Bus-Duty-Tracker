async function loadDatas() {
  try {
    const response = await fetch("./telephone_entreprise.json");

    if (!response.ok) {
      throw new Error("Impossible de charger le fichier JSON");
    }

    const datas = await response.json();

    const montbrisonList = document.querySelector(".montbrison-list");
    const suryList = document.querySelector(".sury-list");

    datas.personnel.forEach((data) => {
      const div = document.createElement("div");
      div.classList.add("list-item");

      const name = document.createElement("p");
      name.textContent = data.nom;
      div.appendChild(name);

      const number = document.createElement("a");
      number.href = `tel:${data.telephone}`;
      number.textContent = data.telephone;
      div.appendChild(number);

      if (data.site === "Montbrison") {
        montbrisonList.appendChild(div);
      } else if (data.site === "Sury") {
        suryList.appendChild(div);
      }
    });

    const importantList = document.querySelector(".important-list");

    datas.contacts.forEach((data) => {
      const div = document.createElement("div");
      div.classList.add("list-item");

      const name = document.createElement("p");
      name.textContent = data.libelle;
      div.appendChild(name);
      const number = document.createElement("a");
      number.href = `tel:${data.telephone}`;
      number.textContent = data.telephone;
      div.appendChild(number);

      importantList.appendChild(div);
    });

    const emailsList = document.querySelector(".emails-list");
    datas.emails.forEach((data) => {
      const div = document.createElement("div");
      div.classList.add("list-item");

      const name = document.createElement("p");
      name.textContent = data.libelle;
      div.appendChild(name);

      const number = document.createElement("a");
      number.href = `mailto:${data.adresse}`;
      number.target = "_blank";
      number.textContent = data.adresse;
      div.appendChild(number);

      emailsList.appendChild(div);
    });
  } catch (error) {
    console.error("Erreur : ", error);
  }
}

loadDatas();
