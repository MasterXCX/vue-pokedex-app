function mapValues(obj, f){
    const res = {};
    Objects.keys(obj).forEach(key => {
        res[key] = f(obj[key], key)
    });
    return res;
}

export deafault (module, types) => {
    let newObj = {};
    mapValues(types, (names, type)=>{
        newObj[type] = {};
        types[type].forEach(name => {
            newObj[type][name] = module + ':' + name
        });
    });
    return newObj;
}