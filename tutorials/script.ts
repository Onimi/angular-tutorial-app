namespace usegeneric {
    class CycleList<T> {
        private pointer: number = 0;
        private storage: T[] = [];

        public constructor (src: T[] = []) {
            this.storage = src;
        }

        private isEmpty (): boolean {
            return this.storage.length == 0;
        } 

        public current (): T | null {
            if ( this.isEmpty() ) {
                return null;
            }
            return this.storage[this.pointer];
        }

        public next (): void {
            if ( this.isEmpty() ) {
                return;
            }
            if (this.pointer == this.storage.length - 1) {
                this.pointer = 0;
            } else {
                this.pointer++;
            }
        }

        public add (item: T): void {
            this.storage.push(item);
        }
    }

    const strlist = new CycleList<string>( ['first', 'second', 'third'] );
    for ( let i = 0; i < 10; i++ ) {
        console.log( strlist.current() );
        strlist.next();
    }

    console.log('\n---\n');

    strlist.add('fourth');
    strlist.add('fifth');
    for ( let i = 0; i < 10; i++ ) {
        console.log( strlist.current() );
        strlist.next();
    }

    console.log('\n---\n');

    const numlist = new CycleList<number>( [1,2,3] );
    for ( let i = 0; i < 10; i++ ) {
        console.log( numlist.current() );
        numlist.next();
    }

    console.log('\n---\n');

    numlist.add(4);
    numlist.add(5);
    for ( let i = 0; i < 10; i++ ) {
        console.log( numlist.current() );
        numlist.next();
    }

    console.log('\n---\n');


    type User = {
        name: string;
        email: string;
        password: string;
    }

    const userlist = new CycleList<User> ();
    userlist.add({ name: 'John',  email: 'john@exam.com',  password: '1111'});
    userlist.add({ name: 'Bill',  email: 'bill@exam.com',  password: '2222'});
    userlist.add({ name: 'David', email: 'david@exam.com', password: '3333'});
    userlist.add({ name: 'Susan', email: 'susan@exam.com', password: '4444'});

    for ( let i = 0; i < 10; i++ ) {
        console.log( userlist.current() );
        userlist.next();
    }

    console.log('\n---\n');
}

function foo (): void {
    return;
}

function bar (): void {
    return undefined;
}

function baz (): void {
    return null;
}

function foobar (): null {
    return null;
}

function foobaz (): undefined {
    return undefined;
}