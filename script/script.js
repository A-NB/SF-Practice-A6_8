let barProgress = 0;

$('.one-percent-btn').click(() => {
  progressChange(1);
});

$('.three-percent-btn').click(() => {
  progressChange(3);
});

$('.seven-percent-btn').click(() => {
  progressChange(7);
});

function progressChange(percent) {
  barProgress += percent;
  $('.progress-bar').attr("style", `width: ${barProgress}%`);
};
