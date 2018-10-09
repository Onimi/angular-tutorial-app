type Salaries = {
    [key: string]: number
}

type StringNumberObject = {
    [key: string]: number | string
}

type ClassListHolder = {
    className: string
}

// sum of salaries:
function sumSalary(salaries: Salaries): number {
    return Object.keys(salaries).reduce( (sum: number, key: string) => sum + salaries[key], 0 );
}

const sal0 = {};
const sal1 = {
    "Adam": 100,
    "Brayan": 200,
    "Chad": 270
}

console.log(sumSalary(sal0));
console.log(sumSalary(sal1));
console.log('---\n');


// max salary owner:
function ownerOfMaxSalary(salaries: Salaries): string {
    const DEFAULT: string = "There is no emploees";
    const employees: string[] = Object.keys(salaries);
    if (!employees.length) {
        return DEFAULT;
    }
    return Object.keys(salaries).reduce( (owner: string, key: string) => salaries[key] > salaries[owner] ? key : owner );
}

console.log(ownerOfMaxSalary(sal0));
console.log(ownerOfMaxSalary(sal1));
console.log('---\n');


// double numeric properties:
function isNumeric(n: number | string): boolean {
    return !isNaN( parseFloat( <string>n ) ) && isFinite( <number>n );
}

function doubleNumeric(arg: StringNumberObject): void {
    Object.keys(arg).forEach( (key: string) => {
        if ( isNumeric( arg[key] ) ) {
            arg[key] = <number>arg[key] * 2;
        }
    } );
}

const menu0 = {
    width: 400,
    heigth: 600,
    title: 'Main menu'
}

doubleNumeric(menu0);

console.log(menu0);
console.log('---\n');


// list of multiples:
function countBy(base: number, count: number): number[] {
    const times: number[] = [];

    if ( parseInt( '' + count ) === count || count > 0) {
        let multiple = 0;
        for (let i = 0; i < count; i++) {
            multiple += base;
            times.push( multiple );
        }
    }

    return times;
}

console.log( countBy(1, 10) );
console.log( countBy(2, 5) );
console.log( countBy(3.5, 4) );
console.log('---\n');


// add class to class list:
function addClass(obj: ClassListHolder, className: string): void {
    const list: string[] = obj.className.split(' ');
    if ( !list.includes(className) ) {
        obj.className += ` ${className}`;
    }
}

function addClassAlt(obj: ClassListHolder, className: string): void {
    const regexp = new RegExp(`(?:^|\\s)${className}(?:$|\\s)`);
    if ( !obj.className.match(regexp) ) {
        obj.className += ` ${className}`;
    }
}

const classListHolder = {
    className: 'open menu'
}
const classListHolderAlt = {
    className: 'open menu'
}

console.log(classListHolder);
addClass(classListHolder, 'new');
console.log(classListHolder);
addClass(classListHolder, 'open');
console.log(classListHolder);
addClass(classListHolder, 'hidden');
console.log(classListHolder);
console.log('---\n');

console.log(classListHolderAlt);
addClassAlt(classListHolderAlt, 'new');
console.log(classListHolderAlt);
addClassAlt(classListHolderAlt, 'open');
console.log(classListHolderAlt);
addClassAlt(classListHolderAlt, 'hidden');
console.log(classListHolderAlt);
console.log('---\n');
