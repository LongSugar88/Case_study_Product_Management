let product1 = new ProductManager('0001', 'BootCamp1','6 months', '60.000.000', 'No image', 'No information');
listProduct.push(product1);
let product2 = new ProductManager('0002', 'BootCamp2','5 months', '50.000.000', 'No image', 'No information');
listProduct.push(product2);
function showCourse() {
    let course =
        '<tr>'+
        '    <div ><th class="normal-td-sort">No</th></div>'+
        '    <div><th class="normal-td-middle">ID Course</th></div>'+
        '    <div><th class="normal-td-middle">Course Name</th></div>'+
        '    <div><th class="normal-td-sort">Time</th></div>'+
        '    <div><th class="normal-td-middle">Price</th></div>'+
        '    <div><th class="normal-td-middle">Coach Image</th></div>'+
        '    <div><th class="normal-td-long">Description</th></div>'+
        '    </tr>'
    for(i=0; i<listProduct.length; i++){
        course +=
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
            '</tr>'
    }
    document.getElementById('table1').innerHTML = course;
}
showCourse();