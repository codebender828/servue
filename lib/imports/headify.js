function getHeadRecursive(component){
    var head = {}
    if(component.$options.head){
        let childHead
        if(component.$parent){
            childHead = getHeadRecursive(component.$parent)
            //if component has no meta function, then just pass the child, if no child or self return {}
        }
        head = component.$options.head(childHead)
        head = Object.assign({}, childHead, head)
    }else{
        if(component.$parent){
            head = getHeadRecursive(component.$parent)
        }
    }
    
    return head
}

function processHead(headObject){
    var head = ''
    for(var i in headObject){
        head += headObject[i]
    }
    return head
}

export default {
    created(){
        console.log(global.process.env.VUE_ENV) //outputs undefined in jest, outputs 'server' in node
        if(this.$isServer){
            var headObject = getHeadRecursive(this)
            this.$ssrContext.head = processHead(headObject)
        }
    }
}
