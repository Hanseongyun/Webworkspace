function onKakaoLinkClickHandler(event) {
    window.location.href = 'https://developers.kakao.com'
}
const KakaoButtonElement = document.getElementById('kakao-button');
KakaoButtonElement.addEventListener('click', onKakaoLinkClickHandler);

function onNaverLinkClickHandler(event) {
    window.location.href = 'https://developers.naver.com'
}
const NaverButtonElement = document.getElementById('naver-button');
NaverButtonElement.addEventListener('click', onNaverLinkClickHandler);