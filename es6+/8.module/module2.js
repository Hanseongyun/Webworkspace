/*
    import from:
    - 타 모듈에서 export 한 대상을 로드
    - 타 모듈에서 export로 내보내면 {}를 사용하여 import 해야함, 이름이 같아야 함
    - 타 모듈에서 export default로 내보내면 {} 없이 import 함, 내보낸 이름과 받아오는 이름이 달라도 됨
*/
import {exportVarialbe, exportFunction, exportClass} from './module.js';
console.log(exportVarialbe);

import defaultVariable from './module.js';
console.log(defaultVariable);

/*
    - as 키워드로 export로 내보낸 대상의 이름을 변경하여 사용할 수 있음
*/
import {exportVarialbe as ev} from './module.js';
console.log(ev);

/*
    - 타 모듈에 모든 대상을 한번에 받을 때는 * 키워드 사용해서 가져올 수 있음
    - as 키워드 필요
*/
import * as md from './module.js';
console.log(md.exportVarialbe);
console.log(md.default);

/*
    - 모듈의 이름이 index 이면 해당 모듈의 폴더명으로 import 가능
*/
import { indexExport } from './folder';     // 패키지필요(현재 실행하면 오류뜸)
console.log(indexExport);
