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
git rm -r --cached . : rm은 remove, -r은 재귀(recursive) 여서 반복적으로 폴더 안에 파일이나 폴더 또 들어가서 폴더 혹은 또 들어가서 파일이나 폴더를 계속해서 삭제할 수 있다는 것. 그래서 이미 git을 통해서 버전 관리하고 있는 내용들을 제거하려면 그 경로는 마침표. 이렇게 쓰면 현재 프로젝트의 루트 경로에 있는 해당 파일들을 찾아서 내용을 진행하겠다라는 의미.   
따라서 이렇게 gitignore라는 파일을 뒤늦게 등록 했을 때 이 명령어를 이용해 캐시 데이터를 지워주고 다시 등록하면 제대로 올리고 싶지 않은 파일들을 올리지 않을 수 있음.