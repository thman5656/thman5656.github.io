const images = document.querySelectorAll('img[data-src]'); 

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 100px 0px"
};

const imagesLoad = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () =>
        {
            image.removeAttribute('data-src');
        };
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) 
                {
                    imagesLoad(item.target);
                    observer.unobserve(item.target);
                }
        });
    }, imgOptions);
    images.forEach((img) => 
        {
            observer.observe(img);
        });
} else
     { 
        images.forEach((img) => {
        imagesLoad(img);
     });
}