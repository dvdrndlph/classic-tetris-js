window.addEventListener('load', event => {
  const vidPlayer = videojs('my-player');
  const tetris_canvas = document.getElementById('tetris-canvas');
  const tetris_game = new ClassicTetris(tetris_canvas);
  document.getElementById('start-stop-btn').addEventListener('click', event => {
    const startLevel = document.getElementById('level-input').value;
    tetris_game.setStartLevel(startLevel);
    tetris_game.togglePlayPause();
  });
  document.getElementById('quit-btn').addEventListener('click', event => {
    tetris_game.quit();
  });
  vidPlayer.on('ended', function() {
    tetris_game.experimentOver();
  });
});