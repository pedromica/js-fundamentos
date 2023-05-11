 //condicional switch, que nos permite enviar un parámetro de entrada y se va a evaluar en situaciones diferentes. //

 //podemos sustituir if…else if…else if…else por switch:

 var price;
 var city = 'Murcia'
 switch (city) {
    case 'Valencia':
        price = '10';
        break;
    case 'Madrid':
        price = '15';
        break;
    case 'Murcia':
        price = '20';
        break;
    default:
        price = 'none'
        break;
 }

 console.log (`El precio del metro para ${city} es de ${price} euros`);

 /* switch lo utilizaremos para códigos simples, de asignación, de una suma… */

 /* Ejercicios switch */