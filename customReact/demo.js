function createElement(rootElement, root) {
    const element = document.createElement(rootElement.type);
    element.innerHTML = rootElement.Children;

   for (const key in rootElement.props) {
    if (root === "children") continue;
    element.setAttribute(key, rootElement.props[key]);

   }

   root.appendChild(element);
}
const rootElement ={
    type: "a",
    props:{
        href: "https://www.google.com",
        target: "_blank",
    }, Children: "Click Here??"
}
const root = document.getElementById("root");
createElement(rootElement, root);

console.log(root);