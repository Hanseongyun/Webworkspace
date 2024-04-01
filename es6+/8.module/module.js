/*
    export :
    - 해당 모듈에 있는 변수, 함수, 클래스를 외부에서 접근 할 수 있도록 함
*/
export const exportVarialbe = 'export 변수';
export function exportFunction () {
    return 'export 함수';
}
export class exportClass {
    field;
    constructor() {
        this.field = 'export 클래스';
    }
}

/*
    - 하나의 객체로 구성하여 한번에 export 가능
*/
// export {exportVarialbe, exportFunction, exportClass};


/*
    - export default 키워드로 한 모듈에 대한 기본 export 값을 지정할 수 있음
    - export default 반드시 한 모듈에 하나만 가능
    - export default는 var, let, const 키워드와 함께 사용 불가능
*/
const exprotDefaultVariable = 'export default 변수';
export default exprotDefaultVariable;
