import { IPageParam } from '../interfaces/IPageParam';
import { IFetchData } from '../interfaces/IFetchData';
import { IBean } from '../interfaces/IBean';

class JBService {
  _apiBase = 'https://jellybellywikiapi.onrender.com/api/';

  _isFetchData(obj: any): obj is IFetchData {
    return (
      'totalCount' in obj &&
      'items' in obj &&
      'currentPage' in obj &&
      'pageSize' in obj &&
      'totalPages' in obj
    );
  }
  _isBean(obj: any): obj is IBean {
    return 'beanId' in obj && 'description' in obj;
  }

  getResource = async (url: string) => {
    try {
      let res = await fetch(url);
      if (!res.ok)
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      return await res.json();
    } catch (error) {
      return error;
    }
  };

  getAllBeans = async (obj: IPageParam) => {
    const url =
      this._apiBase +
      'beans' +
      `?pageIndex=${obj.page}&pageSize=${obj.pageSize ? obj.pageSize : 12}`;
    return this._shouldSendResult(await this.getResource(url)) as IFetchData;
  };

  getBean = async (id: number) => {
    const url = this._apiBase + 'beans' + `/${id}`;
    return this._shouldSendResult(await this.getResource(url)) as IBean;
  };

  getAllFacts = async (obj: IPageParam) => {
    const url =
      this._apiBase +
      'facts' +
      `?pageIndex=${obj.page}&pageSize=${obj.pageSize ? obj.pageSize : 8}`;
    return this._shouldSendResult(await this.getResource(url)) as IFetchData;
  };

  getAllRecipes = async (obj: IPageParam) => {
    const url =
      this._apiBase +
      'recipes' +
      `?pageIndex=${obj.page}&pageSize=${obj.pageSize ? obj.pageSize : 10}`;
    return this._shouldSendResult(await this.getResource(url)) as IFetchData;
  };

  getAllCombinations = async (obj: IPageParam) => {
    const url =
      this._apiBase +
      'combinations' +
      `?pageIndex=${obj.page}&pageSize=${obj.pageSize ? obj.pageSize : 10}`;
    return this._shouldSendResult(await this.getResource(url)) as IFetchData;
  };

  getHistory = async (obj: IPageParam) => {
    const url =
      this._apiBase +
      'milestones' +
      `?pageIndex=${obj.page}&pageSize=${obj.pageSize ? obj.pageSize : 15}`;
    return this._shouldSendResult(await this.getResource(url)) as IFetchData;
  };

  _shouldSendResult = (result: any) => {
    if (this._isFetchData(result)) {
      return result;
    } else if (this._isBean(result)) {
      return result;
    } else {
      throw result;
    }
  };
}

export default JBService;
