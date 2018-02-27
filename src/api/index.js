//  如果是本地开发，就把environment dev
//  生产环境，就把environment 设置成pro
const environment = 'test'
let baseUrl
switch (environment) {
  case 'dev':
    baseUrl = 'http://192.168.1.80:8378'
    break
  case 'test':
    baseUrl = 'http://gateway-csic-base.apps.csic.com'
    break
  case 'pro':
    baseUrl = 'https://pingkm.rajax.me'
    break

  default:
    baseUrl = 'http://172.16.6.133:9099'
    break
}
// console.log('host:', baseUrl)

// api统一配置(目前未使用)

// let httpUrl = {
//   'test': baseUrl + '/api/test',
// }
export {baseUrl}
