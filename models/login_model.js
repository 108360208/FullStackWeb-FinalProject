const db = require('./connection_db');
const encryption = require('./encryption');
module.exports = function memberLogin(memberData) {
    let result = {};
    return new Promise((resolve, reject) => {
        // 找尋
        const password = encryption(memberData.password);
        db.all('SELECT * FROM member WHERE email = ? AND password = ?', [memberData.email,password], function (err, rows) {
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