'use strict';

void function () {
    const ctx = {
        name: "Petro",
        lastName: "Ysovich",
    };

    function carData(name, lastName) {
        console.log(`name: ${name} \n lastName: ${lastName} `);
    }

    function bind(func, ctx) {
        return function (argggs) {
            const args = [].slice.call(arguments);
            return func.apply(ctx, args);
        };
    }

    bind(carData, ctx)('User', 'User');

}();

// petro,Ysovich

















