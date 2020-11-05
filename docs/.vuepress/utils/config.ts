// interface configType {
// 	apiKey: string
// }

// type configType = {
// 	apiKey: string
// }

const apiKey =  'd4cbca6b86c6d0b092b47c8d9772d36e';
const poetryUrl = 'http://api.tianapi.com/txapi/lzmy/index';

const config = {
    // apiKey: 'd4cbca6b86c6d0b092b47c8d9772d36e',
    // poetryUrl: 'http://api.tianapi.com/txapi/lzmy/index',
    poetryParams:`${poetryUrl}?key=${apiKey}`
}

export default config