export const handleCookie = () => {
  document.cookie = `name=TA; expires=${new Date(
    "2024-05-26 14:00:00"
  ).toUTCString()}`;
  document.cookie = `age=35; expires=${new Date(
    "2024-05-26 14:00:00"
  ).toUTCString()}`;

  console.log({ newCookie: document.cookie });
};

export const handleLocalStorage = () => {
  localStorage.setItem("name", "TA");
  localStorage.setItem("age", "35");
  console.log("Name: ", { newLocalStorage: localStorage.getItem("name") });
  console.log("Age: ", { newLocalStorage: localStorage.getItem("age") });
};

export const handleRemoveItemLocalStorage = () => {
  localStorage.removeItem("age");
  //   localStorage.clear();
  console.log("Name: ", { newLocalStorage: localStorage.getItem("name") });
  console.log("Age: ", { newLocalStorage: localStorage.getItem("age") });
};

export const handleSessionStorage = () => {
  sessionStorage.setItem("job", "IT");
  console.log("Job: ", { newSessionStorage: sessionStorage.getItem("job") });
};
