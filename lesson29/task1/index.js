// const MyimgSrc =
//   "https://cs9.pikabu.ru/post_img/big/2018/07/16/8/1531743710175866534.jpg";
// const myFync = (imgSrc) => {
//   const body = document.querySelector("body");
//   const elem = document.createElement("img");
//   elem.setAttribute("alt", "picture");
//   elem.src = imgSrc;
//   body.append(elem);
//   const { width } = elem;
//   console.log(width);
//   console.log(elem);
// };

// myFync(MyimgSrc);
// const image = document.querySelector("img");
// const { width, height } = image;

const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement("img");
  imgElem.setAttribute("alt", "My Photo");
  imgElem.src = imgSrc;
  const containerElem = document.querySelector(".page");
  containerElem.append(imgElem);

  const onImageLoaded = () => {
    const { width, height } = imgElem;
    callback(null, { width, height });
  };

  imgElem.addEventListener("load", onImageLoaded);

  imgElem.addEventListener("error", () => callback("Image load failed"));
};
const onImageLoaded = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = data;
  const sizeElem = document.querySelector(".image-size");
  sizeElem.textContent = `${width} x ${height}`;
};

addImage(imgSrc, onImageLoaded);
