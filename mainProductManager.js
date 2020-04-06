let listProduct = [];
function ProductManager(id, name, quantity, price, image, describe){
    let listProduct = [];
    this.codeID = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.image = image;
    this.describe = describe;
    this.getCodeID = function () {
        return this.codeID;
    }
    this.getName = function () {
        return this.name;
    }
    this.getQuantity = function () {
        return this.quantity;
    }
    this.getPrice = function () {
        return this.price;
    }
    this.getImage = function () {
        return this.image;
    }
    this.getDescribe = function () {
        return this.describe;
    }
    this.setCodeID = function () {
        this.codeID = document.getElementById('idProduct').value;
        return this.codeID;
    }
    this.setName = function () {
        this.name = document.getElementById('nameProduct').value;
        return this.name;
    }
    this.setQuantity = function () {
        this.quantity = document.getElementById('timeProduct').value;
        return this.quantity;
    }
    this.setPrice = function () {
        this.price = document.getElementById('priceProduct').value;
        return this.price;
    }
    this.setImage = function () {
        this.image = document.getElementById('image').value;
        return this.image;
    }
    this.setDescribe = function () {
        this.describe = document.getElementById('describe').value;
        return this.describe;
    }
    this.editCodeID = function () {
        this.codeID = document.getElementById('editIdProduct').value;
        return this.codeID;
    }
    this.editName = function () {
        this.name = document.getElementById('editNameProduct').value;
        return this.name;
    }
    this.editQuantity = function () {
        this.quantity = document.getElementById('editTimeProduct').value;
        return this.quantity;
    }
    this.editPrice = function () {
        this.price = document.getElementById('editPriceProduct').value;
        return this.price;
    }
    this.editImage = function () {
        this.image = document.getElementById('editImage').value;
        return this.image;
    }
    this.editDescribe = function () {
        this.describe = document.getElementById('editDescribe').value;
        return this.describe;
    }
}



