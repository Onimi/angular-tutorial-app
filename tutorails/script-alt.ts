namespace nogeneric {
    class CycleListString {
        private pointer: number = 0;
        private storage: string[] = [];

        public constructor (src: string[] = []) {
            this.storage = src;
        }

        private isEmpty (): boolean {
            return this.storage.length == 0;
        } 

        public current (): string | null {
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

        public add (item: string): void {
            this.storage.push(item);
        }
    }

    const strlist = new CycleListString( ['first', 'second', 'third'] );
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

    class CycleListNumber {
        private pointer: number = 0;
        private storage: number[] = [];

        public constructor (src: number[] = []) {
            this.storage = src;
        }

        private isEmpty (): boolean {
            return this.storage.length == 0;
        } 

        public current (): number | null {
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

        public add (item: number): void {
            this.storage.push(item);
        }
    }

    const numlist = new CycleListNumber( [1,2,3] );
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

    class CycleListUser {
        private pointer: number = 0;
        private storage: User[] = [];

        public constructor (src: User[] = []) {
            this.storage = src;
        }

        private isEmpty (): boolean {
            return this.storage.length == 0;
        } 

        public current (): User | null {
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

        public add (item: User): void {
            this.storage.push(item);
        }
    }

    const userlist = new CycleListUser ();
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