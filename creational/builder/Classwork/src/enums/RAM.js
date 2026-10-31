// Java: enum RAM { RAM_8(8), ... } -- har bir konstanta ichida qiymat (value) bor.
// JavaScript'da buni kichik frozen obyekt bilan ifodalaymiz:
// { name, value, getValue(), toString() }.
// toString() bo'lgani uchun `${RAM.RAM_16}` Java'dagi kabi "RAM_16" ni beradi.
function makeConstant(name, value) {
  return Object.freeze({
    name,
    value,
    getValue() {
      return value;
    },
    toString() {
      return name;
    },
  });
}

export const RAM = Object.freeze({
  RAM_8: makeConstant("RAM_8", 8),
  RAM_16: makeConstant("RAM_16", 16),
  RAM_24: makeConstant("RAM_24", 24),
  RAM_32: makeConstant("RAM_32", 32),
});
