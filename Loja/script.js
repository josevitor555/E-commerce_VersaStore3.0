
const productCard = document.querySelectorAll('.container');

productCard.forEach(productCard => {
    const quantityElement = productCard.querySelector(".col-1 span");
    const priceElement = productCard.querySelector(".col-2 span");
    const moreButton = productCard.querySelector("#more");
    const lessButton = productCard.querySelector("#less");
    const addToCatButton = productCard.querySelector(".buy-now button");
    const messageElement = productCard.querySelector("#add");
    const buyNowButton = productCard.querySelector("#buy");

    let quantity = 1;
    let price = 76.90;

    moreButton.addEventListener("click", () => {
    quantity = quantity + 1;
    updateQuantityAndPrice();
    });

    lessButton.addEventListener("click", () => {
    if (quantity > 1) {
        quantity = quantity - 1;
        updateQuantityAndPrice();
    } else {
        quantity = 1;
        alert("Por padrão, a quantidade é 1!");
    }
    });

    addToCatButton.addEventListener("click", () => {
    messageElement.textContent = "Add to cart";
    setTimeout(() => {
        messageElement.textContent = "Product added";
        setTimeout(() => {
        messageElement.textContent = "Add to cat";
        }, 2000);
    }, 200);
    });

    buyNowButton.addEventListener("click", () => {
        const totalAmount = quantity * price;
        const formattedAmount = totalAmount.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

        let quantityText = "quantidade!";
        if (quantity > 1) {
        quantityText = "quantidades!";
        }

        const purchaseMessage = `Você comprou esse produto por ${formattedAmount} de ${quantity} ${quantityText}`;
        alert(purchaseMessage);

    });

    function updateQuantityAndPrice() {
    quantityElement.textContent = `Quantity: ${quantity}`;
    const totalPrice = quantity * price;
    const formattedPrice = totalPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
    });
    priceElement.textContent = formattedPrice;
    }
});