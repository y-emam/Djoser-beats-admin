function getToken() {
  const cookies = document.cookie.split("=");
  return cookies[cookies.length - 1];
}

function addSong() {
  const form = document.getElementsByTagName("form")[0];
  const name = form.name.value;
  const bpm = form.bpm.value;
  const key = form.key.value;
  const duration = form.duration.value;
  const image = form.image.value;
  const mp3Edit = form.mp3Edit.value;
  const mp3Org = form.mp3Org.value;
  const wav = form.wav.value;
  const stem = form.stem.value;
  const parentFolder = form.parentFolder.value;

  const token = getToken();

  // Show loading
  const button = document.getElementById("addSongButton");
  button.value = "Loading...";
  button.disabled = true;

  fetch("https://djoser-beats.ew.r.appspot.com/addNewSong", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify({
      name,
      bpm,
      key,
      duration,
      image,
      mp3Edit,
      mp3Org,
      wav,
      stem,
      parentFolder,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      alert(res.message);
    })
    .catch((e) => alert(`Error: ${e}`));

  // return the button to be working again
  button.value = "Add Song";
  button.disabled = false;
}
