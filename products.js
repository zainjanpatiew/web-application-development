// define data
let products = [
    {
        name: "MacBook Pro 13",
        quantity: 1,
        ppu: 40000
    },
    {
        name: "your Item",
        quantity: 2,
        ppu: 10000
    },
    {
        name: "your Item",
        quantity: 5,
        ppu: 20000
    },
    {
        name: "your Item",
        quantity: 2,
        ppu: 30000
    },
    {
        name: "your Item",
        quantity: 1,
        ppu: 40000
    }
]

function loadData() {
    let productList = document.getElementById("productList")
    let gross = 0

    for (let p in products) {
        let row = document.createElement("tr")

        let productName = document.createElement("td")
        productName.innerHTML = products[p].name

        let quantity = document.createElement("td")
        quantity.innerHTML = products[p].quantity
        quantity.className = "text-center";

        let price = document.createElement("td")
        price.innerHTML = products[p].ppu
        price.className = "text-right";

        let total = document.createElement("td")
        total.innerHTML = (products[p].ppu * products[p].quantity)
        total.className = "text-right";
        
        gross += (products[p].ppu * products[p].quantity)
        row.appendChild(productName)
        row.appendChild(quantity)
        row.appendChild(price)
        row.appendChild(total)

        productList.appendChild(row)
    }
    
    let vat = Math.round(gross * 0.07)
    let net = gross + vat
    document.getElementById("gross").innerHTML = gross.toFixed()
    document.getElementById("vat").innerHTML = vat.toFixed()
    document.getElementById("net").innerHTML = net.toFixed()
}   
