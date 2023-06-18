<a name="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][forks-shield]][forks-url]
[![stars][stars-shield]][stars-url]
[![forks][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/kit-teamcook-2023">
    <img src="https://github.com/kit-teamcook-2023/teamcook-front/assets/63646062/0aceb80e-5cfb-4ed2-bd77-053c2798aa06" alt="Logo" width="500" height="100">
  </a>

<h3 align="center">Gpple 가스비 측정 & 커뮤니티 앱 프론트엔드</h3>

  <p align="center">
    Gpple 백엔드 코드 보러가기
    <br />
    <a href="https://github.com/kit-teamcook-2023/teamcook-backend"><strong>Explore the backend »</strong></a>
    <br />
    <br />
    <a href="http://15.165.65.93">View Demo</a>
    ·
    <a href="https://github.com/kit-teamcook-2023/teamcook-front/issues">Report Bug</a>
    ·
    <a href="https://github.com/kit-teamcook-2023/teamcook-front/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#프로젝트-소개">프로젝트 소개</a>
      <ul>
        <li><a href="#기술-스택">기술 스택</a></li>
      </ul>
    </li>
    <li>
      <a href="#시작하기">시작하기</a>
      <ul>
        <li><a href="#시스템-요구사항">시스템 요구사항</a></li>
        <li><a href="#설치">설치</a></li>
      </ul>
    </li>
    <li><a href="#로드맵">로드맵</a></li>
    <li><a href="#오픈소스-기여">오픈소스 기여</a></li>
    <li><a href="#라이센스">라이센스</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## 프로젝트 소개


<div align="center">
  <h3>작은 지출의 쌓임이 큰 저축을 이룬다</h3>
</div>
   

Gpple은 가스비 측정 및 자취 정보를 통해 자취생 및 1인가구를 도와주고 가스비 확인 기능 및 생활에 도움 되는 커뮤니티 기능을 가진 웹 애플리케이션입니다.   
   
커뮤니티 회원들끼리 중고거래, 공동구매, 물품 리뷰, 정부 정책, 생활 꿀팁 등 다양한 커뮤니티 기능을
이용할 수 있으며 실시간 채팅 기능을 통해 더 빠른 소통을 할 수 있습니다.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### 기술 스택

[![JavaScrupt][JavaScript.com]][JavaScript-url]
[![React][React.js]][React-url]
[![Bootstrap][Bootstrap.com]][Bootstrap-url]
[![JQuery][JQuery.com]][JQuery-url]
[![StyledComponent][StyledComponent.com]][StyledComponent-url]
[![Mui][Mui.com]][Mui-url]
[![AmazonS3][AmazonS3.com]][AmazonS3-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## 시작하기

### 시스템 요구사항
* Node 18.1.0
* Npm 8.8.0   
<br>

### 설치

1. Clone this repository   


```sh
git clone https://github.com/kit-teamcook-2023/teamcook-front.git
```


2. Install NPM packages   


```sh
npm install
```


3. Write your API in `.env`
    
```sh
REACT_APP_REST_API_KEY="your kakao login api"

REACT_APP_S3_ACCESS_KEY_ID="your s3 key id"
REACT_APP_S3_ACCESS_KEY_SECRET="your s3 secret key"
REACT_APP_S3_REGION="your region"
REACT_APP_S3_BUCKET="your bucket"

REACT_APP_LOCAL="http://localhost:3000"
REACT_APP_RELEASE=http:"your release server url"
```

4. Start this App
```shell
npm start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- ROADMAP -->
## 로드맵

- [x] 실시간 가스비 표시 기능
- [x] 지역별 가스비 표시 기능
- [x] 로그인   
    - [x] 카카오 로그인 
    - [ ] 구글 로그인 
    - [ ] 네이버 로그인 
- [x] 커뮤니티 기능
- [x] 댓글 기능
- [x] 채팅 기능
- [x] 외부 광고 삽입
- [x] 글 수정/삭제 기능
- [x] 글 이미지 첨부 기능
- [x] 다크모드
- [x] 마이페이지
    - [x] 내가 쓴 글 / 댓글 목록
    - [ ] 프로필 이미지 변경
- [ ] 다국적 언어 지원
    - [x] Korean
    - [ ] Chinese
    - [ ] Spanish


<br>
<br>

[open issues](https://github.com/kit-teamcook-2023/teamcook-front/issues)에서 모든 이슈 및 특이사항을 볼 수 있습니다.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## 오픈소스 기여

오픈소스 기여는 오픈 소스 커뮤니티를 배우고, 영감을 주고, 창조하는 놀라운 장소로 만드는 것입니다. 당신의 기여에 **대단히 감사드립니다**.

이 프로젝트를 개선할 수 있는 제안이 있으면 **repository**를 **fork**하여 **pull request**를 생성해주세요. **enhancement** 태그를 사용하여 **issue**를 열 수도 있습니다.
프로젝트에 **star**를 달아주는 것을 잊지 마세요! **다시 한번 감사드립니다!**

1. 프로젝트 fork 하기
2. Featrue Branch 생성하기 (`git checkout -b feature/your_name`)
3. Commit 하기 (`git commit -m 'Add some message'`)
4. Push 하기 (`git push origin feature/your_name`)
5. Pull Request 생성하기

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## 라이센스

MIT License로 배포 되었습니다. `LICENSE.txt`에 더 많은 내용이 있습니다.

<p align="right">(<a href="#readme-top">back to top</a>)</p>







<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/kit-teamcook-2023/teamcook-front.svg?style=for-the-badge
[contributors-url]: https://github.com/kit-teamcook-2023/teamcook-front/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/kit-teamcook-2023/teamcook-front.svg?style=for-the-badge
[issues-url]: https://github.com/kit-teamcook-2023/teamcook-front/issues
[forks-shield]: https://img.shields.io/github/forks/kit-teamcook-2023/teamcook-front.svg?style=for-the-badge
[forks-url]: https://github.com/kit-teamcook-2023/teamcook-front/issues
[stars-shield]: https://img.shields.io/github/stars/kit-teamcook-2023/teamcook-front.svg?style=for-the-badge
[stars-url]: https://github.com/kit-teamcook-2023/teamcook-front/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[JavaScript.com]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[javaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[AmazonS3.com]: https://img.shields.io/badge/AmazonS3-569A31?style=for-the-badge&logo=AmazonS3&logoColor=black
[AmazonS3-url]: https://aws.amazon.com/ko/s3/
[StyledComponent.com]: https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white
[StyledComponent-url]: https://styled-components.com/
[Mui.com]: https://img.shields.io/badge/Mui-007FFF?style=for-the-badge&logo=Mui&logoColor=black
[Mui-url]: https://mui.com/

