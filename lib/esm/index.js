var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// mostro.ts
var mostro_exports = {};
__export(mostro_exports, {
  hello: () => hello
});
function hello(name) {
  return `Hello ${name}! :)`;
}
export {
  mostro_exports as mostro
};
