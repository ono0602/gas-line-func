/**
 * LINE通知
 */

function postMessage(body) {
  // 求めている機能次第でURL変更（LINE公式Doc参照）
  const url = 'https://api.line.me/v2/bot/message/push';
  const token = '#'; //チャネルアクセストークン

  const payload = {
    to: '#',　//ユーザーID
    messages: [
      { type: 'text', text: body }
    ]
  };

  const params = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: 'Bearer ' + token
    },
    payload: JSON.stringify(payload)
  };
  UrlFetchApp.fetch(url, params);
}