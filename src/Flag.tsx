import TypeWriter from "./TypeWriter";

// To capture the flag, go to https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge
// and run
// [...document.querySelectorAll(section[data-id^="92"] > article[data-class$="45"] > div[data-tag*="78"] b.ref)].map(element => element.getAttribute('value')).join('')
const FLAG_CAPTURED_URL =
  "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/6b696e";

const fetchFlag = () => {
  return fetch(FLAG_CAPTURED_URL).then((response) => response.text());
};

const promiseToResource = <T extends unknown>(promise: Promise<T>) => {
  let status = "pending";
  let result: T;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

const flagResource = promiseToResource(fetchFlag());

const Flag = () => {
  const flag = flagResource.read();
  return flag ? <TypeWriter>{flag}</TypeWriter> : null;
};

export default Flag;
