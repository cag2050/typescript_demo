type Name = string;

type NameResolver = () => string;

// 联合类型用竖线表示
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}

console.log(getName('john'));
