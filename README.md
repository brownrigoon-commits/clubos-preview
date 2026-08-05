# CLUB:OS Product Preview

이 저장소는 CLUB:OS **실제 제품 앱의 검토용 정적 산출물만** 공개한다.
제품 소스와 설계 문서는 별도 저장소 `brownrigoon-commits/clubos`에서 관리하며,
MU:IN TOKYO 투자·영업 제안 데모와도 섞지 않는다.

- 현재 통합 검토 빌드: **V11**
- 고객 기준: V10 — 기존 TONIGHT·ARTISTS·STORY·DJ MUSIC에 QR 입장과 고객용 IN-CLUB 01~08 통합
- Operator 기준: V11 — 별도 정적 artifact에 STAFF·CLUB MANAGER, BLACK/WHITE, 다국어 통합
- 제품 소스: `brownrigoon-commits/clubos`
- 정적 빌드 기준: `PAGES_BASE=/clubos-preview`

## 공개 주소

- 손님 앱: https://brownrigoon-commits.github.io/clubos-preview/?v=11
- QR 입장: https://brownrigoon-commits.github.io/clubos-preview/check-in/?v=11
- UI Lab: https://brownrigoon-commits.github.io/clubos-preview/dev/ui/?v=11
- 운영자 CMS 검수판: https://brownrigoon-commits.github.io/clubos-preview/operator/?v=11
- 클럽 운영 진입: https://brownrigoon-commits.github.io/clubos-preview/operator/operations/?v=11
- STAFF: https://brownrigoon-commits.github.io/clubos-preview/operator/operations/staff/?v=11
- CLUB MANAGER: https://brownrigoon-commits.github.io/clubos-preview/operator/operations/manager/?v=11
- 이전 06 MICRO SAND 격리 검토본: https://brownrigoon-commits.github.io/clubos-preview/portal-06/check-in/?v=9-da5aa16

`portal-06/`은 선택 장면의 이전 상태를 비교하기 위한 격리 자산으로 보존한다. 현재 손님 경험은 루트 V10을
그대로 유지하며 화면 배지는 통합 검토 회차 V11이다. PLATFORM HQ는 공개 artifact에 포함하지 않는다.

GitHub Pages 캐시 때문에 검토 링크에는 항상 `?v=11`처럼 회차 번호를 붙인다.

## V11 Operator 범위

- STAFF: 주문 큐, SOS, 일정, 근무·교대, POS/결제·픽업 신호
- CLUB MANAGER: 플로어·SLA·직원·VVIP·매출과 결제·POS·MD·정산·계약 7탭
- 두 역할은 같은 `reviewOperationsRepository`를 사용하고 BLACK/WHITE와 EN·KO·JA·中文 설정을 공유
- 공개 화면에는 fixture `REVIEW DATA`만 있으며 실제 결제·환불·POS·정산 성공을 만들지 않음
- PLATFORM HQ는 고객/클럽 앱과 이 공개 정적 산출물에 route·링크·메뉴가 없음

Guest와 Operator의 실제 서버 실시간 동기화, PSP/POS, 정산과 HQ 보안 경계는 외부 연동 대기다. 같은 공개
저장소에 함께 배치됐다는 사실을 프로덕션 데이터 연결로 해석하지 않는다.

## V10 범위

- 메인 TONIGHT의 `IN CLUB ACCESS` 카드에서 `/check-in`으로 직접 연결
- QR 승인 → 06 MICRO SAND DUST IN → 게임형 PULSE·MATCH 세계 진입
- MATCH 발견·상호 연결·채팅·공개 만남 장소·블라인드 평가·NIGHT CREDIT
- ORDER 옵션·장바구니·결제 검토·테이블 배달/바 픽업 상태
- SERVICE 일반 호출·SOS·SLA·완료/재요청
- ME · NIGHT ID · MANNER · 활동 기록
- 클럽별 다층·다구역 고객 동선 지도
- FULL/LITE/STATIC 기기 성능 안전 모드와 DUST OUT 일반 앱 자동 복귀

- 클럽·도시·DJ·이벤트 STORY와 정확한 24시간 만료 규칙
- STORY에서 예약·팔로우·이벤트·DJ MUSIC으로 이동
- DJ 공식 음악 재생, 곡 선택, 이전·다음, 연속 재생
- BLACK/WHITE 전체 화면 전환
- TOURIST 원본 재질을 옮긴 렌즈형 고정 CTA·미니 플레이어: 블러 12px·프로스트 색막 14%·1.2px 인셋 유리테
- 스크롤 끝에서도 예약·플레이어 아래의 본문을 전부 확인하는 동적 안전 여백
- PC 마우스·트랙패드 전용 20×20 짧은 포인터와 클릭 눌림·복원 동작
- Bangkok cyan · Bali amber · Kuala Lumpur emerald · Tokyo signal red 광원
- 터치·펜 환경에서는 커스텀 커서를 렌더링하지 않음
- PC와 휴대폰에서 쓰는 운영자 콘텐츠 CMS
- STORY·EVENTS·LINE-UP·ARTISTS·DJ MUSIC의 초안·예약·발행·보관
- OWNER·MANAGER·PROMOTER 권한, 미리보기, 변경 이력

## 운영자 검수판 주의

`/operator/`는 실제 운영 콘솔과 같은 `OperatorShell` 및 콘텐츠 편집기를 정적으로 검수하기 위한 화면이다.
브라우저 저장소를 사용하므로 편집 결과는 같은 브라우저의 손님 앱에 즉시 반영되지만,
아직 Supabase 운영 데이터나 실제 관리자 계정과 연결된 서비스 화면은 아니다.

## 배포 규칙

- 화면 수정 회차는 `V1`, `V2`, … 순서로 올린다.
- 제품의 `REVIEW_VERSION`, 이 문서의 버전, 공유 URL의 `?v=`를 함께 변경한다.
- 제품 소스·비밀키·서비스 자격증명은 이 공개 저장소에 넣지 않는다.
- MU:IN 제안 데모는 https://brownrigoon-commits.github.io/muin-tokyo-demo/ 에 별도 보존한다.
