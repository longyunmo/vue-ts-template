// 导入axios实例
import httpRequest from '../request/index'


// post
function apiPost(url:string,param:object) {
    return httpRequest({
		url: url,
		method: 'post',
		data: param,
	})
}

// get
function apiGet(url:string,param:object) {
    return httpRequest({
		url: url,
		method: 'get',
	})
}

export default {
    apiPost,
    apiGet
}
