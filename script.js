document.addEventListener("DOMContentLoaded", () => {
  const startDateBtn = document.getElementById("startDate");
  const letsGoBtn = document.getElementById("letsGo");
  const clickMeWalkingBtn = document.getElementById("clickMeWalking");
  const clickMeLakeBtn = document.getElementById("clickMeLake");
  const clickMeDeerBtn = document.getElementById("clickMeDeer");
  const clickMeFortBtn = document.getElementById("clickMeFort");
  const clickMeCabBtn = document.getElementById("clickMeCab");
  const clickMeGurudwaraBtn = document.getElementById("clickMeGurudwara");
  const clickMeRestaurantBtn = document.getElementById("clickMeRestaurant");
  const clickMeDropBtn = document.getElementById("clickMeDrop");
  const finalButton = document.getElementById("finalButton");

  const bigPopup = document.getElementById("big-popup");
  const closePopupBtn = document.querySelector(".big-close-btn");

  const scenes = {
    welcome: document.getElementById("welcome"),
    dateStart: document.getElementById("dateStart"),
    walkingScene: document.getElementById("walkingScene"),
    hauzKhazLake: document.getElementById("hauzKhazLake"),
    deerPark: document.getElementById("deerPark"),
    hauzKhazFort: document.getElementById("hauzKhazFort"),
    cabRide: document.getElementById("cabRide"),
    banglaSahib: document.getElementById("banglaSahib"),
    restaurant: document.getElementById("restaurant"),
    dropHome: document.getElementById("dropHome"),
    finalMessageBtn: document.getElementById("finalMessageBtn"),
  };

  // Function to show a scene
  function showScene(scene) {
    Object.values(scenes).forEach((s) => {
      if (s) s.classList.add("hidden");
    });
    if (scene) scene.classList.remove("hidden");
  }

  // Event listeners for scenes
  if (startDateBtn) startDateBtn.addEventListener("click", () => showScene(scenes.dateStart));
  if (letsGoBtn) letsGoBtn.addEventListener("click", () => showScene(scenes.walkingScene));
  if (clickMeWalkingBtn) clickMeWalkingBtn.addEventListener("click", () => showScene(scenes.hauzKhazLake));
  if (clickMeLakeBtn) clickMeLakeBtn.addEventListener("click", () => showScene(scenes.deerPark));
  if (clickMeDeerBtn) clickMeDeerBtn.addEventListener("click", () => showScene(scenes.hauzKhazFort));
  if (clickMeFortBtn) clickMeFortBtn.addEventListener("click", () => showScene(scenes.cabRide));
  if (clickMeCabBtn) clickMeCabBtn.addEventListener("click", () => showScene(scenes.banglaSahib));
  if (clickMeGurudwaraBtn) clickMeGurudwaraBtn.addEventListener("click", () => showScene(scenes.restaurant));
  if (clickMeRestaurantBtn) clickMeRestaurantBtn.addEventListener("click", () => showScene(scenes.dropHome));
  if (clickMeDropBtn) clickMeDropBtn.addEventListener("click", () => showScene(scenes.finalMessageBtn));

  // Show popup
  if (finalButton) {
    finalButton.addEventListener("click", () => {
      console.log("Opening popup");
      bigPopup.classList.remove("hidden");
      bigPopup.classList.add("fade-in");
    });
  }

  // Close popup
  if (closePopupBtn) {
    closePopupBtn.addEventListener("click", () => {
      console.log("Closing popup");
      bigPopup.classList.add("hidden");
      bigPopup.classList.remove("fade-in");
    });
  }

  // Optional: Close popup when clicking outside of the content
  if (bigPopup) {
    bigPopup.addEventListener("click", (e) => {
      if (e.target === bigPopup) {
        console.log("Clicked outside content");
        bigPopup.classList.add("hidden");
        bigPopup.classList.remove("fade-in");
      }
    });
  }
});
