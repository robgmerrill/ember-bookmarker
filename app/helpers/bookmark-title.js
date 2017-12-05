import { helper } from '@ember/component/helper';

export function bookmarkTitle([title, about]) {
  let returnStr = title;
  if (about != null) {
    returnStr += ' - ' + about;
  }
  return returnStr;
}

export default helper(bookmarkTitle);
