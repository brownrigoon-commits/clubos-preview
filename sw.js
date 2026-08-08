/**
 * CLUB:OS 손님 앱 서비스워커 — **알림 전용**이다.
 *
 * ⚠️ 캐시(fetch 가로채기)를 절대 넣지 마라.
 *    검토는 ?v= 링크로 최신판을 확인하는 방식인데, 서비스워커가 캐싱을 시작하면
 *    형님 폰에 옛 화면이 눌어붙어 "고쳤는데 그대로"가 된다. fetch 핸들러가 없어도
 *    푸시·알림은 전부 동작한다.
 *
 * 이 파일이 있어야 아이폰에서 진동을 얻을 수 있다:
 *  - 앱 화면 안에서의 navigator.vibrate 는 iOS 가 지원하지 않는다.
 *  - 그러나 **시스템 알림**은 iOS 가 직접 울리고 진동시킨다.
 *  - 단, iOS 는 **홈 화면에 추가한 PWA** 에서만 웹 알림을 허용한다(16.4+).
 */

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

/** 서버 푸시 — 다음 단계에서 발송측이 붙는다. 지금은 받을 준비만 되어 있다 */
self.addEventListener('push', (event) => {
  let data = { title: 'MU:IN', body: '', tag: 'ember', url: './ember/' };
  try {
    if (event.data) data = { ...data, ...event.data.json() };
  } catch {
    if (event.data) data.body = event.data.text();
  }
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      tag: data.tag,
      renotify: true,
      // iOS 는 이 값을 무시하고 시스템 설정대로 울린다 — 그래도 안드로이드용으로 남긴다
      vibrate: [80, 60, 80, 60, 140],
      data: { url: data.url },
    }),
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || './';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if ('focus' in c) return c.focus();
      }
      return self.clients.openWindow(url);
    }),
  );
});
