var usegeneric;
(function (usegeneric) {
    var CycleList = /** @class */ (function () {
        function CycleList(src) {
            if (src === void 0) { src = []; }
            this.pointer = 0;
            this.storage = [];
            this.storage = src;
        }
        CycleList.prototype.isEmpty = function () {
            return this.storage.length == 0;
        };
        CycleList.prototype.current = function () {
            if (this.isEmpty()) {
                return null;
            }
            return this.storage[this.pointer];
        };
        CycleList.prototype.next = function () {
            if (this.isEmpty()) {
                return;
            }
            if (this.pointer == this.storage.length - 1) {
                this.pointer = 0;
            }
            else {
                this.pointer++;
            }
        };
        CycleList.prototype.add = function (item) {
            this.storage.push(item);
        };
        return CycleList;
    }());
    var strlist = new CycleList(['first', 'second', 'third']);
    for (var i = 0; i < 10; i++) {
        console.log(strlist.current());
        strlist.next();
    }
    console.log('\n---\n');
    strlist.add('fourth');
    strlist.add('fifth');
    for (var i = 0; i < 10; i++) {
        console.log(strlist.current());
        strlist.next();
    }
    console.log('\n---\n');
    var numlist = new CycleList([1, 2, 3]);
    for (var i = 0; i < 10; i++) {
        console.log(numlist.current());
        numlist.next();
    }
    console.log('\n---\n');
    numlist.add(4);
    numlist.add(5);
    for (var i = 0; i < 10; i++) {
        console.log(numlist.current());
        numlist.next();
    }
    console.log('\n---\n');
    var userlist = new CycleList();
    userlist.add({ name: 'John', email: 'john@exam.com', password: '1111' });
    userlist.add({ name: 'Bill', email: 'bill@exam.com', password: '2222' });
    userlist.add({ name: 'David', email: 'david@exam.com', password: '3333' });
    userlist.add({ name: 'Susan', email: 'susan@exam.com', password: '4444' });
    for (var i = 0; i < 10; i++) {
        console.log(userlist.current());
        userlist.next();
    }
    console.log('\n---\n');
})(usegeneric || (usegeneric = {}));
function foo() {
    return;
}
function bar() {
    return undefined;
}
function baz() {
    return null;
}
function foobar() {
    return null;
}
function foobaz() {
    return undefined;
}
