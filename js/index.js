const API_KEY='AIzaSyCEKC2ZVazihiabH9F1yfibb_pvqPyXWbY';
const CLIENT_ID='241602484341-a3qgq5tkqcvjlssamn70rqikmqfukpck.apps.googleusercontent.com';
const gloAcademyList=document.querySelector('.glo-academy-list'),
      trendingList=document.querySelector('.trending-list'),
      musicList=document.querySelector('.music-list');
const createCard=(dataVideo)=>{
    console.log(dataVideo);
    const imgUrl=dataVideo.snippet.thumbnails.high.url;
    const videoId=dataVideo.id.videoId;
    const titleVideo=dataVideo.snippet.title;
    const dateVideo=dataVideo.snippet.publishedAt;
    const channelTitle=dataVideo.snippet.channelTitle;
    const card=document.createElement('div');
    card.classList.add('video-card');
    card.innerHTML=`
            <div class="video-thumb">
              <a class="link-video youtube-modal" href="https://youtu.be/${videoId}">
                <img src="${imgUrl}" alt="" class="thumbnail">
              </a>
            </div>
            <h3 class="video-title">${titleVideo}</h3>
            <div class="video-info">
              <span class="video-counter">
                <span class="video-date">${dateVideo}</span>
              </span>
              <span class="video-channel">${channelTitle}</span>
            </div>

    `;
    return card;
};

const createList=(wrapper, listVideo)=>{
    wrapper.textContent=''; 
    listVideo.forEach(item=>{
    const card=createCard(item);
    wrapper.append(card)
});   
};

createList(gloAcademyList, gloAcademy);
createList(trendingList, trending);
createList(musicList, music);