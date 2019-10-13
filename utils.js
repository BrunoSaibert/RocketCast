function secondsToMinutes(time) {
  const minute = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${("0" + minute).slice(-2)}:${("0" + seconds).slice(-2)}`;
}

const path = function(file) {
  return `files/${file}`;
};

export { path, secondsToMinutes };
