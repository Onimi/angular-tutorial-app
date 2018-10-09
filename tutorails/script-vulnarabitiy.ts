class P {
    public constructor (
        public name: string
    ) {}

    public hello (): void {
        console.log(this.name)
    }
}

const a = new P('qewr');
a.hello();
Object.getPrototypeOf(a).hello = function () {console.log('hello')};
a.hello();