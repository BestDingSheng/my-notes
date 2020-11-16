const apiKey =  'd4cbca6b86c6d0b092b47c8d9772d36e';
const poetryUrl = 'http://api.tianapi.com/txapi/lzmy/index';
const tiangouUrl = 'http://api.tianapi.com/txapi/tiangou/index';
const pyqwenanUrl = 'http://api.tianapi.com/txapi/pyqwenan/index';

const config = {
    poetryParams:`${poetryUrl}?key=${apiKey}`,
    tiangouUrl:`${tiangouUrl}?key=${apiKey}`,
    pyqwenanUrl:`${pyqwenanUrl}?key=${apiKey}`
}

export default config