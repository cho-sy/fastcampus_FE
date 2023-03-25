 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() {
  // div 태그에 달린 player를 쓰게될 것 
   new YT.Player('player', {
     videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
     playerVars: {
      autoplay: true,
      loop: true, // 반복재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 영상 ID
     },
     events: {
      onReady: function(event){
        event.target.mute() // 음소거
      }
     }
     
   });
 }