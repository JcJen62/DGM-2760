document.querySelector("#companyName").innerText = "Hotels";
document.querySelector("#companyMoto").innerText = "Find Your Dream Room";

async function getHotelData() {
    try {
        const response = await fetch('hotels.json')
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)

document.querySelectorAll('.btnHotel').forEach(btn => btn.addEventListener('click', getHotelInfo))

function getHotelInfo(event){
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })

    document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel`
    document.querySelector('#address').textContent = `${hotelChoice.address}`
    document.querySelector('#rooms').textContent = `${hotelChoice.rooms}`
    document.querySelector('#gym').textContent = `${hotelChoice.gym}`
    document.querySelector('#types').textContent = `${hotelChoice.roomTypes.join(', ')}`
    document.querySelector('#picture').setAttribute('src', hotelChoice.picture)
}