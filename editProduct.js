function edit(i) {
    let editIDProduct = '<input id="editIdProduct" value="' +listProduct[i].getCodeID()+'" class="normal-td-middle" type="text">';
    let editNameProduct = '<input id="editNameProduct" value="' +listProduct[i].getName()+'" class="normal-td-middle" type="text">';
    let editQuantityProduct = '<input id="editTimeProduct" value="' +listProduct[i].getQuantity()+'" class="normal-td-sort" type="text">';
    let editPriceProduct = '<input id="editPriceProduct" value="' +listProduct[i].getPrice()+'" class="normal-td-middle" type="text">';
    let editImageProduct = '<input id="editImage" value="' +listProduct[i].getImage()+'" class="normal-td-middle" type="text">';
    let editDescribeProduct = '<input id="editDescribe" value="' +listProduct[i].getDescribe()+'" class="normal-td-long" type="text">';
    document.getElementById("idProduct"+i).innerHTML = editIDProduct;
    document.getElementById("name"+i).innerHTML = editNameProduct;
    document.getElementById("quantity"+i).innerHTML = editQuantityProduct;
    document.getElementById("price"+i).innerHTML = editPriceProduct;
    document.getElementById("image"+i).innerHTML = editImageProduct;
    document.getElementById("describe"+i).innerHTML = editDescribeProduct;

}
function save(a) {
    listProduct[a].editCodeID();
    listProduct[a].editName();
    listProduct[a].editQuantity();
    listProduct[a].editPrice();
    listProduct[a].editImage();
    listProduct[a].editDescribe();
    let saveNewForm =
        '<tr>'+
        '    <div ><th class="normal-td-sort">No</th></div>'+
        '    <div><th class="normal-td-middle">ID Course</th></div>'+
        '    <div><th class="normal-td-middle">Course Name</th></div>'+
        '    <div><th class="normal-td-sort">Time</th></div>'+
        '    <div><th class="normal-td-middle">Price</th></div>'+
        '    <div><th class="normal-td-middle">Coach Image</th></div>'+
        '    <div><th class="normal-td-long">Description</th></div>'+
        '    </tr>';
    for(let i=0; i<listProduct.length; i++){
        saveNewForm +=
        '<tr>'+
        '    <div ><td class="normal-td-sort">'+Number(i+1)+'</td></div>'+
        '    <div><td id="idProduct'+i+'" class="normal-td-middle">'+ listProduct[i].getCodeID() + '</td></div>'+
        '    <div><td id="name'+i+'" class="normal-td-middle">'+listProduct[i].getName()+'</td></div>'+
        '    <div><td id="quantity'+i+'" class="normal-td-sort">'+listProduct[i].getQuantity()+'</td></div>'+
        '    <div><td id="price'+i+'" class="normal-td-middle">'+listProduct[i].getPrice()+'</td></div>'+
        '    <div><td id="image'+i+'" class="normal-td-middle">'+listProduct[i].getImage()+'</td></div>'+
        '    <div><td id="describe'+i+'" class="normal-td-long">'+listProduct[i].getDescribe()+'</td></div>'+
            '    <div  ><td class="icon-rectangle" onmousedown="edit('+i+')" ><i>Edit</i></td></div>'+
            '    <div ><td class="icon-rectangle" onmousedown="save('+i+')" ><i>Save</i></td></div>'+
            '    <div ><td class="icon-rectangle" onmousedown="deleteProduct('+i+')"><i>Delete</i></td></div>'+
        '    </tr>'
    }
    document.getElementById('table1').innerHTML = saveNewForm;
}
function deleteProduct(a) {
    listProduct.splice(a,1);
    let deleteNewForm =
        '<tr>'+
        '    <div ><th class="normal-td-sort">No</th></div>'+
        '    <div><th class="normal-td-middle">ID Course</th></div>'+
        '    <div><th class="normal-td-middle">Course Name</th></div>'+
        '    <div><th class="normal-td-sort">Time</th></div>'+
        '    <div><th class="normal-td-middle">Price</th></div>'+
        '    <div><th class="normal-td-middle">Coach Image</th></div>'+
        '    <div><th class="normal-td-long">Description</th></div>'+
        '    </tr>';
    for(let i=0; i<listProduct.length; i++){
        deleteNewForm +=
        '<tr>'+
        '    <div ><td class="normal-td-sort">'+Number(i+1)+'</td></div>'+
        '    <div><td id="idProduct'+i+'" class="normal-td-middle">'+ listProduct[i].getCodeID() + '</td></div>'+
        '    <div><td id="name'+i+'" class="normal-td-middle">'+listProduct[i].getName()+'</td></div>'+
        '    <div><td id="quantity'+i+'" class="normal-td-sort">'+listProduct[i].getQuantity()+'</td></div>'+
        '    <div><td id="price'+i+'" class="normal-td-middle">'+listProduct[i].getPrice()+'</td></div>'+
        '    <div><td id="image'+i+'" class="normal-td-middle">'+listProduct[i].getImage()+'</td></div>'+
        '    <div><td id="describe'+i+'" class="normal-td-long">'+listProduct[i].getDescribe()+'</td></div>'+
        '    <div  ><td class="icon-rectangle" onmousedown="edit('+i+')" ><i>Edit</i></td></div>'+
        '    <div ><td class="icon-rectangle" onmousedown="save('+i+')" ><i>Save</i></td></div>'+
        '    <div ><td class="icon-rectangle" onmousedown="deleteProduct('+i+')"><i>Delete</i></td></div>'+
        '    </tr>'
    }
    document.getElementById('table1').innerHTML = deleteNewForm;
}