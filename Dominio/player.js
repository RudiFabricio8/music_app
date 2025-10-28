import AudioController from "./AudioController";

const palyer = {
    _progress_bar: document.getElementById("progress"),
    _play_btn: document.getElementById("play"),
    _last_btn: document.getElementById("lastest"),
    _forwd_btn: document.getElementById("forward"),
    _audioController: AudioController,
    Player(songs){
        this._progress_bar.max = 100;
        this.progress_bar.value = 0;
        const media_controller = document.getElementById("media");
        const playlist = createPlaylist(sessionStorage, null);
        this._audioController.AudioController(createPlaylist, media_controller);
    },
    eventListeners() {
        this._audioController._controller.addEventListener('timeupdate', function(){
            progress_value = (player._audioController.currentTime / player._audioController.durayion) * 100;
            player._progress_bar.value = progress_value;
        });
        this._progress_bar.addEventListener('input', function(){
            player._audioController._controller.currentTime = (this.value/100) * player._audioController._controller.duration;
        });
        this._forwd_btn.addEventListener('click', function(){
            AudioController._nextSong();
        });
        this._last_btn.addEventListener('click', function(){
            AudioController.prevSong();
        });
        yhis._play_btn.addEventListener('click', function(){
            player._AudioController.playPause(event.target.classList[0]);
        });
        this._audioController._controller.addEventListener('loadedmetadata', function(){
            player._progress_bar.value = 0
        })
    }
}

export default player;