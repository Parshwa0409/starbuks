function addItemToCart(btnNode) {
    let parent = btnNode.parentElement;
    //   console.log(parent.children[1].textContent);

    let ul = document.querySelector("#cart-list");

    let li = document.createElement("li");
    li.classList.add("cart-item");
    li.textContent = `${parent.children[1].textContent}`;

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("cart-delete-btn");
    deleteBtn.innerHTML = '<i class="fa fa-trash-o"></i>';
    deleteBtn.addEventListener("click", (e) => {
        let parent = e.currentTarget.parentElement;
        parent.remove();
    });

    li.appendChild(deleteBtn);

    ul.appendChild(li);
}
