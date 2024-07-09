const productosTecnologia = [
    {
      nombre: "Smartphone",
      precio: 699.99,
      cantidad: 30
    },
    {
      nombre: "Laptop",
      precio: 999.99,
      cantidad: 20
    },
    {
      nombre: "Tablet",
      precio: 499.99,
      cantidad: 25
    },
    {
      nombre: "Smartwatch",
      precio: 199.99,
      cantidad: 40
    },
    {
      nombre: "Auriculares Bluetooth",
      precio: 59.99,
      cantidad: 100
    },
    {
      nombre: "Teclado Mecánico",
      precio: 89.99,
      cantidad: 35
    },
    {
      nombre: "Ratón Inalámbrico",
      precio: 49.99,
      cantidad: 45
    },
    {
      nombre: "Monitor 4K",
      precio: 299.99,
      cantidad: 15
    },
    {
      nombre: "Disco Duro Externo",
      precio: 79.99,
      cantidad: 60
    },
    {
      nombre: "Impresora",
      precio: 149.99,
      cantidad: 10
    },
    {
      nombre: "Cámara Digital",
      precio: 449.99,
      cantidad: 8
    },
    {
      nombre: "Altavoces Bluetooth",
      precio: 99.99,
      cantidad: 50
    },
    {
      nombre: "Router WiFi",
      precio: 129.99,
      cantidad: 25
    },
    {
      nombre: "Micrófono USB",
      precio: 79.99,
      cantidad: 35
    },
    {
      nombre: "Consola de Videojuegos",
      precio: 499.99,
      cantidad: 12
    },
    {
      nombre: "Smart TV",
      precio: 799.99,
      cantidad: 7
    },
    {
      nombre: "Tarjeta de Memoria SD",
      precio: 29.99,
      cantidad: 150
    },
    {
      nombre: "Proyector",
      precio: 259.99,
      cantidad: 5
    },
    {
      nombre: "Cargador Rápido",
      precio: 39.99,
      cantidad: 75
    },
    {
      nombre: "Cámara de Seguridad",
      precio: 149.99,
      cantidad: 20
    }
  ];

const displayProduct = ( products )=>{
        parentList.innerHTML = '';
        products.forEach(product =>{
        let listItem = document.createElement('li');
        listItem.textContent = `${product.nombre}  cantidad: ${product.cantidad}  price: $${product.precio}`;
        parentList.appendChild(listItem);
        })
}
if(!JSON.parse(localStorage.getItem('productosTecnologia'))){
    localStorage.setItem('productosTecnologia', JSON.stringify(productosTecnologia));
}
const productosRecuperados = JSON.parse(localStorage.getItem('productosTecnologia'));
const parentList = document.getElementById('product-list');

displayProduct(productosRecuperados);

document.getElementById('searchInput').addEventListener('input', function(event) {
   displayProduct(handleInputChange(event.target.value));
  });
  
  function handleInputChange(value) {
    return productosRecuperados.filter(product => product.nombre.toLowerCase().includes(value.toLowerCase()))
  }


  //agregando productos
  //TODO: Agregar mas validaciones al formulario antes de agregarlo al array de procutos
  const formAddProduct =  document.getElementById('form-add-product');

 formAddProduct.addEventListener('submit',function(ev){
    ev.preventDefault();

    const dataForm = new FormData(formAddProduct);
    const productInsert = {}
      for (const [key, value] of dataForm.entries()) {
        if (key === 'precio' || key === 'cantidad') {
            productInsert[key] = parseFloat(value);
        } else {
            productInsert[key] = value;
        }
    }

    productosRecuperados.push(productInsert);
    localStorage.removeItem('productosTecnologia');
    localStorage.setItem('productosTecnologia', JSON.stringify(productosRecuperados));
    displayProduct(productosRecuperados);
 })