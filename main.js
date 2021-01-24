(function(window, document) {
  // 모듈화(범위 설정)
  'use strict';

  //선택자로 찾으므로 . 붙여야함
  //$toggles는 NodeList라는 유사배열 == 배열X
  const $toggles = document.querySelectorAll('.toggle');
  //ID로 찾기 때문에 #을 붙이지 않음
  const $toggleBtn = document.getElementById('toggle-btn');

  $toggleBtn.addEventListener('click', function(){
    toggleElements();
  });

  window.addEventListener('resize', function(){
    if(window.innerWidth > 1024){
      offElements();
    }
  });

  function toggleElements() {
    [].forEach.call($toggles, function(toggle){
      toggle.classList.toggle('on');
    });
  }

  function offElements(){
    [].forEach.call($toggles, function(toggle){
      toggle.classList.remove('on');
    });
  }
  
})(window, document)