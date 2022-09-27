export function StringToBoolian(param: string | null) {
  if (param == "true") {
    return true;
  } else {
    return false;
  }
}
export async function Chek(login: string, password: string) {
  switch (login && password) {
    case "admin" && "admin":
      localStorage.setItem("sicret", "true");
      break;
    case "" && "": {
      const p = new Promise((resulve, reject) => {
        setTimeout(
          () => resulve(StringToBoolian(localStorage.getItem("sicret"))),
          500
        );
      });
      return p;
    }
    case "logout" && "logout":
      localStorage.setItem("sicret", "false");
  }
}
