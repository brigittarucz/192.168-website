const youtubeData = [{
    description: "Description 1"
}, {
    description: "Description 2"
}, {
    description: "Description 3"
}]

const manipulateTemp = {
    cloneTemp: function () {
        let temp = document.querySelector("#template-modal").content;
        return temp.cloneNode(true);
    },
    setVal: function (clone, val) {
        clone.querySelector(".modal-video_h4").textContent = youtubeData[val - 1].description;
        clone.querySelector(".close").addEventListener("click", closeModal);
        return clone;
    }

}

let links = document.querySelectorAll(".link-regular");

links.forEach(link => {
    link.addEventListener("click", openModal);
})

function openModal() {
    let clone = manipulateTemp.cloneTemp();
    let elemClicked = event.target.classList[1];
    elemClicked = elemClicked.slice(5, elemClicked.length);
    elemClicked = parseInt(elemClicked);
    clone = manipulateTemp.setVal(clone, elemClicked);
    document.querySelector("body").appendChild(clone);
}

function closeModal() {
    document.querySelector("#modal").remove();
}