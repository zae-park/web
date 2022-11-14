const imgInput = document.getElementById("imgUploader");

imgInput.onchange = (event) => {
    const selectedImg = imgInput.files[0];
    const imgReader = new FileReader();

    imgReader.readAsDataURL(selectedImg[0]);
    imgReader.onload = function () {
        document.getElementById("previewing").src = imgReader.result;
    };
};

imgInput.addEventListener("change", hendleImg);
