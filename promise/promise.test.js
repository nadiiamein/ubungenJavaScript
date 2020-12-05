//create class Promise

//init project ---- im terminal schreiben npm init -y
// npm instal jest
const NadiiPromise = require('./promise.js');

describe( 'Nadiia Promise', () => {

 test('should exists und to be typeof function', () => {
expect(NadiiPromise).toBeDefined();
expect(typeof NadiiPromise).toBe('function');
});
test('instanse schould methods: then, catch, finally', () => {
    const executorSpy = jest.fn(() => {});

    const promise = new NadiiPromise(executorSpy);

    expect(promise.then).toBeDefined();
    expect(promise.catch).toBeDefined();
    expect(promise.finally).toBeDefined();

});
test ('schould call executor function', () => {
    const executor = jest.fn(() => {

    })
    const promise = new NadiiPromise(executorSpy)
    expect(executorSpy).toHaveBeenCalled();
})
});

//npm run test
//becommen fehler? das heis wie konnen inplimentacion machen