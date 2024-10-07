// form 이 submit 되면
// submit 중지,
// id / email / password 유효성 검증 후 형식에 맞지 않는다면 error 메세지 추가

// form 작업 시,
// 1. button type 확인 => submit(=form submit) / button(=click)
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  // 유효성 검사할 요소 찾기
  const name = document.querySelector("#name");
  const id = document.querySelector("#inputId");
  const email = document.querySelector("#staticEmail");
  const password = document.querySelector("#inputPassword");

  // 정규식 패턴 정의
  const regName = /^[가-힣]{2,5}$/;
  const regId = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#])[A-Za-z0-9!@#]{6,12}$/;
  const regPwd =
    /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#_*])[A-Za-z0-9!@#_*]{8,12}$/;
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //TODO: closest(선택자) : 선택자와 일치한 부모요소 중 가장 가까운 부모요소 찾기
  console.log(id.closest("div"));

  // 정규식 패턴과 일치하는지 조건문으로 확인

  // name 부분
  if (!regName.test(name.value)) {
    name.closest("div").lastElementChild.innerHTML = "이름을 확인해 주세요.";
    return;
  } else {
    name.closest("div").lastElementChild.innerHTML = "";
  }
  // id 부분
  if (!regId.test(id.value)) {
    // // regId 다음의 다음 span 찾기
    // 방법1) regId.nextElementSibling.nextElementSibling.innerHTML

    // //TODO: closest(선택자) : 선택자와 일치한 부모요소 중 가장 가까운 부모요소 찾기
    id.closest("div").lastElementChild.innerHTML = "아이디를 확인해 주세요.";
    return;
  } else {
    id.closest("div").lastElementChild.innerHTML = "";
  }

  // email 부분
  if (!regEmail.test(email.value)) {
    email.closest("div").lastElementChild.innerHTML = "이메일을 확인해 주세요.";
    return;
  } else {
    email.closest("div").lastElementChild.innerHTML = "";
  }

  // password 부분
  if (!regPwd.test(password.value)) {
    password.closest("div").lastElementChild.innerHTML =
      "비밀번호를 확인해 주세요.";
    return;
  } else {
    password.closest("div").lastElementChild.innerHTML = "";
  }
  // 유효성 검사 통과 후 원래 하려던 작업 하기 => submit
  e.target.submit();
});
