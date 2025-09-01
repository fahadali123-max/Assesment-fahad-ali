// Is ka logic ya ha k ma na kud sa aik keyword bana lia "typedKeyword" k naam sa. phir ma na array k method filter ka use kia or us ma ya lika k array k data k ander agar ya wala typedKeyword ha to us ko display karwa do.

const productArr = ["pen", "pencil", "eraser", "sharpener", "bag", "marker"]

const typedKeyword = 'er'

const products = productArr.filter((product)=>{
    return product.includes(typedKeyword)    
})

console.log(products);
