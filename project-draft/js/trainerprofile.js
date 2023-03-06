function getId() {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id')
    return id;

}

let trainerData = [{
    id: 1,
    imgSrc: '../img/trainer6.jpg',
    name: 'Justin Lowe',
    specialize: 'I specialize in weight loss and have been a trainer for 6 years!'
},
{
    id: 2,
    imgSrc: '../img/trainer7.jpg',
    name: 'Macy Trahan',
    specialize: "I've been powerlifting for 3 years and specialize in strength training!"
},
{
    id: 3,
    imgSrc: '../img/trainer3.jpg',
    name: 'Samantha Maine',
    specialize: 'Here to help you reach your goals with exercise guidance and nutritional and lifestyle tips!'
},
{
    id: 4,
    imgSrc: '../img/trainer4.jpg',
    name: 'Mason Torres',
    specialize: "Hey! I can help you with any fitness goals, but I specialize in calisthenics and have been doing it for 2 years!"
}
]

getTrainerData();
function getTrainerData() {

    let id = getId();

    if (id == null) {
        id = 1;
    }

    trainerData.map((item) => {
        if (item.id == id) {
            document.getElementById('name').innerText = item.name;
            document.getElementById('trainerImg').src = item.imgSrc;
            document.getElementById('specialties-container').innerText = item.specialize;
        }
    })

}
