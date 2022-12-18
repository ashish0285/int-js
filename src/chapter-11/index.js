export const all_properties = object =>
    Object.getOwnPropertyNames(object).filter(element=> typeof object[element] === 'function');
