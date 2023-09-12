var a=''
var b=''
var flag=true
var op='None'

function Solve(num){
    let txtarea=document.getElementById('result')
    if (flag){
        a+=num
        txtarea.value=a
    }
    else{
        b+=num
        txtarea.value=b
    }

}

function operation(operator){
    let txtarea=document.getElementById('result')
    if (operator==='plus'){
        op='plus'
        txtarea.value='+'
        
    }
    else if(operator==='minus'){
        op='minus'
        txtarea.value='-'
    }
    else if(operator==='div'){
        op='div'
        txtarea.value='/'
    }
    else if(operator==='mul'){
        op='mul'
        txtarea.value='x'
    }
    flag=false
}

function reset(){
    let txtarea=document.getElementById('result')
    txtarea.value='0'
    a=''
    b=''
    flag=true
    op='None'
}

function result(){
    let txtarea=document.getElementById('result')
    let res=0
    if (op==='None'){
        return
    }
    if (op==='plus'){
        res=Number(a)+Number(b)
        
    }
    else if(op==='minus'){
        res=Number(a)-Number(b)
    }
    else if(op==='div'){
        if(Number(b)===0){
            console.log(Number(b))
            console.log('Error')
            res=-1
            

        }
        else{
            res=Number(a)/Number(b)
        }
    }
    else if (op==='mul'){
        res=Number(a)*Number(b)
        
    }
    txtarea.value=res
    console.log(res)
    if (res===-1){
        reset()
    }
    else{
        a=String(res)
        b=''
        flag=true
        op='None'
    }
    
}

function del_func(){
    let txtarea=document.getElementById('result')
    if (flag){
        let len=a.length
        if (len>0){
            a=a.substring(0,len-1)
            txtarea.value=a
        }
    }
    else{
        let len=b.length
        if (len>0){
            b=b.substring(0,len-1)
            txtarea.value=b}
        
    }
}
