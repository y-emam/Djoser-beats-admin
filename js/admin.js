function addSong() {
  const form = document.getElementsByTagName("form")[0];
  const name = form.name.value;
  const bpm = form.bpm.value;
  const key = form.key.value;
  const image = form.image.value;
  const mp3Edit = form.mp3Edit.value;
  const mp3Org = form.mp3Org.value;
  const wav = form.wav.value;
  const stem = form.stem.value;
  const parentFolder = form.parentFolder.value;

  const cookies = document.cookie.split("=");
  const token = cookies[cookies.length - 1];

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
    });
  // .catch((e) => alert(`Error: ${e}`));
}
