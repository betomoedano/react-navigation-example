export const getRandomPhoto = () => {
  const photos = [
    require('../../assets/memojis/1.png'),
    require('../../assets/memojis/2.png'),
    require('../../assets/memojis/3.png'),
    require('../../assets/memojis/4.png'),
    require('../../assets/memojis/5.png'),
    require('../../assets/memojis/6.png'),
    require('../../assets/memojis/7.png'),
    require('../../assets/memojis/8.png'),
    require('../../assets/memojis/9.png'),
    require('../../assets/memojis/10.png'),
    require('../../assets/memojis/11.png'),
  ];
  return photos[Math.floor(Math.random() * photos.length)];
};
