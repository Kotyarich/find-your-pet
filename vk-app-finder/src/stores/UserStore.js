import {decorate, observable} from 'mobx';
import bridge from '@vkontakte/vk-bridge';
import config from '../config';

class UserStore {
  constructor() {
    bridge.send("VKWebAppGetUserInfo", {}).then(
      result => {
        this.id = result.id;
      }
    );
    bridge.send('VKWebAppAllowNotifications', {});
  }

  id = -1;

  getId = async () => {
    return bridge.send("VKWebAppGetUserInfo", {});
  };

  getPosition = async () => {
    return bridge.send("VKWebAppGetGeodata", {});
  };

  share(text) {
    bridge.send("VKWebAppShowWallPostBox", {message: text});
  }

  getUserById = async (id) => {
    return bridge.send('VKWebAppCallAPIMethod', {
      method: 'users.get',
      request_id: 'user.get' + id,
      params: {
        v: '5.103',
        user_ids: id,
        fields: 'can_write_private_message,photo_50',
        access_token: config.serviceKey,
      },
    })
  };

  changeLocation = (location) => {
    return bridge.send('VKWebAppSetLocation', {
      'location': location
    });
  }
}

decorate(UserStore, {
  id: observable,
});

export default UserStore;