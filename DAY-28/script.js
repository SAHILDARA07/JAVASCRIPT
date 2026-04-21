const productdiv = document.getElementById("product-div");

async function fetchproduct() {
    const res= await fetch("https://dummyjson.com/products")
    await res.json()
}

