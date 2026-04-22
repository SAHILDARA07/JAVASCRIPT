const productsdivison = document.getElementById("products-div")

function displayProducts(products){
    products.map((product) => {
        const div = document.createElement("div"); //   <div></div>
        div.className = "card p-0"
        div.style.width = "18rem";
       div.innerHTML = ` 
                <img src=${product.images[0]}
                    class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.category}.</p>
                    <p class="card-text fs-5">price  ₹ ${(product.price * 93).toFixed(2)}/-.</p>
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
            </div>`;

        productsdivison.appendChild(div);
    })


}  



async function fetchproduct() {
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json();
    displayProducts(data.products)
}



fetchproduct();