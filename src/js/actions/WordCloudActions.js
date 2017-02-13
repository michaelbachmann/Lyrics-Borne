import dispatcher from "../dispatcher";

export function reloadWordCloud() {
  dispatcher.dispatch({type: "fetch-word-cloud-data"});
  setTimeout(() => {
    dispatcher.dispatch({type: "receive-word-cloud-data", wordData: [
      { value: "Shakira", count: 25 }, { value: "Justin", count: 18 },
      { value: "Jkwon", count: 38 }, { value: "Timberlake", count: 30 },
      { value: "Eminem", count: 28 }, { value: "50Cent", count: 25 },
      { value: "Drake", count: 33 }, { value: "Doc", count: 20 },
      { value: "Nelly", count: 22 }, { value: "E40", count: 7 },
      { value: "VanillaIce", count: 25 }, { value: "Radiohead", count: 15 },
      { value: "Mocha", count: 17 }, { value: "Jet", count: 27 },
      { value: "Christina", count: 30 }, { value: "Booya", count: 15 },
      { value: "Aguilera", count: 30 }, { value: "Remote", count: 11 },
    ]});
  }, 2000);
}