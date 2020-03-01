/*
@author: magician
@file:   api.js
@date:   2020/2/24
*/

// const products = require('../products');
const APIError = require('../rest').APIError;

// module.exports = {
//     'GET /api/products': async (ctx, next) => {
//         ctx.rest({
//             products: products.getProducts()
//         });
//     },
//
//     'POST /api/products': async (ctx, next) => {
//         let
//             name = ctx.request.body.name,
//             manufacturer = ctx.request.body.manufacturer,
//             price = ctx.request.body.price;
//         let p = products.createProduct(name, manufacturer, price);
//         ctx.rest(p);
//     },
//
//     'DELETE /api/products/:id': async (ctx, next) => {
//         console.log(`delete product ${ctx.params.id}...`);
//         const p = products.deleteProduct(ctx.params.id);
//         if (p) {
//             ctx.rest(p);
//         } else {
//             throw new APIError('product:not_found', 'product not found by id.');
//         }
//     }
// };

let gid = 0;

function nextId() {
    gid++;
    return 't' + gid;
}

let todos = [
    {
        id: nextId(),
        name: 'Learn Git',
        description: 'Learn how to use git as distributed version control'
    },
    {
        id: nextId(),
        name: 'Learn JavaScript',
        description: 'Learn JavaScript, Node.js, NPM and other libraries'
    },
    {
        id: nextId(),
        name: 'Learn Python',
        description: 'Learn Python, WSGI, asyncio and Numpy'
    },
    {
        id: nextId(),
        name: 'Learn Java',
        description: 'Learn Java, Servlet, Maven Spring'
    }
];

module.exports = {
    "GET /api/todos": async (ctx, next) => {
        ctx.rest({
            todos: todos
        });
    },

    'POST /api/todos': async (ctx, next) => {
        let
            t = ctx.request.body,
            todo;

        if (!t.name || !t.name.trim()) {
            throw new APIError('invalid_input', 'Missing name');
        }
        if (!t.description || !t.description.trim()) {
            throw new APIError('invalid_input', 'Missing description');
        }

        todo = {
            id: nextId(),
            name: t.name.trim(),
            description: t.description.trim()
        };
        todos.push(todo);
        ctx.rest(todo);
    },

    'PUT /api/todos/:id': async (ctx, next) => {
        let
            t = ctx.request.body,
            index = -1,
            i, todo;

        if (!t.name || !t.name.trim()) {
            throw new APIError('invalid_input', 'Missing name');
        }
        if (!t.description || !t.description.trim()) {
            throw new APIError('invalid_input', 'Missing description');
        }

        for (i = 0; i < todos.length; i++) {
            if (todos[i].id === ctx.params.id) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            throw new APIError('not found', 'Todo not found by id: ' + ctx.params.id);
        }

        todo = todos[index];
        todo.name = t.name.trim();
        todo.description = t.description.trim();
        ctx.rest(todo);
    },

    'DELETE /api/todos/:id': async (ctx, next) => {
        let i, index = -1;
        for (i = 0; i < todos.length; i++) {
            if (todos[i].id === ctx.params.id) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            throw new APIError('not found', 'Todo not found by id: ' + ctx.params.id);
        }
        ctx.rest(todos.splice(index, 1)[0]);
    }
};
