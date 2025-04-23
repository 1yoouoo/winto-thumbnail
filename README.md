# 자동 YouTube 채널 배포 서비스

## 소개

본 서비스는 리그 오브 레전드(LoL) 게임 컨텐츠를 자동으로 녹화, 편집하여 YouTube 채널에 업로드하는 자동화 시스템입니다. 프로게이머의 경기나 챌린저 티어 플레이어들의 하이라이트를 수집하여 다양한 언어와 지역을 대상으로 한 채널들에 배포합니다.

## 시스템 아키텍처 및 처리 흐름

본 시스템은 여러 마이크로서비스로 구성되어 있으며, 다음과 같은 처리 흐름으로 동작합니다:

> [!NOTE]
> 해당 서비스는 이 흐름중 **6. 썸네일 자동 생성** 에 대한 서비스입니다.

1. **실시간 매치 감지**

   - Riot API 및 OP.GG 웹 크롤링을 통해 등록된 프로 게이머 및 챌린저 티어 플레이어의 실시간 매치 상태 모니터링

2. **경기 성과 분석**

   - 매치 데이터 분석을 통한 KDA, CS, 골드 획득량 등 주요 지표 자동 계산
   - 높은 시청가치가 있는 게임 자동 선별 (멀티킬, 특별한 플레이 등)

3. **자동 리플레이 녹화**

   - League of Legends 클라이언트 제어를 위한 Native API 연동
   - 게임 리플레이 자동 로드 및 지정된 영역/플레이어 중심 영상 녹화

4. **메타데이터 및 컨텐츠 생성**

   - 게임 데이터 크롤링을 통한 매치별 메타데이터 (챔피언, 룬, 아이템 빌드 등) 자동 추출
   - 다국어 대응 타이틀 및 설명 텍스트 자동 생성 (각 채널별 타겟 언어에 맞춤)

5. **YouTube 업로드 준비**

   - 영상 처리 완료 후 YouTube Data API와 연동하여 업로드 준비
   - OAuth 2.0 기반 채널별 인증 관리 및 토큰 갱신

6. **썸네일 자동 생성**

   - 게임 메타데이터와 성과 지표를 활용한 맞춤형 썸네일 디자인 자동 생성
   - React 기반 컴포넌트 렌더링 시스템으로 다양한 썸네일 템플릿 지원
   - 유튜브 중복 썸네일로 인한 노출 감소를 방지하기 위해 썸네일 생성 시 랜덤 패턴 적용

7. **썸네일 스크린샷 캡처**

   - Headless Chrome과 Puppeteer를 활용한 고품질 썸네일 스크린샷 자동 캡처
   - DigitalOcean Spaces Object Storage에 썸네일 저장

8. **YouTube 업로드**
   - YouTube Data API v3 연동을 통한 완전 자동화된 영상 및 썸네일 업로드

## 자동 배포된 채널 목록

아래는 본 서비스를 통해 자동으로 컨텐츠가 배포되는 YouTube 채널 목록입니다:

| 썸네일 | 채널명 |
| --- | --- |
| <img src="https://yt3.ggpht.com/zUvMxYQYLkI1HyZ439JxQuUn7Pr6-8oECm3PJfWzYsRxRuv1zCEh-HmUlbmEw_bxpWwdcYvrnA=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [LCK Pro Plays]("https://www.youtube.com/@LCK_Pro_Plays") |
| <img src="https://yt3.ggpht.com/ZXHiHckgzLfRKuogRaEDtsPXsXUmEE56qMf9gw2rads6piEMCOotmJfBNEiXZY7uJvti_fuYPw=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [롤프로의 일상]("https://www.youtube.com/@KR_league_of_legend") |
| <img src="https://yt3.ggpht.com/OyxIV97oTCT2S7sJfr-Bz7RQdTW1TeZiftFFNdIxcaXEjibb4ixRtrfy-tNlUc3v-uPf8N7-pg=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [LOL Pro Pulse]("https://www.youtube.com/@LOLProPulse") |
| <img src="https://yt3.ggpht.com/qnBcxBkib3KJqZoB0KazJF3Yne8nkUMdp1lb4j1_SJ83nXyLlRQBgDob6vfEUYVHmjbBNvWJ=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [LOL Soloq REC]("https://www.youtube.com/@LOL_Soloq_REC") |
| <img src="https://yt3.ggpht.com/1Mv59W3SSWWhXC7uZ7JiEhjjOQUF80Fd6UHha__tUZDz1PYQKLQOHCIN91VBQ51UcFgwAhtNNAM=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [LOL Spotlight]("https://www.youtube.com/@LOL_Spotlight-p6x") |
| <img src="https://yt3.ggpht.com/Eewmu47TQ7MPwQsB9YJktDNz8jBQQ_bWmmhxBCrYVW8jfv80HOXo5z2ECDbnpwDII18KysQT4rw=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [challengers story]("https://www.youtube.com/@challengersstory-r1p") |
| <img src="https://yt3.ggpht.com/RKKlKpv0iJvD1Pqm1tku2qWJBZVeXlKWt0u3AwBIWlOMBn6TSzvyRAO7UWy8HsxVCxnKVa7yAg=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [Pro League Highlights]("https://www.youtube.com/@Pro_League_Highlights") |
| <img src="https://yt3.ggpht.com/zRRzkwe2tkHYLGQRhZ2CHgX9KGMssuu-pl747XDLfWueKmIQVc8k3RVFCfEecg4ugy54bS0l=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [Summoner Showdown]("https://www.youtube.com/@summoner_show_down") |
| <img src="https://yt3.ggpht.com/b5f7YYjYPlrsRiLxxgxDEGvzLx8kJeL44kZNFt5ZyavsmTSxBoz2zEKrjxHyszbDfYFi5tAL=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [LMHT Hàn Quốc Pro]("https://www.youtube.com/@LMHT_H%C3%A0n_Qu%E1%BB%91c_Pro") |
| <img src="https://yt3.ggpht.com/hDzGYWHCSwhjyfalS7HnDykJ8czqrrixxFC8VdLtGS4pWptNzeb9GaHJfGdfh7E2o7p1AJDC=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [Ranked Legends]("https://www.youtube.com/@Ranked_Legends") |
| <img src="https://yt3.ggpht.com/J7CZNlk-2yv5Zu6OAVnWwqNpau2MuVHf0WKCJzPa3H948v1T4nieQJfx99_xiuN5bAqoeFYK6BM=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [LOL Pro Soloq]("https://www.youtube.com/@LOL_Pro_Soloq") |
| <img src="https://yt3.ggpht.com/Fl1RZ7y13U7yG5QZ7Z9vx9j3JE8wsrPSovHFZvjO7x00lKgFNqnxjB3_rHAvKlxRxb8unAq1qA=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [LCK 選手第一視角]("https://www.youtube.com/@LCK%E9%81%B8%E6%89%8B%E7%AC%AC%E4%B8%80%E8%A6%96%E8%A7%92") |
| <img src="https://yt3.ggpht.com/BOwq6aZjH_WduoE2NqsUdcHtm3oLi7qYRDIgY_mPm31gs_F0mxTeqq0-njv1zm6cIm6io5m_S6U=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [LOL Pro Vision]("https://www.youtube.com/@LOL_Pro_Vision") |
| <img src="https://yt3.ggpht.com/9ri2LX0EmVX-U-mZ5RJ0CKDryHT2oeytSy75yDd1X4cJGn95FKin56JA6GzIqKq4BYPGO3tCew=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [LPL Pros Records]("https://www.youtube.com/@LPL_Pros_Records") |
| <img src="https://yt3.ggpht.com/2bhVtS8mBEyvvfMezUIzToGWH2Txw1bTYLbFpv01TuX36WB5lILIPGAy7uSIddS1r42NJtPg2A=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [LEC Pro Replays]("https://www.youtube.com/@LEC_Pro_Replays") |
| <img src="https://yt3.ggpht.com/uE00Uq8z524zA2zTlyBvDGAhq2UmoiJFduZa0KE3pAzsX1-2YwqTK3oQqwrmIdu97rHXHPwOvg=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [Challenger Insights]("https://www.youtube.com/@Challenger_Insights") |
| <img src="https://yt3.ggpht.com/P2y4tetR8lXmGA7ZYV3lVIieioicbw2Cg8kER21pG0OA8Ljqwxqz4NyLh6sJRkPQJGIrpCuE7A=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [LoL Profi TV]("https://www.youtube.com/@LoLProfiTV") |
| <img src="https://yt3.ggpht.com/3xvrj_zsIvvqum1jAmtgd9GoRLZMS0sGGkQbq57n07bqMsTw6vwTd0GsIIescVzVIcC1_sHNaQ=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [Lol Pro Views]("https://www.youtube.com/@Lol_Pro_Views") |
| <img src="https://yt3.ggpht.com/h9dHi_ZSWZaNzdomVJopH8BbtaPHzDa14jIE4lZH5uJXGQqDK7sLPLqCDgZs4Sx5fYca5oOe=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [Pro League Plays]("https://www.youtube.com/@Pro_League_Plays-b6z") |
| <img src="https://yt3.ggpht.com/_eT6-ABBw2dZqszH4Pg_7NgMOWEuFJuxJG3xWwxg6I3_9ffdUe4S2dNe9C6OZcTSBJHnAKRJ=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [Pentakill]("https://www.youtube.com/@Pentakill_challengers") |
| <img src="https://yt3.ggpht.com/Mlf0haR5asOjgBk4zBu4bDcSUK0SFlKPujhCb1nGnT9lmHifeOzw0YhfUQvycS2TmuDc85S52cI=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [LoL Pro Plays]("https://www.youtube.com/@LoL_Pro_Plays") |
| <img src="https://yt3.ggpht.com/fmk7la-p9omH9NFgNh59lLb1tK8g6LKXvsruAVwhAhsqDY5BRkv19NEr9BIEXlDC2iqTad_E=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [Lol Replays]("https://www.youtube.com/@Lol_Replays_REC") |
| <img src="https://yt3.ggpht.com/Se_B6lKa6MARqE_Ed9gk0x-85VBdC4ZFr9twcMW7uHwjGEn5HpqHMZfAY8saEPjnhaxaL_Ct=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [Pro Player Spotlight]("https://www.youtube.com/@Pro_Player_Spotlight") |
| <img src="https://yt3.ggpht.com/JWBQ6pruocVmBc0-Ym2bw9fm9u5QQKQkcHF1W8OyYxQOI3nguTdOJNVF8gOXNBoxcXL3EValqg=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [Lol Pro Moments]("https://www.youtube.com/@Lol_Pro_Moments") |
| <img src="https://yt3.ggpht.com/YpreDmTq7BHGl7kgqhdBCCAkZPDUTIPWdXqHwDjmrIu4T73C1t0kOyZpZ_3rFzC7oY4CVdjUog=s108-c-k-c0x00ffffff-no-rj" width="80" /> | [LOL โปรรีเพลย์]("https://www.youtube.com/@WintoReplayTh") |
