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


Qualtrics.SurveyEngine.addOnload(function()
{
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
	Qualtrics.SurveyEngine.setEmbeddedData('keyDownCount', tetris_game.keyDownCount);
	Qualtrics.SurveyEngine.setEmbeddedData('lineTotal', tetris_game.getLineTotal());
	Qualtrics.SurveyEngine.setEmbeddedData('startSecond', tetris_game.getStartSecond());
	Qualtrics.SurveyEngine.setEmbeddedData('distractedSeconds', tetris_game.getDistractedSeconds());
  });
});	

});

Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/
});

Qualtrics.SurveyEngine.addOnUnload(function()
{
});
