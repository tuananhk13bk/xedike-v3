// const fingerprint2 = require("fingerprintjs2");

// const getFingerprint = callback => {
//   const components = fingerprint2.get();
//   callback(components);
//   // fingerprint2.get(components => {
//   //   const murmur = fingerprint2.x64hash128(
//   //     components.map(pair => pair.value).join(),
//   //     31
//   //   );
//   //   console.log(murmur);
//   //   callback(murmur);
//   // });
// };

// getFingerprint(console.log);

const foo = callback => {
  setTimeout(() => {
    callback("done");
  }, 2000);
};

foo(console.log);
