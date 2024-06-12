window.onload = function () {
  document.getElementById("joinForm").onsubmit = function () {
    //1.성명을 입력하지 않을시 경고창 출력.
    var name = document.getElementById("name");
    if (name.value == "") {
      alert("성명을 입력하세요.");
      name.focus();
      return false;
    }

    //2.ID입력하지 않으면, 경고창 출력.
    var name = document.getElementById("id");
    if (id.value == "") {
      alert("ID를 입력하세요.");
      id.focus();
      return false;
    }
    //2-1.ID의 값이 있다면, 값의 길이가 6자~10자인지 확인.
    if (id.value.length < 6 || id.value.length > 10) {
      alert("아이디는 6~10자로 입력하세요.");
      id.value = ""; //
      id.focus(); //
      return false; //
    }

    //3.Password 유효성검사.
    var password = document.getElementById("password");
    var passwordCheck = document.getElementById("passwordCheck");

    if (password.value != passwordCheck.value) {
      alert("비밀번호 확인이 일치하지 않습니다.");
      passwordCheck.value = "";
      passwordCheck.focus();
      return false;
    }

    //4.직업을 선택하지 않은 경우 => select태그의 유효성 검사.
    var job = document.getElementById("job");
    //4-1. select태그의 속성 selectedIndex: 현재 선택되어 있는 option태그의 idx번호를 갖고 있는 속성.
    if (job.selectedIndex == 0) {
      alert("직업을 선택하세요.");
      return false;
    }
    /*//4-1-1.다른방법: 0번 idx의 value 속성에는 "" 빈 값이 설정되어 있으므로 => 4-1방법과 동일하다.
		if(job.value == ""){
			alert('직업을 선택하세요.');
			return false;
		}*/

    //5.이메일 수신여부 라디오 버튼을 선택하지 않은경우.(radio버튼은 그룹을 위해 name속성을 사용한다.)
    var chk = false;
    for (var i = 0; i < joinForm.emailRcv.length; i++) {
      if (joinForm.emailRcv[i].checked == true){
        chk = true;
      }
    }
    if (chk == false) {
      alert("이메일 수신 여부를 선택하세요.");
      return false;
    }

    //6. checkbox를 하나도 선택하지 않았는지의 여부 => checkbox의 checked속성 이용해서 확인.
    var agreement1 = document.getElementById("agreement1");
    var agreement2 = document.getElementById("agreement2");
    if (agreement1.checked == false && agreement2.checked == false) {
      alert("모두 동의해야 합니다.");
      return false;
    }
  }; //onsubmit의 끝.
}; //window.onload의 끝.
