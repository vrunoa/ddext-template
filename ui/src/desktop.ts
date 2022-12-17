import { createDockerDesktopClient } from '@docker/extension-api-client';

const client = createDockerDesktopClient();

export default class DesktopClientHelper {
  static openUrl(url: string): void {
    client.host.openExternal(url);
  }

  static get(route: string) {
    return client.extension.vm?.service?.get(route);
  }

  static toast(msg: string): void {
    client.desktopUI.toast.error(msg);
  }
}
