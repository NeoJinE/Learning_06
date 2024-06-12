/**
 *checkForm.js => 폼 유효성 확인.
 *v1: 2024.06.05  
 */
//script 연결이 body태그 이전에 연결이 되므로, 태그 준비 완료된 상태에서 코드 진행.

window.onload = function(){ //onload이벤트 핸들러에 익명함수를 저장. => 이러한 함수를 이벤트 핸들러라 한다.
	//id가 joinForm인 폼에 submit버튼이 눌러졌을때 수행되는 함수를 생성.
	//submit버튼은 onsubmit의 이벤트를 발생. => 이벤트에 대한 처리를 진행하지 않을시, 자동으로 서버에 데이터를 넘긴다(서버에 호출한다.)
	//서버에 호출 전에 유효성 검사가 진행되도록, onsubmit 이벤트 처리를 한다.
	//핸들러들은 끝부분을 주석으로 확실히 표기해주는것이 좋다.
	
	document.getElementById('joinForm').onsubmit = function(){
		//1.성명을 입력하지 않을시 경고창 출력.
		var name = document.getElementById('name');
		if(name.value ==""){ //성명을 입력하지 않으면,
			alert('성명을 입력하세요.');
			name.focus(); //성명 입력창에 focus를 둔다.
			return false  //서버로 전송될 submit을 제한한다.(다음페이지 호출되지 않게)
		}
		
		//2.ID입력하지 않으면, 경고창 출력.
		var name = document.getElementById('id');
		if(id.value ==""){//id입력값의 유무를 따짐.
			alert('ID를 입력하세요.');
			id.focus();
			return false; //return false가 없으면, submit이 요청이되서, 서버에 페이지를 요청하게 된다.**유효성검사에서 자주 사용되는 태그문 숙지.	
		}		
		//2-1.ID의 값이 있다면, 값의 길이가 6자~10자인지 확인.
		if(id.value.length < 6 || id.value.length > 10){
			alert('아이디는 6~10자로 입력하세요.');
			id.value="";//입력된 값을 삭제
			id.focus();//입력란에 포커스
			return false;//다음 페이지 이동하지 않게.
		}
		
		//3.Password 유효성검사.
		var password = document.getElementById('password'); //비밀번호 태그객체.
		var passwordCheck = document.getElementById('passwordCheck'); //비밀번호 확인 태그 객체.
		
		if(password.value != passwordCheck.value){
			alert('비밀번호 확인이 일치하지 않습니다.');
			passwordCheck.value="";//입력된 값을 삭제
			passwordCheck.focus();//입력란에 포커
			return false;//다음 페이지 이동하지 않게.
		}
		
		//4.직업을 선택하지 않은 경우 => select태그의 유효성 검사.
		var job = document.getElementById('job');
		//4-1. select태그의 속성 selectedIndex: 현재 선택되어 있는 option태그의 idx번호를 갖고 있는 속성.
		if(job.selectedIndex == 0){//직업선택의 idx번호는 0, value값이 없어, 서버에 전송될 정보가 없다.
			alert('직업을 선택하세요.');
			return false;
			
		}
		/*//4-1-1.다른방법: 0번 idx의 value 속성에는 "" 빈 값이 설정되어 있으므로 => 4-1방법과 동일하다.
		if(job.value == ""){
			alert('직업을 선택하세요.');
			return false;
		}*/
	
		//5.이메일 수신여부 라디오 버튼을 선택하지 않은경우.(radio버튼은 그룹을 위해 name속성을 사용한다.)
		//동일 그룹에 속해야 하는 radio 버튼의 name속성값은 동일해야 한다.
		//그룹 내에 동일한 이름의 radio 객체가 있으므로, radio 객체는 배열로 처리를 해줘야 한다.
		//보통은 태그 작성시, checked속성을 이용해서, 한개는 check가 되어있도록, 설정한다.=>이 경우에는 유효성검사가 필요없다.
		var chk =false; //false로 초기화, radio버튼이 하나라도 체크되어 있는 버튼이 있으면, chk 변수값을 true로 설정되게 코딩.
		for(var i=0; i<joinForm.emailRcv.length; i++){//radio버튼 객체의 배열이 참조되므로, radio버튼의 갯수를 확인할 수 있다.
			if(joinForm.emailRcv[i].checked == true)
				chk = true; //radio버튼이 하나라도 체크가 되어 있으면, true를 저장한다.
			}//반복 종료 후 chk 변수를 확인.
			if(chk == false){
				alert('이메일 수신 여부를 선택하세요.');
				return false;
			}
				
		//6. checkbox를 하나도 선택하지 않았는지의 여부 => checkbox의 checked속성 이용해서 확인.
		var agreement1 = document.getElementById('agreement1');
		var agreement2 = document.getElementById('agreement2');
		if(agreement1.checked == false && agreement2.checked ==false){
			alert('모두 동의해야 합니다.');
			return false;
		}
//유효성검사 if문에 해당되는 내용이 하나도 없으면 마지막에 자동 submit이 발생 됩니다.
	};//onsubmit의 끝.
};//window.onload의 끝.

//서버측 스크립트를 구성하지 않았으므로, submit 발생 후 에러(404발생);

