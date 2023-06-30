const db = require('./connection_db');
module.exports = function register(req,res){
    switch (req.query.game) {
        case '1' :
            var sqlinsert='INSERT INTO Ranking1(name,scores) VALUES (?,?)';
            db.run(sqlinsert,[req.query.name,req.query.scores], function (err, rows) {
                // 若資料庫部分出現問題，則回傳給client端「伺服器錯誤，請稍後再試！」的結果。
                if (err) {
                    console.log(err);
                    result.status = "失敗。";
                    result.err = "伺服器錯誤，請稍後在試！"
                    reject(result);
                    return;
                }
                // 若寫入資料庫成功，則回傳給clinet端下：
            })
            break;  //停止执行，跳出switch
        case '2' :
            var sqlinsert='INSERT INTO Ranking2(name,scores) VALUES (?,?)';
            db.run(sqlinsert,[req.query.name,req.query.scores], function (err, rows) {
                // 若資料庫部分出現問題，則回傳給client端「伺服器錯誤，請稍後再試！」的結果。
                if (err) {
                    console.log(err);
                    result.status = "失敗。";
                    result.err = "伺服器錯誤，請稍後在試！"
                    reject(result);
                    return;
                }
                // 若寫入資料庫成功，則回傳給clinet端下：
            })
            break;  //停止执行，跳出switch
 
        default :  //上述条件都不满足时，默认执行的代码
            console.log("伺服器錯誤");
    }

  
}