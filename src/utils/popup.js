import Vue from 'vue'
let  that = Vue
// 加载框
export const showLoading =  function(text) {
    if(text){
		that.$vux.loading.show({
            text: text,
            position: 'middle'
        })
	}else{
		that.$vux.loading.hide()
	}
}

// export const confirmToast = function (title, content = '') {
// 	return new Promise((resolve) => {
// 		// uni.showModal({
// 		// 	title: title,
// 		// 	content: content,
// 		// 	success:  (res) => {
// 		// 		resolve(res.confirm)
// 		// 	}
//         // });
//         that.$vux.confirm.show({
//             // 组件除show外的属性
//             onCancel () {
//             },
//             onConfirm () {}
//           })
//     })
// }

export const showToast = function(text) {
    return new Promise((resolve,reject) => {
        let timer = setTimeout(() => {
            that.$vux.toast.text(text,'middle')
            timer = null
            clearTimeout(timer)
        }, 0);
    })
}

// 请求出错弹框
export const  reqErrorMsgToast = function() {
    showToast('请求出错，请稍后再试')
}