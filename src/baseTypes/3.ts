let some:unknown;
some = 'Text';
let str: string;
str = some;

if (typeof some === 'string') {
    str = some; // Перевіряємо тип перед привласненням
} else {
    str = 'Default Value';
}

export {};
