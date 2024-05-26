export function test() {
  setTimeout(() => console.log("1"), 0);
  console.log("2");
  console.log("3");
}

// PROMISE
export function httpGetAsync(
  theUrl: string,
  resolve: (data: XMLHttpRequest) => void
): void {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp);
  };
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

export const currentPromise = new Promise<XMLHttpRequest>((resolve) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});

export const promise2 = new Promise<XMLHttpRequest>((resolve) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});

export const promise3 = new Promise<XMLHttpRequest>((resolve) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});

// export const executeAsync = async () => {
//   try {
//     const response = await currentPromise;
//     document.getElementById("img_1")?.setAttribute("src", response.responseURL);

//     const response2 = await promise2;
//     document
//       .getElementById("img_2")
//       ?.setAttribute("src", response2.responseURL);

//     const response3 = await promise3;
//     document
//       .getElementById("img_3")
//       ?.setAttribute("src", response3.responseURL);
//   } catch (err) {
//     console.log(err);
//     return null;
//   }
// };

// export const currentPromise = new Promise<XMLHttpRequest>((resolve) => {
//     httpGetAsync("https://picsum.photos/200/300", resolve);

//     //   if (condition) {
//     //     // request API
//     //     setTimeout(() => {
//     //       resolve("Success");
//     //     }, 3000);
//     //   } else {
//     //     reject("Error");
//     //   }
//   });

// // chaining
// currentPromise
//   .then((data) => {
//     console.log(data);
//     document.getElementById("img_1")?.setAttribute("src", data.responseURL);

//     return promise2;
//   })
//   .then((data) => {
//     document.getElementById("img_2")?.setAttribute("src", data.responseURL);
//     return promise3;
//   })
//   .then((data) => {
//     document.getElementById("img_3")?.setAttribute("src", data.responseURL);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// export function httpGetAsync(
//   theUrl: string,
//   callback: (data: XMLHttpRequest) => void
// ) {
//   const xmlHttp = new XMLHttpRequest();
//   xmlHttp.onreadystatechange = function () {
//     if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
//   };
//   xmlHttp.open("GET", theUrl, true); // true for asynchronous
//   xmlHttp.send(null);
// }

// httpGetAsync("https://picsum.photos/200/300", (data) => {
//   console.log(data);
//   document.getElementById("img_1")?.setAttribute("src", data.responseURL);
//   httpGetAsync("https://picsum.photos/200/300", (data) => {
//     document.getElementById("img_2")?.setAttribute("src", data.responseURL);
//     httpGetAsync("https://picsum.photos/200/300", (data) => {
//       document.getElementById("img_3")?.setAttribute("src", data.responseURL);
//     });
//   });
// });
