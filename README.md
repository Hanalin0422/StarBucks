HTML 클래스 속성의 작명법  
BEM (Block Element Modifier)  
요소__일부분 : underscore(Loadash) 기호로 요소의 일부분을 표시
요소--상태 : Hyphen(Dash) 기호로 요소의 상태를 표시  
ex 
&lt;div class="container"&gt;             &lt;div class="container"&gt;
    &lt;div class="name"&gt;         =>      &lt;div class="container__name"&gt;

&lt;div class="btn primary"&gt;      =>   &lt;div class="btn btn--primary&gt;

2024년 2월 7일  
오늘은 magic scroll, navigation, youtubeAPI, transform, 3D transition을 함.  
이제 푸터만 완성하면 끝


html의 특수 기호
https://www.w3schools.com/html/html_entities.asp

html의 entities들이 잘 나와 있음.  


따로 정리는 안했지만 시간이 되면 정리할 예정!!!


Netlify에 배포함 : [starbucks-site-hanalin.netlify.app](https://starbucks-site-hanalin.netlify.app/)

terminal 창에 code . -r을 쓰면 현재 장소에 원하는 폴더를 vscode에 열겠다는 의미임.

git reset --hard HEAD~1 : 버전의 내역에서 한 버전 되돌리겠다는 의미  
git reset --hard ORIG_HEAD : 잘못 되돌렸다면 다시 한단계 원상 복구하는 명령어  
현업에서는 reset을 되도록이면 안 쓰는 것이 좋음.  
git checkout -t origin/purple 원격에 있는 purple 브랜치를 가져오면서 내 로컬에 브랜치를 생성하고 거기로 이동하는 명령어  
git branch -d purple : 브랜치 삭제  
git checkout -b purple : purple이라는 브랜치를 생성하면서 그 브랜치로 이동  

