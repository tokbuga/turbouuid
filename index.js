const f64 = new Float64Array(2);
const u32 = new Uint32Array(f64.buffer, 0, 1);
const u16 = new Uint16Array(f64.buffer, 4, 3);
const u64 = new BigUint64Array(f64.buffer, 8, 1);

window.randomUUID = () => (
    f64[0] = Math.random(),
    f64[1] = Math.random()) && (
        u32[0].toString(16).padEnd(8, 0).concat("-")
            .concat(u16[0].toString(16).padEnd(4, 0)).concat("-")
            .concat(u16[1].toString(16).padEnd(4, 0)).concat("-")
            .concat(u16[2].toString(16).padEnd(4, 0)).concat("-")
            .concat(u64[0].toString(16).substring(4)).padEnd(36, 0)
    );

function benchmark() {
    let t0, tLen, dt, max = 1e6;

    tLen = max;
    t0 = performance.now();
    while (tLen--) crypto.randomUUID();
    dt = performance.now() - t0;
    console.log("crypto.randomUUID:", dt, crypto.randomUUID());
    // crypto.randomUUID: 1138.6050000190735 d47cb6aa-e781-452a-ba2b-03663bd0b67c

    tLen = max;
    t0 = performance.now();
    while (tLen--) window.randomUUID();
    dt = performance.now() - t0;
    console.log("window.randomUUID:", dt, window.randomUUID());
    // window.randomUUID: 426.0099997520447 f1235820-f090-3fce-a0d6-af6e26c6a0d6
}