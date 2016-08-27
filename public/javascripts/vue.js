
var socket = io();
document.addEventListener("DOMContentLoaded", function() {

    var content = new Vue({
        el: '.task',
        data: {
            list: [{
                id: 1,
                task: '進捗と今後',
                before_title: '今までやったこと',
                beforetext: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                after_title: 'これからすること',
                aftertext: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                problem_title: '問題',
                problemtext: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                answer_title: '解決方法',
                answertext: 'aaaaaaaaaaaaaaaaaaaaaaaaaa',
                date:'○月△日第何週',//[]
                username:[]
            },{
                id: 2,
                task: '進捗と今後',
                before_title: '今までやったこと',
                beforetext: [],
                after_title: 'これからすること',
                aftertext: [],
                problem_title: '問題',
                problemtext: [],
                answer_title: '解決方法',
                answertext: [],
                date:'○月△日第何週',
                username:[]
            },{
                id: 3,
                task: '進捗と今後',
                before_title: '今までやったこと',
                beforetext: [],
                after_title: 'これからすること',
                aftertext: [],
                problem_title: '問題',
                problemtext: [],
                answer_title: '解決方法',
                answertext: [],
                date:'○月△日第何週',
                username:[]
            },{
                id: 4,
                task: '進捗と今後',
                before_title: '今までやったこと',
                beforetext: [],
                after_title: 'これからすること',
                aftertext: [],
                problem_title: '問題',
                problemtext: [],
                answer_title: '解決方法',
                answertext: [],
                date:'○月△日第何週',
                username:[]
            }]
        },
        methods:{
          problem_submit:function(index){
            console.log(this.list[index].problem_input);
            this.list[index].problem ='';
            socket.emit('before_req',{before:this.list[index].before_input,id:index+1});
          },
          answer_submit:function(index){
            console.log(this.list[index].answer_input);
            this.list[index].problem ='';
            socket.emit('before_req',{before:this.list[index].before_input,id:index+1});
          },
          before_submit:function(index){
            console.log(this.list[index].before_input);
            this.list[index].problem ='';
            socket.emit('before_req',{before:this.list[index].before_input,id:index+1});
          },
          after_submit:function(index){
            console.log(this.list[index].after_input);
            this.list[index].problem ='';
            socket.emit('before_req',{before:this.list[index].before_input,id:index+1});
          }
        }
    });
});

socket.on('new_text',function(data){
  content.list[data.id]. hensu .push(data);
});

//どうやって受け取ろう。。。
(function() {
    socket.on('old_text', function(data) {
        if(data.beforetext != null){
          content.list[data.id].beforetext.push(data.before);
        }
        if(data.aftertext != null){
          content.list[data.id].aftertext.push(data.after);
        }
        if(data.problem != null){
          content.list[data.id].problem.push(data.problem);
        }
        if(data.answetext != null){
          content.list[data.id].answertext.push(data.answer);
        }
    });
}());
