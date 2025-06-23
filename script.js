const searchBtn = document.querySelector(".search-btn")
const searchInput = document.querySelector(".search-box input")

const cardWrapper = document.querySelector(".content-main__list")

const cardArray = [
    {
        id: 0,
        title: "Пвх материал 2й сорт",
        price: "170 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "./image/Rectangle 3.png"
    },
    {
        id: 1,
        title: "Пвх материал 2й сорт",
        price: "170 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "./image/Rectangle 3.png"
    },
    {
        id: 2,
        title: "Пвх материал 2й сорт",
        price: "170 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "./image/Rectangle 3.png"
    },
    {
        id: 3,
        title: "Пвх материал 2й сорт",
        price: "170 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "./image/Rectangle 3.png"
    },
    {
        id: 4,
        title: "Пвх материал 2й сорт",
        price: "170 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "./image/Rectangle 3.png"
    },
    {
        id: 5,
        title: "Пвх материал 2й сорт",
        price: "170 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "./image/Rectangle 3.png"
    },
    {
        id: 6,
        title: "Пвх материал 3й сорт",
        price: "270 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "./image/Rectangle 3.png"
    },
    {
        id: 7,
        title: "Пвх материал 4й сорт",
        price: "370 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "./image/Rectangle 3.png"
    },
    {
        id: 8,
        title: "Пвх материал 5й сорт",
        price: "470 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "./image/Rectangle 3.png"
    },
    {
        id: 9,
        title: "Пвх материал 6й сорт",
        price: "570 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "./image/Rectangle 3.png"
    }
]

const render = (cardList) => {

    cardWrapper.innerHTML = ""

    cardList.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `<a href="/product.html" class="content-main__list-item">
                                <div class="content-main__list-item--img">
                                    <img src="${item.image}" alt="${item.title}">
                                </div>
                                <h5 class="content-main__list-item--title">
                                    ${item.title}
                                </h5>
                                <strong>
                                    ${item.price}
                                </strong>
                                <span>
                                    ${item.address}
                                </span>
                                <span>
                                    ${item.date}
                                </span>
                            </a>`)
    });
}

const filteredArray = (array, value) => {
    return array.filter((item) => {
        return item.title.includes(value) || item.price.includes(value)
    })
}

cardWrapper.computedStyleMap.justifyContent = "flex-start"
cardWrapper.computedStyleMap.gap = "30px"

render(cardArray)

searchBtn.addEventListener('click', () => {
    render(filteredArray(cardArray, searchInput.value))
})