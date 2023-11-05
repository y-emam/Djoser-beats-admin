function addSong() {
  const form = document.getElementsByTagName("form")[0];
  const name = form.name.value;
  const bpm = form.bpm.value;
  const image = form.image.value;
  const mp3 = form.mp3.value;
  const wav = form.wav.value;
  const stem = form.stem.value;
  const licence = form.stem.licence;

  const cookies = document.cookie.split("=");
  const token = cookies[cookies.length - 1];

  console.log(token);

  fetch("http://localhost:5000/addNewSong", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify({
      name,
      bpm,
      image,
      mp3,
      wav,
      stem,
      licence,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      alert(res.message);
    });
  // .catch((e) => alert(`Error: ${e}`));
}
