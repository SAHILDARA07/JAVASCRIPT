

    fetch("https://dummyjson.com/products") // Ecommerce
    .then((res) => res.json()) 
    .then((data) => { 

    })

const ProductsDivision = document.getElementById("products-div");
let allproducts = [];

async function addtocart(i) {
   
    const arr = JSON.parse(localStorage.getItem("carts")) || []; 
    console.log(allproducts[i]);
    const res = arr.findIndex((e) => e.id === allproducts[i].id);

    if(res == -1)
    {
     allproducts[i].qty = 1;
    arr.push(allproducts[i]);
    }
    else {
        arr[res].qty++;
    }
   
    localStorage.setItem("carts",JSON.stringify(arr));

}
   function displayProducts() {
    allproducts.forEach((product, i) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card p-0" style="width: 18rem;">
            <img src="${product.images[0]}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.category}</p>
                <p class="card-text fs-5">Price ₹${(product.price * 93).toFixed(2)}/-</p>
                <button onclick="addtocart(${i})" class="btn btn-primary">Add to cart</button>
            </div>
        </div>`;
        ProductsDivision.appendChild(div);
    });
}

async function fetchProducts() {
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json();
    allproducts = data.products;
    displayProducts();
}


fetchProducts();


