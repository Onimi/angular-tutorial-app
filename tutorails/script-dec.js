var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decorated(target, propertyKey, descriptor) {
    console.log('Log:\nDecorated used');
    console.log(target, '<target');
    console.log(propertyKey, '<key');
    console.log(descriptor, '<descriptor');
    console.log(target[propertyKey]);
    console.log("...\n\n");
    var counter = 0;
    var original = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Called " + ++counter + " times");
        var res = original.apply(void 0, args);
        return res;
    };
}
function delayed(target, propertyKey, descriptor) {
    var original = descriptor.value;
    descriptor.enumerable = false;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var timer = 0;
        var index = setInterval(function () { console.log(timer++); }, 1000);
        setTimeout(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            clearInterval(index);
            original.apply(void 0, args);
        }, 3000);
    };
}
var Example = /** @class */ (function () {
    function Example() {
        this.title = 'Title';
    }
    Example.prototype.getTitle = function () {
        return this.title;
    };
    __decorate([
        decorated,
        delayed
    ], Example.prototype, "getTitle");
    return Example;
}());
var ex = new Example();
ex.getTitle();
// ex.getTitle();
// ex.getTitle();
