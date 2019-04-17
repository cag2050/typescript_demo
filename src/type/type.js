function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
console.log(getName('john'));
//# sourceMappingURL=type.js.map