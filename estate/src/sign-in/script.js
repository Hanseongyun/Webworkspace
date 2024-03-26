const ID = 'useridentity'
const PASSWORD = 'password1'

function onSignInButtonClickHandler(event) {
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;

    const signInMessageElement = document.getElementById('sing-in-message');
    if (id === ID && password === PASSWORD) {
        alert('로그인 성공!');
        signInMessageElement.textContent = '';
    } else {
        signInMessageElement.textContent = '로그인 정보가 일치하지 않습니다.';
    }
}

function onSignUpLinkClickHandler(event) {
    window.location.href = 'https://google.com'
}
const signUpLinkElement = document.getElementById('sign-up-link');
signUpLinkElement.addEventListener('click', onSignUpLinkClickHandler);


function onKakaoLinkClickHandler(event) {
    window.location.href = 'https://developers.kakao.com'
}
const KakaoButtonElement = document.getElementById('kakao-link');
KakaoButtonElement.addEventListener('click', onKakaoLinkClickHandler);

function onNaverLinkClickHandler(event) {
    window.location.href = 'https://developers.naver.com'
}
const NaverButtonElement = document.getElementById('naver-link');
NaverButtonElement.addEventListener('click', onNaverLinkClickHandler);


