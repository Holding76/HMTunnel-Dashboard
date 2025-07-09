function toggleForm() {
  const form = document.getElementById("formContainer");
  form.style.display = form.style.display === "none" ? "block" : "none";
}

function creareDispozitiv() {
  const user = document.getElementById("userInput").value;
  const uuid = document.getElementById("uuidInput").value;
  const mac = document.getElementById("macInput").value;

  const now = new Date();
  const timestamp = now.toLocaleString("ro-RO");

  const card = document.createElement("div");
  card.className = "device-card";

  card.innerHTML = `
    <div class="status online">Online - ${timestamp}</div>
    <p><strong>User:</strong> ${user}</p>
    <p><strong>Dispozitiv:</strong> Android (auto)</p>
    <p><strong>MAC:</strong> ${mac}</p>
    <p><strong>Data înregistrare:</strong> ${timestamp}</p>
    <div class="card-buttons">
      <button class="danger">Deconectează</button>
      <button class="edit">Editează</button>
      <button class="neutral" onclick="this.closest('.device-card').remove()">Șterge</button>
    </div>
    <div class="map-embed">
      <iframe src="https://maps.google.com/maps?q=locatie%20actuala&t=&z=13&ie=UTF8&iwloc=&output=embed" allowfullscreen></iframe>
    </div>
  `;

  document.getElementById("deviceGrid").prepend(card);

  document.getElementById("userInput").value = "";
  document.getElementById("passInput").value = "";
  document.getElementById("uuidInput").value = "";
  document.getElementById("macInput").value = "";

  toggleForm();
}
