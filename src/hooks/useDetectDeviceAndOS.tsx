interface DataType {
  name: string;
  value: string;
  version: string;
}

interface UseDetectDeviceAndOS {
  userAgent: string;
  OS: string | undefined;
  browser: string | undefined;
}

const OS = [
  { name: 'iPhone', value: 'iPhone', version: 'OS' },
  { name: 'iPad', value: 'iPad', version: 'OS' },
  { name: 'Macintosh', value: 'Mac', version: 'OS X' },
];

const browsers = [
  { name: 'Safari', value: 'Safari', version: 'Version' },
  { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
];

const useDetectDeviceAndOS = (): UseDetectDeviceAndOS => {
  let headers: string[] = [];

  if (typeof window !== 'undefined') {
    headers = [navigator.userAgent, navigator.vendor];
  }

  const matchItem = (userAgent: string, data: DataType[]) => {
    for (let i = 0; i < data.length; i += 1) {
      const regex = new RegExp(data[i].value, 'i');
      const match = regex.test(userAgent);
      if (match) {
        return data[i].name;
      }
    }
    return undefined;
  };

  const userAgent = headers.join(' ');
  const currentOS = matchItem(userAgent, OS);
  const currentBrowser = matchItem(userAgent, browsers);

  return { userAgent, OS: currentOS, browser: currentBrowser };
};

export default useDetectDeviceAndOS;
