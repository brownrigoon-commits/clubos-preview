# CLUB:OS Product Preview

이 저장소는 CLUB:OS **실제 제품 앱의 검토용 정적 산출물만** 공개한다.
제품 소스와 설계 문서는 별도 저장소 `brownrigoon-commits/clubos`에서 관리하며,
MU:IN TOKYO 투자·영업 제안 데모와도 섞지 않는다.

- 현재 검토 빌드: **V6**
- 제품 기준 커밋: `c0741ba` — STORY·콘텐츠 CMS·DJ MUSIC·BLACK/WHITE·반투명 고정 컨트롤
- 제품 소스: `brownrigoon-commits/clubos`
- 정적 빌드 기준: `PAGES_BASE=/clubos-preview`

## 공개 주소

- 손님 앱: https://brownrigoon-commits.github.io/clubos-preview/?v=6
- UI Lab: https://brownrigoon-commits.github.io/clubos-preview/dev/ui/?v=6
- 운영자 CMS 검수판: https://brownrigoon-commits.github.io/clubos-preview/operator/?v=6

GitHub Pages 캐시 때문에 검토 링크에는 항상 `?v=6`처럼 회차 번호를 붙인다.

## V6 범위

- 클럽·도시·DJ·이벤트 STORY와 정확한 24시간 만료 규칙
- STORY에서 예약·팔로우·이벤트·DJ MUSIC으로 이동
- DJ 공식 음악 재생, 곡 선택, 이전·다음, 연속 재생
- BLACK/WHITE 전체 화면 전환
- TOURIST의 뒤로가기·공유 컨트롤을 참고한 반투명 고정 CTA·미니 플레이어
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
