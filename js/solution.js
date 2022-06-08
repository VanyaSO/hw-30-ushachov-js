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

function foo(a,w,e,r) {
    console.log(a,w,e,r);
    console.log(this);
}

let funkBind = bind(foo, ctx, [100,200,300,400]);
funkBind();




















