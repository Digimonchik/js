const addImageV2 = (url) => {
  const p = new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.setAttribute("alt", "My Photo");
    img.src = url;
    const containerElem = document.querySelector(".page");
    containerElem.append(img);

    const onImageLoaded = () => {
      const { width, height } = img;
      resolve({ width, height });
    };
    const onImageLoadError = () => reject(new Error("Image load failed"));

    img.addEventListener("load", onImageLoaded);

    img.addEventListener("error", onImageLoadError);
  });
  return p;
};
const imgSrc =
  "https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg";

addImageV2(imgSrc)
  .then((data) => console.log(data)) // ==> { width: 200, height: 100 }
  .catch((error) => console.log(error)); // ==> 'Image load failed'
