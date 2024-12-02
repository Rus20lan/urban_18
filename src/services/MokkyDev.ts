import { IComment } from '../interfaces/IComment';

export class MokkyDev {
  _apiBase = 'https://fa3a90ffe5ec7df5.mokky.dev/comments';

  sendComment = async (comment: IComment) => {
    try {
      const response = await fetch(this._apiBase, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(comment),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        return 'The comment has been sent successfully';
      } else {
        throw new TypeError();
      }
    } catch (e: any) {
      return 'Alas and ah, there is an error on the server side. try again later';
    }
  };
}
