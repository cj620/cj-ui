import Toast from './toast'

let currentToast
export default{
  install(Vue, option){
    Vue.prototype.$toast = function(message,toastOptions){
      if(currentToast){
        currentToast.close()
      }
     currentToast = createToast({
       Vue,
       message,
       propsData:toastOptions,
       onclose: ()=>{
         currentToast: null
       }
      })
    }
  }
} //使用插件 避免import 避免prototype.$toast


function createToast({Vue,message,propsData,onclose}){
  let Constructor = Vue.extend(Toast) //Vue动态创建toast组件
  let toast = new Constructor({
    propsData
  })
  toast.$slots.default = [message]
  toast.$mount() //让生命周期的钩子执行
  toast.$on('close',onclose)
  document.body.appendChild(toast.$el)
  return toast
}