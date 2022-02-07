'use strict';

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!(inputType.value && inputDistance.value && inputDuration.value)) {
        return alert("Malumotlarni Kiriting!")
    }

    let { lat, lng } = mapEvent.latlng;
    let activity = {
        id: Math.random(),
        type: inputType.value,
        date: `${new Date().getDate()} ${months[new Date().getMonth()]}`,
        duration: inputDuration.value,
        distance: inputDistance.value,
        lat: lat,
        lng: lng
    }

    activties.push(activity)
    storage.set("activities", activties)

    generateMarker(activity);
    containerWorkouts.insertAdjacentHTML("beforeend", generateHTML(activity));

    form.classList.add("hidden");
    inputDistance.value = ""
    inputDuration.value = ""
})


document.addEventListener("keyup", ({ key }) => {
    if (key === "Escape" && form.classList.length == 1) {
        form.classList.add("hidden");
        inputDistance.value = ""
        inputDuration.value = ""
    }
})