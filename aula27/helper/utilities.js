const getElement = (element, value) => {
    const attribute = `${element} ${value}`;
    return document.querySelector(attribute).value;
}