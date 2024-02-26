function WorkIMG(jbcat) {
    switch (jbcat) {
        case 'assembly':
            return "https://amazingarchitecture.com/storage/5517/hardware-accessories-for-assembling-furniture.jpg";
        case 'Carpentry':
            return "https://media.licdn.com/dms/image/D5612AQE6-Si1tQKjYw/article-cover_image-shrink_720_1280/0/1683806886828?e=2147483647&v=beta&t=GLwVdyFI80reAVKTXgljJIuBX6sbzrWVCZZLmo9vg0g";
        default:
            return ""; // Default return value in case jbcat doesn't match any case
    }
}

export default WorkIMG;
