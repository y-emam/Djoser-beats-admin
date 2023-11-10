const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

async function addSong() {
  // Get the token from the cookies
  const cookies = document.cookie.split("=");
  const token = cookies[cookies.length - 1];

  // // upload image and mp3 edited
  // const imageInput = document.getElementById("imageInput");
  // const mp3EditInput = document.getElementById("mp3EditInput");

  // const imageFormData = new FormData();
  // const mp3FormData = new FormData();

  // console.log(imageInput.files[0]);

  // imageFormData.append("image", imageInput.files[0]);
  // mp3FormData.append("mp3", mp3EditInput.files[0]);

  // const imageUrl = await fetch("http://localhost:5000/addNewSongImage", {
  //   method: "POST",
  //   headers: {
  //     token,
  //   },
  //   body: imageInput.files[0],
  // });

  // const mp3EditUrl = await fetch("http://localhost:5000/addNewSongMP3Edit", {
  //   method: "POST",
  //   headers: {
  //     token,
  //   },
  //   body: mp3FormData.getAll("mp3"),
  // });

  // upload the song Details
  const name = form.name.value;
  const bpm = form.bpm.value;
  const image = form.image.value;
  const mp3Edit = form.mp3Edit.value;
  const mp3Org = form.mp3Org.value;
  const wav = form.wav.value;
  const stem = form.stem.value;
  const licence = form.licence.value;
  const parentFolder = form.parentFolder.value;

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
      mp3Edit,
      mp3Org,
      wav,
      stem,
      licence,
      parentFolder,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      alert(res.message);
    });
}
