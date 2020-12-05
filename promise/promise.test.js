//create class Promise

//init project ---- im terminal schreiben npm init -y
// npm instal jest
const NadiiPromise = require('./promise.js');

const t = setTimeout

describe( 'Nadiia Promise', () => {
    let promise;
    let executorSpy;

    const succesResalt = 42;
    const errorResult = 'I am eeror';
    beforeEach (() => {
        executorSpy = jest.fn( r => t ( () => r(succesResalt), 150))
        promise = new NadiiPromise(executorSpy)
    });

 test('should exists und to be typeof function', () => {
expect(NadiiPromise).toBeDefined();
expect(typeof NadiiPromise).toBe('function');
});
test('instanse schould methods: then, catch, finally', () => {
    
    expect(promise.then).toBeDefined();
    expect(promise.catch).toBeDefined();
    expect(promise.finally).toBeDefined();

});
test ('schould call executor function', () => {
    
    expect(executorSpy).toHaveBeenCalled();
});

test('schould get data in this block and chain them', async() => {
    const result = await promise.then(num => num).then(num => num  * 2)
    expect(result).toBe(succesResalt * 2)
});

test ('schould catch error', () => {
    const errorExecutor = (_, r) => t(() => r(errorResult),
    150)
    const errorPromise = new NadiiPromise(errorExecutor)
    return new Promise( resolve => {
        errorPromise.catch(error => {
            expect(error).toBe(errorResult)
            resolve()
        })
    })
});

test('schould call finally method', async () => {
    const finallySpy =jest.fn(() => {});
    await promise.finally(finallySpy);

    expect(finallySpy).toHaveBeenCalled();
})

});

//npm run test
//becommen fehler? das heis wie konnen inplimentacion machen