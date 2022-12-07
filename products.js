// define data
let products = [
    {
        name: "Sony TV",
        quantity: 4,
        ppu: 90000
    },
    {
        name: "Razer Laptop",
        quantity: 3,
        ppu: 150000
    },
    {
        name: "Iphone 14 Pro",
        quantity: 1,
        ppu: 41900
    },
    {
        name: "Samsung Smart Fridge",
        quantity: 1,
        ppu: 50000
    },
    {
        name: "Microsoft Surface Pro 9",
        quantity: 3,
        ppu: 130000
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
