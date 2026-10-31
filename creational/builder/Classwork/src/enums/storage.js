// Java: enum storage { SSD_128(128), ... } -- RAM.js bilan bir xil usul.
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

export const storage = Object.freeze({
  SSD_128: makeConstant("SSD_128", 128),
  SSD_256: makeConstant("SSD_256", 256),
  SSD_512: makeConstant("SSD_512", 512),
  SSD_1024: makeConstant("SSD_1024", 1024),
});
