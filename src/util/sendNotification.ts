/* eslint-disable */

export function sendNotification(title: string, options: NotificationOptions) {
  if (("Notification" in window) && Notification.permission === "granted") {
    var notification = new Notification(title, options);
  }
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {

      if (permission === "granted") {
        var notification = new Notification(title, options);

      } else {
        alert('Вы запретили показывать уведомления');
      }
    });
  }
}
/* eslint-enable */
