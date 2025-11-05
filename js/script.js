// Datos de productos
const products = [
    {
        id: 1,
        name: "Vestido Floral Veraniego",
        price: 4590,
        category: "mujer",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Elegante vestido floral perfecto para el verano. Confeccionado en tela suave y transpirable, ideal para días calurosos. Disponible en varios colores y talles."
    },
    {
        id: 2,
        name: "Jeans Slim Fit",
        price: 6290,
        category: "hombre",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Jeans de corte slim fit, cómodos y resistentes. Hechos con denim de alta calidad que se adapta a tu cuerpo con el uso. Disponible en varios lavados."
    },
    {
        id: 3,
        name: "Blazer Elegante",
        price: 8990,
        category: "mujer",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Blazer sofisticado perfecto para ocasiones formales o para darle un toque elegante a tu look casual. Confeccionado en tela de alta calidad y corte impecable."
    },
    {
        id: 4,
        name: "Camisa Básica Hombre",
        price: 3490,
        category: "hombre",
        image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Camisa básica de algodón 100%, perfecta para el día a día. Corte clásico que combina con cualquier pantalón. Disponible en varios colores."
    },
    {
        id: 5,
        name: "Bolso de Cuero",
        price: 7590,
        category: "accesorios",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Bolso de cuero genuino con diseño moderno y funcional. Múltiples compartimentos para organizar tus pertenencias. Ideal para el día a día."
    },
    {
        id: 6,
        name: "Falda Plisada",
        price: 4290,
        category: "mujer",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Falda plisada de talle alto, perfecta para looks casuales y formales. Confeccionada en tela fluida que se adapta a tu movimiento."
    },
    {
        id: 7,
        name: "Sudadera con Capucha",
        price: 5490,
        category: "hombre",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Sudadera cómoda con capucha, ideal para días frescos. Con bolsillo tipo canguro y ajuste en puños y cintura. Disponible en varios colores."
    },
    {
        id: 8,
        name: "Gafas de Sol",
        price: 3290,
        category: "accesorios",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Gafas de sol con protección UV400. Diseño moderno y elegante que se adapta a cualquier tipo de rostro. Incluye estuche protector."
    },
    {
        id: 9,
        name: "Top de Encaje",
        price: 2890,
        category: "mujer",
        image: "https://images.unsplash.com/photo-1589810635657-232948472d98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Top de encaje delicado, perfecto para combinar con jeans o faldas. Corte favorecedor y tela suave al tacto. Disponible en varios colores."
    },
    {
        id: 10,
        name: "Zapatillas Urbanas",
        price: 8990,
        category: "hombre",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Zapatillas urbanas con diseño moderno y suela cómoda. Ideales para el día a día, combinando estilo y confort. Disponible en varios colores."
    },
    {
        id: 11,
        name: "Collar Elegante",
        price: 1890,
        category: "accesorios",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Collar elegante con detalle minimalista. Perfecto para complementar cualquier outfit, ya sea casual o formal. Ajustable a diferentes largos."
    },
    {
        id: 12,
        name: "Chaqueta de Cuero",
        price: 12990,
        category: "mujer",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Chaqueta de cuero sintético de alta calidad. Diseño atemporal que nunca pasa de moda. Perfecta para looks casuales y de noche."
    },
    {
        id: 13,
        name: "Pantalón Chino",
        price: 4990,
        category: "hombre",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Pantalón chino de corte moderno, ideal para looks casuales y semi-formales. Confeccionado en tela resistente y cómoda. Disponible en varios colores."
    },
    {
        id: 14,
        name: "Reloj de Pulsera",
        price: 6590,
        category: "accesorios",
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Reloj de pulsera con diseño elegante y correa de cuero genuino. Resistente al agua y con garantía de 2 años. Ideal para regalo."
    },
    {
        id: 15,
        name: "Conjunto Deportivo",
        price: 7890,
        category: "mujer",
        image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Conjunto deportivo de dos piezas, perfecto para entrenar o looks casuales. Tela transpirable y de secado rápido. Disponible en varios colores."
    }
];

// Variables globales
let cart = [];
let currentProduct = null;
let selectedSize = null;
let currentSlide = 0;
const testimonialSlides = document.querySelectorAll('.testimonial-slide').length;

// Inicialización cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Ocultar loader después de 2 segundos
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
        }, 500);
    }, 2000);

    // Cargar productos
    loadProducts('all');
    
    // Configurar eventos
    setupEventListeners();
    
    // Inicializar slider de testimonios
    initTestimonialSlider();
});

// Cargar productos en la grilla
function loadProducts(category) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-actions">
                <div class="action-btn favorite" data-id="${product.id}">
                    <i class="far fa-heart"></i>
                </div>
                <div class="action-btn share" data-id="${product.id}">
                    <i class="fas fa-share-alt"></i>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price}</p>
                <div class="product-buttons">
                    <button class="btn btn-add" data-id="${product.id}">Agregar al Carrito</button>
                    <button class="btn btn-details" data-id="${product.id}">Ver más</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
    
    // Agregar eventos a los botones recién creados
    document.querySelectorAll('.btn-add').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
    
    document.querySelectorAll('.btn-details').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            openProductPopup(productId);
        });
    });
    
    document.querySelectorAll('.action-btn.favorite').forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            this.querySelector('i').classList.toggle('far');
            this.querySelector('i').classList.toggle('fas');
            
            if (this.classList.contains('active')) {
                showNotification('Producto agregado a favoritos');
            }
        });
    });
    
    document.querySelectorAll('.action-btn.share').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            
            if (navigator.share) {
                navigator.share({
                    title: product.name,
                    text: product.description,
                    url: window.location.href,
                })
                .then(() => showNotification('Producto compartido'))
                .catch(error => console.log('Error sharing:', error));
            } else {
                // Fallback para navegadores que no soportan Web Share API
                const shareUrl = `${window.location.href}#product-${productId}`;
                navigator.clipboard.writeText(shareUrl)
                    .then(() => showNotification('Enlace copiado al portapapeles'))
                    .catch(err => console.error('Error copying to clipboard:', err));
            }
        });
    });
}

// Configurar event listeners
function setupEventListeners() {
    // Toggle del tema
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Categorías
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const category = this.getAttribute('data-category');
            loadProducts(category);
        });
    });
    
    // Carrito
    document.getElementById('cartIcon').addEventListener('click', openCart);
    document.getElementById('closeCart').addEventListener('click', closeCart);
    document.getElementById('clearCart').addEventListener('click', clearCart);
    document.getElementById('checkout').addEventListener('click', checkout);
    
    // Popup de producto
    document.getElementById('closePopup').addEventListener('click', closeProductPopup);
    document.getElementById('popupAddBtn').addEventListener('click', addFromPopup);
    
    // Selector de talles
    document.querySelectorAll('.size-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            selectedSize = this.getAttribute('data-size');
        });
    });
    
    // Selector de cantidad
    document.getElementById('increaseQuantity').addEventListener('click', function() {
        const quantityInput = document.getElementById('quantityInput');
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });
    
    document.getElementById('decreaseQuantity').addEventListener('click', function() {
        const quantityInput = document.getElementById('quantityInput');
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });
    
    // Formulario de suscripción
    document.getElementById('subscribeForm').addEventListener('submit', handleSubscription);
    
    // Menú móvil
    document.getElementById('mobileMenu').addEventListener('click', toggleMobileMenu);
}

// Toggle del tema claro/oscuro
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const themeIcon = document.querySelector('#themeToggle i');
    
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Cargar tema guardado
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('#themeToggle i').classList.remove('fa-moon');
        document.querySelector('#themeToggle i').classList.add('fa-sun');
    }
}

// Abrir popup de producto
function openProductPopup(productId) {
    currentProduct = products.find(product => product.id === productId);
    
    if (currentProduct) {
        document.getElementById('popupImage').src = currentProduct.image;
        document.getElementById('popupTitle').textContent = currentProduct.name;
        document.getElementById('popupPrice').textContent = `$${currentProduct.price}`;
        document.getElementById('popupDescription').textContent = currentProduct.description;
        
        // Resetear selección de talle y cantidad
        document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('selected'));
        selectedSize = null;
        document.getElementById('quantityInput').value = 1;
        
        document.getElementById('productPopup').classList.add('active');
    }
}

// Cerrar popup de producto
function closeProductPopup() {
    document.getElementById('productPopup').classList.remove('active');
    currentProduct = null;
}

// Añadir producto desde el popup
function addFromPopup() {
    if (!selectedSize) {
        showNotification('Por favor selecciona un talle', 'error');
        return;
    }
    
    const quantity = parseInt(document.getElementById('quantityInput').value);
    addToCart(currentProduct.id, quantity, selectedSize);
    closeProductPopup();
}

// Añadir producto al carrito
function addToCart(productId, quantity = 1, size = 'M') {
    const product = products.find(p => p.id === productId);
    
    if (product) {
        const existingItem = cart.find(item => item.id === productId && item.size === size);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                size: size,
                quantity: quantity
            });
        }
        
        updateCartUI();
        showNotification('Producto agregado al carrito');
    }
}

// Actualizar interfaz del carrito
function updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    // Actualizar contador
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Actualizar items del carrito
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Tu carrito está vacío</div>';
    } else {
        let total = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price">$${item.price} x ${item.quantity}</p>
                    <p>Talle: ${item.size}</p>
                    <div class="cart-item-actions">
                        <button class="quantity-btn decrease" data-id="${item.id}" data-size="${item.size}">-</button>
                        <span class="cart-item-quantity">${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${item.id}" data-size="${item.size}">+</button>
                        <span class="remove-item" data-id="${item.id}" data-size="${item.size}">
                            <i class="fas fa-trash"></i>
                        </span>
                    </div>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
        
        // Agregar eventos a los botones de los items del carrito
        document.querySelectorAll('.decrease').forEach(button => {
            button.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                const size = this.getAttribute('data-size');
                updateCartItemQuantity(id, size, -1);
            });
        });
        
        document.querySelectorAll('.increase').forEach(button => {
            button.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                const size = this.getAttribute('data-size');
                updateCartItemQuantity(id, size, 1);
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                const size = this.getAttribute('data-size');
                removeFromCart(id, size);
            });
        });
        
        cartTotal.textContent = `Total: $${total}`;
    }
}

// Actualizar cantidad de un item en el carrito
function updateCartItemQuantity(productId, size, change) {
    const item = cart.find(item => item.id === productId && item.size === size);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId, size);
        } else {
            updateCartUI();
        }
    }
}

// Eliminar producto del carrito
function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    updateCartUI();
    showNotification('Producto eliminado del carrito');
}

// Abrir carrito
function openCart() {
    document.getElementById('cartSidebar').classList.add('active');
}

// Cerrar carrito
function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
}

// Vaciar carrito
function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('¿Estás seguro de que querés vaciar el carrito?')) {
        cart = [];
        updateCartUI();
        showNotification('Carrito vaciado');
    }
}

// Finalizar compra
function checkout() {
    if (cart.length === 0) {
        showNotification('Tu carrito está vacío', 'error');
        return;
    }
    
    // Simular proceso de compra
    showNotification('Procesando tu compra...');
    
    setTimeout(() => {
        cart = [];
        updateCartUI();
        closeCart();
        showNotification('¡Compra finalizada con éxito! Gracias por tu pedido.');
    }, 2000);
}

// Inicializar slider de testimonios
function initTestimonialSlider() {
    // Crear puntos de navegación
    const testimonialNav = document.getElementById('testimonialNav');
    testimonialNav.innerHTML = '';
    
    for (let i = 0; i < testimonialSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'testimonial-dot';
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('data-slide', i);
        dot.addEventListener('click', function() {
            goToSlide(parseInt(this.getAttribute('data-slide')));
        });
        testimonialNav.appendChild(dot);
    }
    
    // Iniciar cambio automático de slides
    setInterval(() => {
        currentSlide = (currentSlide + 1) % testimonialSlides;
        goToSlide(currentSlide);
    }, 5000);
}

// Ir a slide específico
function goToSlide(slideIndex) {
    const track = document.getElementById('testimonialTrack');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    track.style.transform = `translateX(-${slideIndex * 100}%)`;
    
    dots.forEach((dot, index) => {
        if (index === slideIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    currentSlide = slideIndex;
}

// Manejar suscripción al newsletter
function handleSubscription(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const formMessage = document.getElementById('formMessage');
    
    // Validación básica
    if (!nameInput.value.trim() || !emailInput.value.trim()) {
        formMessage.textContent = 'Por favor completá todos los campos';
        formMessage.className = 'form-message error';
        return;
    }
    
    if (!isValidEmail(emailInput.value)) {
        formMessage.textContent = 'Por favor ingresá un email válido';
        formMessage.className = 'form-message error';
        return;
    }
    
    // Simular envío
    formMessage.textContent = '¡Gracias por suscribirte! Pronto recibirás nuestras ofertas.';
    formMessage.className = 'form-message success';
    
    // Resetear formulario
    nameInput.value = '';
    emailInput.value = '';
    
    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// Validar email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Mostrar notificación
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Toggle menú móvil
function toggleMobileMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// Cargar tema guardado al iniciar
loadSavedTheme();