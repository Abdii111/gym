document.addEventListener("DOMContentLoaded", () => {
  // --- Kod för startsidan: hämta och visa data från JSON ---
  const albumContainer = document.getElementById("albums");

  if (albumContainer) {
    fetch("data.json")
      .then(res => res.json())
      .then(albums => {
        albums.forEach(album => {
          const card = document.createElement("div");
          card.classList.add("album-card");
          card.innerHTML = `
            <img src="${album.bild}" alt="${album.titel}">
            <h3>${album.titel}</h3>
            <p>Utgiven: ${album.år}</p>
            <a href="${album.länk}">Läs mer</a>
          `;
          albumContainer.appendChild(card);
        });
      })
      .catch(err => console.error("Fel vid hämtning av data:", err));
  }

  // --- Kod för validering av "Önska en skiva"-formuläret ---
  const onskaForm = document.querySelector("#onska-form");

  if (onskaForm) {
    onskaForm.addEventListener("submit", (e) => {
      const namnInput = document.getElementById("namn");
      const titelInput = document.getElementById("titel");
      const artistInput = document.getElementById("artist");

      // En flagga för att se om valideringen är godkänd
      let isValid = true; 

      if (namnInput.value.trim().length < 2) {
        alert("Ditt namn måste innehålla minst 2 tecken.");
        isValid = false; 
      }

      if (titelInput.value.trim().length < 2) {
        alert("Titeln på skivan måste innehålla minst 2 tecken.");
        isValid = false;
      }

      if (artistInput.value.trim().length < 2) {
        alert("Artistens namn måste innehålla minst 2 tecken.");
        isValid = false;
      }
      
      // Hindra formuläret från att skickas om isValid är false
      if (!isValid) {
        e.preventDefault(); 
      } else {
          // Detta körs om valideringen är godkänd
          alert("Tack! Din önskan har skickats."); 
      }
    });
  }

  // --- Kod för validering av "Bli medlem"-formuläret ---
  const medlemsForm = document.querySelector("#medlem-form");

  if (medlemsForm) {
    medlemsForm.addEventListener("submit", (e) => {
      const fornamnInput = document.getElementById("fornamn");
      const efternamnInput = document.getElementById("efternamn");
      const emailInput = document.getElementById("email");
      const losenordInput = document.getElementById("losenord");
      
      let isValid = true;

      if (fornamnInput.value.trim().length < 2) {
        alert("Förnamn måste innehålla minst 2 tecken.");
        isValid = false;
      }

      if (efternamnInput.value.trim().length < 2) {
        alert("Efternamn måste innehålla minst 2 tecken.");
        isValid = false;
      }
      
      if (losenordInput.value.trim().length < 6) {
        alert("Lösenordet måste innehålla minst 6 tecken.");
        isValid = false;
      }
      
      if (!emailInput.value.includes("@")) {
          alert("Ange en giltig e-postadress.");
          isValid = false;
      }

      if (!isValid) {
        e.preventDefault(); 
      } else {
        alert("Tack! Din registrering har tagits emot.");
      }
    });
  }
}); // Denna klammerparentes avslutar hela document.addEventListener-blocket