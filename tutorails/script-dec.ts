function decorated (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('Log:\nDecorated used');
    console.log(target, '<target');
    console.log(propertyKey, '<key');
    console.log(descriptor, '<descriptor');
    console.log(target[propertyKey]);
    console.log(`...\n\n`);

    let counter = 0;
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Called ${++counter} times`);
        const res = original(...args);
        return res;
    }
}

function delayed (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.enumerable = false;
    descriptor.value = function (...args) {
        let timer: number = 0;
        const index = setInterval(() => { console.log(timer++); }, 1000);
        setTimeout((...args) => {
            clearInterval(index);
            original(...args);
        }, 3000);
    }
}
class Example {
    private title: string = 'Title';

    @decorated
    @delayed
    public getTitle (): string {
        return this.title;
    }
}

const ex = new Example();
ex.getTitle();
ex.getTitle();
// ex.getTitle();