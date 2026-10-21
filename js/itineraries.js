async function loadDatas() {
  try {
    const response = await fetch("./data.json");

    if (!response.ok) {
      throw new Error("Impossible de charger le fichier JSON");
    }

    const datas = await response.json();

    const scholarListRoad = document.querySelector(".scholarListRoad");
    const occasionalListRoad = document.querySelector(".occasionalListRoad");

    datas.forEach((data) => {
      const div = document.createElement("div");
      div.classList.add("road-item");

      const itemTitle = document.createElement("h3");
      itemTitle.textContent = data.nom;
      div.appendChild(itemTitle);

      const divButtons = document.createElement("div");
      divButtons.className = "divButtons";

      const leftButtons = document.createElement("div");
      leftButtons.className = "leftButtons";
      const rightButtons = document.createElement("div");
      rightButtons.className = "rightButtons";

      data.linkGmap.map((d) => {
        const itemButton = document.createElement("button");
        const linkItemButton = document.createElement("a");
        linkItemButton.href = d.link;
        linkItemButton.target = "_blank";
        linkItemButton.rel = "noopener noreferrer";

        linkItemButton.textContent = d.nom;
        if (linkItemButton.textContent.includes("Matin")) {
          itemButton.className = "morningButton";
        } else if (linkItemButton.textContent.includes("Soir")) {
          itemButton.className = "eveningButton";
        } else {
          itemButton.className = "occasionalButton";
        }

        itemButton.appendChild(linkItemButton);

        if (itemButton.className === "morningButton") {
          leftButtons.appendChild(itemButton);
        } else if (itemButton.className === "eveningButton") {
          rightButtons.appendChild(itemButton);
        } else {
          divButtons.appendChild(itemButton);
        }

        divButtons.appendChild(leftButtons);
        divButtons.appendChild(rightButtons);
      });
      div.appendChild(divButtons);

      const commentaire = document.createElement("span");
      commentaire.textContent = data.commentaire;

      div.appendChild(commentaire);

      if (data.categorie === "Scolaire") {
        scholarListRoad.appendChild(div);
      } else if (data.categorie === "Occasionnel") {
        occasionalListRoad.appendChild(div);
      }
    });
  } catch (error) {
    console.error("Erreur : ", error);
  }
}

loadDatas();
