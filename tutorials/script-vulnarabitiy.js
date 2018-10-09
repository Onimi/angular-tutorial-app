var P = /** @class */ (function () {
    function P(name) {
        this.name = name;
    }
    P.prototype.hello = function () {
        console.log(this.name);
    };
    return P;
}());
var a = new P('qewr');
a.hello();
Object.getPrototypeOf(a).hello = function () { console.log('hello'); };
a.hello();
