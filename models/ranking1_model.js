const db = require('./connection_db');
module.exports = function rankingdisplay() {
    let result = {};
    return new Promise((resolve, reject) => {
        // 找尋
       
        db.all('SELECT * FROM Ranking2 ORDER BY  scores DESC', function (err, rows) {
            if (err) {
                result.status = "登入失敗。"
                result.err = "伺服器錯誤，請稍後在試！"
                reject(result);
                console.log(err);
                return;
            }
            resolve(rows);
        });
    });
}