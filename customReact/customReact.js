function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);

    container.appendChild(domElement);
}

const reactElement ={
    type: "a",
    props:{
        href:"https://www.google.com",
        target:"_blank"
    },
    Children: "Cick Here"
}

const mainContainer = document.getElementById("root");
customRender(reactElement, mainContainer);