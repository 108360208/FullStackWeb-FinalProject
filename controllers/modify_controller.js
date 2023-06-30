const toRegister = require('../models/register_model');
const Check = require('../service/member_check');
const encryption = require('../models/encryption');
const toLogin=require('../models/login_model')
const ranking=require('../models/ranking_model')
const ranking1=require('../models/ranking1_model')
const learderboard =require('../models/leaderboard')
check = new Check();

module.exports = class Member {
    postRegister(req, res, next) {
        // 獲取client端資料
        const password = encryption(req.body.password);
        const memberData = {
            name: req.body.name,
            email: req.body.email,
            password: password,
        }
        const checkEmail = check.checkEmail(memberData.email);
        // 不符合email格式
        if (checkEmail === false) {
          /*   res.json({
                result: {
                    status: "註冊失敗。",
                    err: "請輸入正確的Eamil格式。(如1234@email.com)"
                }
            }) */
            res.render('register',{status:'error form'})  
      
        // 若符合email格式
        } else if (checkEmail === true) {
            // 將資料寫入資料庫
            toRegister(memberData).then(result => {
                // 若寫入成功則回傳
                /* res.json({
                    result: result
                }) */
                res.render('register',{status:'success'})
            }, (err) => {
                // 若寫入失敗則回傳
                /*  res.json({
                    err: err
                })  */
                res.render('register',{status:'repeat email'})  
            })
        }    
    }
    ranking(req,res,next){
        ranking().then(rows=>{
     res.render('learderboard',{name:rows[0].name, name1:rows[1].name, name2:rows[2].name,name3:rows[3].name,name4:rows[4].name,
                scores:rows[0].scores, scores1:rows[1].scores, scores2:rows[2].scores, scores3:rows[3].scores, scores4:rows[4].scores}) 
              /*   res.render('learderboard',{data:rows}) */
        })
       
       /*  console.log(req.query.scores) */
    }
    ranking1(req,res,next){
        ranking1().then(rows=>{
            res.render('learderboard1',{name:rows[0].name, name1:rows[1].name, name2:rows[2].name,name3:rows[3].name,name4:rows[4].name,
                scores:rows[0].scores, scores1:rows[1].scores, scores2:rows[2].scores, scores3:rows[3].scores, scores4:rows[4].scores})
        })
    }
    postLogin(req,res,next){
        const memberData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }
        toLogin(memberData).then(rows => {
            if (check.checkNull(rows) === true) {
           /*       res.json({
                    result: {
                        status: "登入失敗。",
                        err: "請輸入正確的帳號或密碼。"
                    }
                })  */
              res.render('login',{status:'failed'})  
            
            } else if (check.checkNull(rows) === false) {
             /*    res.json({
                    result: {
                        status: "登入成功。",
                        loginMember: "歡迎 " + rows[0].name + " 的登入！",
                    }
                }) */
                res.render('mainpage',{name:rows[0].name})
                
            }
        })
    }
    getregister(req,res,next){
        res.render('./register',{status:'good'})
    }
    postLogout(req,res,next){
        res.redirect('login',)
    }
    getlogin(req,res,nwxt){
        res.render('./login',{status:'good'})
    }
    Game1start(req,res,next){
        res.render('./whackMole/index')
    }
    Game2start(req,res,next){
        res.render('./eatsnake/demo')
    }
    upload(req,res,next){
      /*   console.log(req.query.scores)
        console.log(req.query.name) */
        learderboard(req);
    }

}
	
/* <!-- 	<% { for(var i =0; i< data.length; i++) { %> <div class="lboard_mem">
		
		<div class="img">
		 <img src='/images/leaderboard/pic_'+(i+1).toString()+'.png' alt="picture_1">
		</div>
		<div class="name_bar">
		 <p><span><%=(i+1).toString()+'.'%></span> <%= data[i].name%></p> 
		 <div class="bar_wrap">
		  <div class="inner_bar" style="width: 95%"></div>
		 </div>
		</div>
		<div class="points">
		 <%= data[i].scores%>
		</div>
	   </div>
	   <div> <% data[i] %> </div> <% } 
	} %> 
   -->
 */