const testimonialContainer = document.querySelector('.testimonail-container');
const testimonail = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const data = [
    {
        name: "Miyah Myles",
        position: "Marketing",
        photo: 'https://randomuser.me/api/portraits/women/2.jpg',
        text: '1Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos reprehenderit nihil quae quas commodi vitae, enim similique adipisci iste est. Dolorum rem sunt incidunt assumenda rerum voluptatum odio quisquam ipsam explicabo quae! Excepturi, suscipit eius?'
    },
    {
        name: "Index Prefix",
        position: "SEO",
        photo: 'https://randomuser.me/api/portraits/women/25.jpg',
        text: '2Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos reprehenderit nihil quae quas commodi vitae, enim similique adipisci iste est. Dolorum rem sunt incidunt assumenda rerum voluptatum odio quisquam ipsam explicabo quae! Excepturi, suscipit eius?'
    },
    {
        name: "Miyah Myles Jr",
        position: "Desinger",
        photo: 'https://randomuser.me/api/portraits/women/21.jpg',
        text: '3Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos reprehenderit nihil quae quas commodi vitae, enim similique adipisci iste est. Dolorum rem sunt incidunt assumenda rerum voluptatum odio quisquam ipsam explicabo quae! Excepturi, suscipit eius?'
    }
]  

let current = 0;

function change() {
    const { name, position, photo, text } = data[current];
    testimonail.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;

    current++;

    if(current > data.length - 1) {
        current = 0;
    }
}

setInterval(change, 10000);