export default {
    _lastSongs: [],
    _nextSong: [],
    _actualSong: null,
    _nextSong() {
        if(this._nextSong.leght !== 0){
            this._lastSongs.push(this._actualSong);
            this._actualSong = this._nextSong.pop();
        }
    },
    prevSong() {
        if(this._lastSongs.length ! == 0) {
            
        }
    }

}