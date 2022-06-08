'use strict';

function bind(func, ctx, arr){
    return function (){
        func.apply(ctx, arr);
    }
}

const ctx = {
    name: "Petro",
    lastName: "Ysovich",
};

function foo(q,w,e,r) {
    console.log(q,w,e,r);
    console.log(this);
}

let funkBind = bind(foo, ctx, [100,200,300,400]);
funkBind();




















